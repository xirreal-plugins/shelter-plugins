import { watch, readFile, readFileSync, readdirSync } from "fs";
import { sep, extname } from "path";
import { createServer } from "http";
import { server as WebSocketServer } from "websocket";

import buildPlugin from "./build.mjs";

let isRebuilding = false;

watch("./plugins", { recursive: true }, (eventType, filename) => {
   if (isRebuilding) return;
   isRebuilding = true;

   let plugin = filename.split(sep)[0];

   console.log("Rebuilding " + plugin + "...");
   buildPlugin(plugin)
      .then(() => {
         console.log("Successfully rebuilt " + plugin + "!");
         broadcast(plugin);
      })
      .catch((e) => {
         console.error("Failed to rebuild " + plugin + "!");
      })
      .finally(() => {
         isRebuilding = false;
      });
});

const PORT = 11816;

const CORS_HEADERS = {
   "Access-Control-Allow-Origin": "*",
   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
   "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

let server, wsServer;
let clients = new Map();

function getContentType(extname) {
   switch (extname) {
      case ".js":
         return "application/javascript";
      case ".json":
         return "application/json";
      default:
         return "text/plain";
   }
}

function listPlugins() {
   return readdirSync("./plugins", { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
}

const regex = new RegExp("^https:\\/\\/([a-zA-Z0-9_-]+\\.)?discord\\.com");

function isConnectionAllowed(origin, address) {
   // Make sure address is localhost
   if (
      address !== "::1" &&
      address !== "127.0.0.1" &&
      address !== "localhost" &&
      address !== "localhost."
   )
      return false;
   return regex.test(origin);
}

function broadcast(plug) {
   clients.forEach((connection) => {
      connection.sendUTF(`{ type: "update", plugin: ${plug})} }`);
   });
}

function startWSServer() {
   wsServer = new WebSocketServer({
      httpServer: server,
      autoAcceptConnections: false,
   });

   wsServer.on("request", function (request) {
      if (!isConnectionAllowed(request.origin, request.remoteAddress)) {
         request.reject();
         console.log(
            `(wss) Connection from ${request.origin}@${request.remoteAddress} rejected.`
         );
         return;
      }

      var connection = request.accept(null, request.origin);

      // Generate a unique ID for the client
      const id = Math.random().toString(16).slice(2, 9).toLocaleUpperCase();

      clients.set(id, connection);

      console.log(`(wss) Connection to "${id}" accepted.`);

      connection.sendUTF(`{type: "init", plugins: ${listPlugins().join(",")}}`);

      connection.on("message", function (message) {
         if (message.type === "utf8") {
            console.log(`(wss) "${id}" requested: ${message.utf8Data}`);

            const payload = JSON.parse(message.utf8Data);

            if (payload.request == "fetch") {
               const plugin = payload.plugin;

               const data = readFileSync(`./dist/${plugin}/plugin.js`, "utf8");
               const manifest = readFileSync(
                  `./dist/${plugin}/plugin.json`,
                  "utf8"
               );

               connection.sendUTF(
                  `{"type":"fetch", plugin": "${plugin}", "data": "${data}", "manifest": "${manifest}"}`
               );
            } else {
               console.log(
                  `(wss) Unknown request type from "${id}": ${payload.request}`
               );
            }
         }
      });
      connection.on("close", function (reasonCode, description) {
         console.log(`(wss) Client "${id}" disconnected.`);
         clients.delete(id);
      });
   });
}

function startHTTPServer() {
   // Create a new HTTP server instance
   server = createServer((req, res) => {
      // Set the CORS headers for all responses
      Object.entries(CORS_HEADERS).forEach(([key, value]) => {
         res.setHeader(key, value);
      });

      const filePath = "./dist" + req.url;
      const ext = extname(filePath);
      const contentType = getContentType(ext);

      // Serve content in /dist
      if (
         contentType === "application/json" ||
         contentType === "application/javascript"
      ) {
         // Serve .json and .js files from the dist folder
         readFile(filePath, (err, data) => {
            if (err) {
               res.writeHead(404);
               res.end(`Error: ${err}`);
               return;
            }
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);
         });
      } else {
         // Handle other requests
         res.statusCode = 400;
         res.end("Bad request");
      }
   });

   // Start listening on the specified port
   server.listen(PORT, () => {
      console.log(`Dev server running on http://localhost:${PORT}/`);
      console.log(
         `To add a plugin in shelter, append the plugin name found below to the URL along with a trailing /. \nExample: http://localhost:${PORT}/myCoolPlugin/\n`
      );
      console.log(
         `Alternatively, you can use the built in websocket. \nExample: ws://localhost:${PORT}/\n`
      );
   });
}

function stopHTTPServer() {
   server.close();
}

function stopWSServer() {
   wsServer.close();
}

startHTTPServer();
startWSServer();

process.on("beforeExit", () => {
   stopHTTPServer();
   stopWSServer();
});

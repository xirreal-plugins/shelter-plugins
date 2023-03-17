import { watch, readFile, readdirSync } from "fs";
import { sep, extname } from "path";
import { createServer } from "http";
import buildPlugin from "./build.mjs";

let isRebuilding = false;

watch("./plugins", { recursive: true }, (eventType, filename) => {
  if (filename.endsWith(".js") || filename.endsWith(".scss")) {
    if (isRebuilding) return;
    isRebuilding = true;
    stopServer();

    let plugin = filename.split(sep)[0];

    console.log("Rebuilding " + plugin + "...");
    buildPlugin(plugin)
      .then(() => {
        console.log("Successfully rebuilt " + plugin + "!");
      })
      .catch((e) => {
        console.error("Failed to rebuild " + plugin + ":", e);
      })
      .finally(() => {
        isRebuilding = false;
        startServer();
      });
  }
});

const PORT = 8080;
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

let server;
let firstRun = true;

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

// Function to start the HTTP server
function startServer() {
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
    if (firstRun) {
      console.log(`Dev server listening on http://localhost:${PORT}/`);
      console.log(
        `To add a plugin in shelter, append the plugin name found below to the URL along with a trailing /. \nExample: http://localhost:${PORT}/myCoolPlugin/\n`
      );
      firstRun = false;
    }
  });
}

function stopServer() {
  server.close();
}

startServer();

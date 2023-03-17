import { createHash } from "crypto";
import { readdir, readFile, writeFile, rm } from "fs/promises";
import { existsSync } from "fs";
import { build } from "esbuild";
import { solidPlugin } from "esbuild-plugin-solid";
import { postcssModules, sassPlugin } from "esbuild-sass-plugin-ysink";

const MD5 = (data) => createHash("md5").update(data).digest("hex").toString();

async function buildPlugin(plug) {
  const outfile = `dist/${plug}/plugin.js`;
  const entryPoint = `plugins/${plug}/index.js`;

  await build({
    entryPoints: [entryPoint],
    bundle: true,
    outfile: outfile,
    minify: true,
    plugins: [
      solidPlugin(),
      sassPlugin({
        style: "compressed",
        sourceMap: false,
        transform: postcssModules({
          localsConvention: "camelCaseOnly",
          inject: false,
        }),
      }),
      {
        name: "solid-shelter-resolver",
        setup(build) {
          build.onResolve({ filter: /solid-js\/web/ }, ({ path }) => ({
            path,
            namespace: "shltr-res-ns",
          }));
          build.onLoad({ filter: /.*/, namespace: "shltr-res-ns" }, () => ({
            contents: "module.exports = shelter.solidWeb",
            loader: "js",
          }));
        },
      },
    ],
    globalName: "e",
  });

  await writeFile(
    outfile,
    (await readFile(outfile)).toString().replace(/var e\s*=/, "")
  );

  const manifest = (await readFile(`plugins/${plug}/plugin.json`)).toString();

  await writeFile(
    `dist/${plug}/plugin.json`,
    manifest.replace(
      "<HASH_PLACEHOLDER>",
      MD5((await readFile(outfile)).toString())
    )
  );
}

if (existsSync("dist")) await rm("dist", { recursive: true });

let promises = [];

for (const plug of await readdir("plugins")) {
  promises.push(buildPlugin(plug));
}

Promise.all(promises).then(async () => {
  console.log("Plugins built:");
  for (const plug of await readdir("dist")) {
    console.log("  " + plug);
  }
});

export default buildPlugin;

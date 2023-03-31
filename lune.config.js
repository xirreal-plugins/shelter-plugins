import { defineConfig } from "@uwu/lune";

export default defineConfig({
	// this is the directory that your plugins live in.
	repoSubDir: "plugins",

	// this enables CSS Module support - see docs for info
	cssModules: true,

	// these add extra esbuild plugins into the pipeline.
	// prePlugins: [],
	// postPlugins: [],
});

import { defineCollection, z } from "astro:content";
import type { Loader, LoaderContext } from "astro/loaders";
import fs from "node:fs";
import path from "node:path";

const pluginsDir = path.resolve(import.meta.dirname, "../../plugins");

const pluginLoader: Loader = {
   name: "shelter-plugin-loader",
   async load(context: LoaderContext) {
      const { store, logger, watcher } = context;

      if (watcher) {
         const globPattern = path.join(pluginsDir, "*", "plugin.json").split(path.sep).join(path.posix.sep);

         watcher.add(globPattern);
      }

      watcher?.on("change", async (changedPath) => {
         if (changedPath.startsWith(pluginsDir)) {
            logger.info(`Detected plugin manifest change, reloading plugins...`);
            await this.load(context);
         }
      });

      store.clear();

      const pluginFolders = fs.readdirSync(pluginsDir, { withFileTypes: true });

      for (const folder of pluginFolders) {
         if (!folder.isDirectory()) continue;

         const pluginJsonPath = path.join(pluginsDir, folder.name, "plugin.json");
         watcher?.add(pluginJsonPath);

         if (!fs.existsSync(pluginJsonPath)) continue;

         let pluginJson;
         try {
            pluginJson = JSON.parse(fs.readFileSync(pluginJsonPath, "utf-8"));
         } catch (e) {
            logger.error(`Failed to parse JSON for plugin ${folder.name}: ${(e as Error).message}`);
            continue;
         }

         if (pluginJson.site?.ignored) {
            logger.info(`Skipping ignored plugin: ${folder.name}`);
            continue;
         }

         const url = `https://shelter.xirreal.dev/${folder.name}/`;

         store.set({
            id: folder.name,
            data: {
               title: pluginJson.name,
               description: pluginJson.description,
               longDescription: pluginJson.site?.longDescription,
               url,
               demoImage: pluginJson.site?.demoImage,
               pinned: pluginJson.site?.pinned ?? false,
               warnings: pluginJson.site?.warnings ?? [],
               infos: pluginJson.site?.infos ?? [],
            },
         });
         logger.info(`Loaded plugin: ${pluginJson.name}`);
      }
   },
};

const plugins = defineCollection({
   loader: pluginLoader,
   schema: z.object({
      title: z.string(),
      description: z.string(),
      longDescription: z.string().optional(),
      url: z.string(),
      demoImage: z.string().optional(),
      pinned: z.boolean().default(false),
      warnings: z.array(z.string()).default([]),
      infos: z.array(z.string()).default([]),
   }),
});

export const collections = { plugins };

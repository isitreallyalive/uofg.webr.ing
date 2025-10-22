// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { type AstroIntegration } from "astro";
import path from "node:path";
import fs from "node:fs/promises";

function ringfairy(): AstroIntegration {
  return {
    name: "ringfairy",
    hooks: {
      "astro:build:done": async ({ logger, dir: { pathname: dist } }) => {
        await fs.mkdir(path.resolve(dist, "assets"), { recursive: true });
        const templates = path.resolve(dist, "templates");

        // move necessary html files to templates directory
        for (const file of await fs.readdir(dist, { recursive: true })) {
          const oldPath = path.resolve(dist, file);
          if (!file.endsWith(".html")) continue; // we only care about html files

          let newPath: string;
          // special pages are in subdirectories
          const dir = path.dirname(file);
          if (dir === ".") newPath = path.resolve(templates, file);
          else newPath = path.resolve(templates, `${dir}.html`);
          // ensure directory exists
          await fs.mkdir(path.dirname(newPath), { recursive: true });
          await fs.rename(oldPath, newPath);

          // change the assets path in the moved html files
          let contents = await fs.readFile(newPath, "utf-8");
          contents = contents.replace(/href="\/assets\//g, 'href="/');
          contents = contents.replace(/src="\/assets\//g, 'src="/');
          await fs.writeFile(newPath, contents, "utf-8");
        }
      },
    },
  };
}

export default defineConfig({
  integrations: [ringfairy()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    assets: "assets",
  },
});

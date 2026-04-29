import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://menamerai.github.io",
  base: "/moonveil",
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: false,
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

// GitHub Pages serves 404.html for unknown paths — copying index.html
// lets the SPA load on reload of client-side routes like /portfolio/detail
function spaFallback() {
  return {
    name: "spa-github-pages-fallback",
    closeBundle() {
      const dist = resolve(__dirname, "dist");
      copyFileSync(resolve(dist, "index.html"), resolve(dist, "404.html"));
    },
  };
}

export default defineConfig({
  plugins: [react(), spaFallback()],
  base: "/portfolio/",
});

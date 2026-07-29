import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from GitHub Pages at /mission-control-revenue-operating-system/mcros/
export default defineConfig({
  base: "/mission-control-revenue-operating-system/mcros/",
  plugins: [react()],
  build: {
    outDir: "../mcros",
    emptyOutDir: true,
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Adjust the path as necessary
      components: "/src/components",
      assets: "/src/assets",
      modules: "/src/modules",
      styles: "/src/styles",
      utils: "/src/utils",
    },
  },
});

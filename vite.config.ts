import { defineConfig } from "vite";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: `@use "/src/styles/utils" as *;`,
      },
    },
    modules: {
      generateScopedName: "[local]__[hash:base64:7]",
    },
  },
  plugins: [react()],
});

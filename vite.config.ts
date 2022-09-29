import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
// for jest while it not supporting import.meta
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgrPlugin(), EnvironmentPlugin("all")],
  server: {
    port: 3000,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },

  envPrefix: "APP_",
  base: "",
  build: {
    sourcemap: true,
    outDir: "build",
    manifest: "manifest.json",
  },
});

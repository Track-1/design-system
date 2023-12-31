import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import ViteBabelPlugin from "vite-plugin-babel";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/lib/index.tsx",
      name: "track-1-design-system",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    commonjsOptions: {
      esmExternals: ["react"],
    },
  },
  plugins: [
    tsconfigPaths(),
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
    vanillaExtractPlugin({
      // configuration
    }),
    ViteBabelPlugin(),
  ],
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
});

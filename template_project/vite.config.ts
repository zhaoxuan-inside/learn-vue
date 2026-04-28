import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(path) {
          if (path.includes("node_modules/vue")) {
            return "vue";
          }
        },
      },
    },
  },
});

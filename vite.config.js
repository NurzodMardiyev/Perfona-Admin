import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/admin/", // admin panel uchun
  server: {
    port: 5174, // boshqa port tanlang
    strictPort: true,
  },
  build: {
    outDir: "./dist",
  },
});

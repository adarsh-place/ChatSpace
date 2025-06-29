import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // const BASE_URL = mode === "development" ? "http://localhost:4002" : "";
  return {
    plugins: [react()],
    server: {
      port: 3001,
      proxy: {
        "/api": {
          target: "http://localhost:4002",
          changeOrigin: true,
        },
      },
    },
  };
});

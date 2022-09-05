import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import md from "vite-plugin-react-md";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), md.default()],
});

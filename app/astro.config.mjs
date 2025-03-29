
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    allowedHosts: ['c5c6-106-215-93-107.ngrok-free.app', 'localhost']
}
});
import { crx, defineManifest } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const manifest = defineManifest({
  name: "TL;DR ChatGPT",
  version: "1.0.0",
  manifest_version: 3,
  description: "Summarize articles using ChatGPT",
  icons: {
    16: "img/icon16.png",
    48: "img/icon48.png",
    128: "img/icon128.png",
  },
  permissions: [],
  action: {
    default_icon: "img/icon16.png",
    default_popup: "index.html",
  },
  // content_scripts: [
  //   {
  //     matches: ["<all_urls>"],
  //     js: ["src/main.tsx"],
  //   },
  // ],
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
});

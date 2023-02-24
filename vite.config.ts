import { crx, defineManifest } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const manifest = defineManifest({
  name: "ChatGPT TL;DR",
  version: "1.0.0",
  manifest_version: 3,
  description: "Summarize articles using ChatGPT",
  icons: {
    16: "src/assets/icon16.png",
    48: "src/assets/icon48.png",
    128: "src/assets/icon128.png",
  },
  permissions: [],
  action: {
    default_icon: "src/assets/icon16.png",
    default_popup: "src/popup/popup.html",
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
  build: {
    rollupOptions: {
      input: {
        app: "index.html", // default
      },
    },
  },
});

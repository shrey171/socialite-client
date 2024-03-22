import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  resolve: {
    alias: [
      { find: "assets", replacement: "/src/assets" },
      { find: "components", replacement: "/src/components" },
      { find: "auth", replacement: "/src/auth" },
      { find: "pages", replacement: "/src/pages" },
      { find: "store", replacement: "/src/store" },
      { find: "utils", replacement: "/src/utils" },
      { find: "hooks", replacement: "/src/hooks" },
    ],
  },
  plugins: [react(), svgr({ include: "**/*.svg?react", })],
})

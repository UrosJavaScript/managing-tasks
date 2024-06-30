import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_AUTHENTICATE": JSON.stringify(
      process.env.VITE_AUTHENTICATE
    ),
  },
});

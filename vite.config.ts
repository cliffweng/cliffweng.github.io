import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Custom domain serves the site at the root of cliffweng.com.
export default defineConfig({
  base: "/",
  plugins: [react()],
});

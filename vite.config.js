import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Use './' or '/your-repo-name/' if deployed on a subpath
});

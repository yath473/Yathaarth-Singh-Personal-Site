import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// BASE_PATH is set in CI so assets load from /<repo-name>/ on GitHub Pages.
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [react()],
  test: { environment: "jsdom", globals: true },
});

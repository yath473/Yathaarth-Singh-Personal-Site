import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Yathaarth-Singh-Personal-Site/",
  plugins: [react()],
  test: { environment: "jsdom", globals: true },
});

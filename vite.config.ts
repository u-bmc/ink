import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, type UserConfig } from "vite";
import type { InlineConfig } from "vitest";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: [".yarn"]
    }
  },
  test: {
    coverage: {
      provider: "c8"
    },
    include: ["tests/*.test.ts"],
    watch: false
  }
} as VitestConfigExport);

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // The 3D view and image style tests take ~8 s on a slower machine, past vitest's 5 s default.
    testTimeout: 30_000,
  },
});

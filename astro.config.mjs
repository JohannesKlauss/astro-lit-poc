import { defineConfig } from 'astro/config';
import lit from "@astrojs/lit";
import node from "@astrojs/node";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [lit()],
  adapter: vercel()
});
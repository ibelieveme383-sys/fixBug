import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  prerender: async () => {
    // Return an array of paths to prerender, e.g. ["/", "/about"]
    return ["/"];
  }
} satisfies Config;

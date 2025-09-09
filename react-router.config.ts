import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  ssr: true,
  async prerender() {
    return [
      "/",          // prerendered (SSG)
      "/about",     // prerendered (SSG)
      // leave others out → they’ll be SSR by default
    ];
  },
  presets: [vercelPreset()],
} satisfies Config;
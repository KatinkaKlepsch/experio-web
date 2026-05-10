import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // pre-render alt til statisk HTML
  images: { unoptimized: true },  // next/image-optimering kræver runtime — slå fra for static
  trailingSlash: true,     // bedre kompatibilitet med Cloudflare Pages routing
};

export default nextConfig;
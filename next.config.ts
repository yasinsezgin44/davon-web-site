import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "default",
    domains: [],
    // Use Next.js built‑in optimization for local images
    unoptimized: false,
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
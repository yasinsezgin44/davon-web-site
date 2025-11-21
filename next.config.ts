import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: 'default',
    domains: [],
    unoptimized: true, // Disable optimization to serve images statically
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Ensure static files are served correctly
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

export default nextConfig;
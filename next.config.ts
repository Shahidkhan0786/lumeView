import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // Ignores type errors
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    /* config options here */
    output: 'export', // 👈 enables static export
  images: { unoptimized: true }, // 👈 disables Next Image Optimization
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    // output: 'export',
  images: { qualities: [75, 100] },
  allowedDevOrigins: ["*.ngrok-free.dev", "*.ngrok-free.app", "*.ngrok.io","*.trycloudflare.com"],
};

export default nextConfig;

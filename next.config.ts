import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "ideogram.ai",
        port: "",
      },
      {
        protocol: "https",
        hostname: "tunis-next.netlify.app",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.ramseysolutions.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  // basePath: "/PortofolioKuh",
  images: {
    unoptimized: true,
  },
  // allowedDevOrigins: ["172.18.2.200"],
}

export default nextConfig
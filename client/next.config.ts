import type { NextConfig } from "next";
import { RemotePattern } from "next/dist/shared/lib/image-config";

const strapiUrlString = process.env.STRAPI_API_URL || 'http://localhost:1337'
const strapiUrl = new URL(strapiUrlString)

const remotePatterns: RemotePattern[] = [
  {
    protocol: strapiUrl.protocol.replace(':', '') as 'http' | 'https' | undefined,
    hostname: strapiUrl.hostname,
    port: strapiUrl.port,
    pathname: '/uploads/**'
  }
]

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: remotePatterns
  }
};

export default nextConfig;

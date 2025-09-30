import type { NextConfig } from "next";
import { RemotePattern } from "next/dist/shared/lib/image-config";

const strapiUrlString = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
const strapiUrl = new URL(strapiUrlString)

const strapiMediaUrlString = process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL || 'http://localhost:1337'
const strapiMediaUrl = new URL(strapiMediaUrlString)

const remotePatterns: RemotePattern[] = [
  {
    protocol: strapiUrl.protocol.replace(':', '') as 'http' | 'https' | undefined,
    hostname: strapiUrl.hostname,
    port: strapiUrl.port,
    pathname: '/**'
  },
  {
    protocol: strapiMediaUrl.protocol.replace(':', '') as 'http' | 'https',
    hostname: strapiMediaUrl.hostname,
    port: strapiMediaUrl.port,
    pathname: '/**'
  }
]

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: remotePatterns
  }
};

export default nextConfig;

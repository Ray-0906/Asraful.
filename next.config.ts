import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: projectRoot,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

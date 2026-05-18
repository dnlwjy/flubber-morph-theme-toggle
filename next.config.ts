import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/flubber-morph-theme-toggle",
  assetPrefix: "/flubber-morph-theme-toggle/",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
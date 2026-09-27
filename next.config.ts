import path from "node:path";
import type { NextConfig } from "next";

/** Set in CI for project Pages: https://firouzzadeh99.github.io/gilmar/ */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // Required for `output: "export"` — no Image Optimization server on Pages.
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  sassOptions: {
    // Lets any .scss file do `@use "abstracts" as *;` without relative paths.
    loadPaths: [path.join(process.cwd(), "src/styles")],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

/**
 * GitHub Pages serves project sites from `https://<owner>.github.io/<repo>/`,
 * so every asset and internal link needs a path prefix. The deploy workflow
 * derives this from `actions/configure-pages` (empty for user/org pages and
 * for custom domains such as https://aitechx.vn).
 */
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Emit a fully static site into ./out so it can be hosted on GitHub Pages.
  output: "export",

  // `/about` becomes `out/about/index.html`, which is the shape GitHub Pages
  // serves directory requests from.
  trailingSlash: true,

  basePath,

  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    // Static export has no server to optimise images on demand.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },

  // Note: response headers (CSP, X-Frame-Options, …) cannot be configured for
  // static hosting on GitHub Pages — set them at a proxy/CDN in front of the
  // site instead.
};

export default nextConfig;

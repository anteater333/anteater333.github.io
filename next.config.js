/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  compiler: {
    styledComponents: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: process.env.BUILD_DIR || undefined,
};

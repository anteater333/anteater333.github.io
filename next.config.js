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
  basePath: "/Anteater_lab_v3",
  distDir: process.env.BUILD_DIR || "out",
};

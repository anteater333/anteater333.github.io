/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://blog.anteater-lab.link",
  generateRobotsTxt: true,
  outDir: "out/",
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  changefreq: "daily",
  priority: 0.9,
  sitemapSize: 7000,
  generateRobotsTxt: true,
};

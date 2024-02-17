/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL,
    changefreq: 'daily',
    priority: 0.9,
    sitemapSize: 7000,
    generateRobotsTxt: true,
    
};

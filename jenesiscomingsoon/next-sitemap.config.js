/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://jenesis.com.tr", // kendi domainin
  generateRobotsTxt: true, // otomatik robots.txt üret
  sitemapSize: 7000, // çok fazla sayfa olursa parçalar
  changefreq: "weekly",
  priority: 0.7,
};

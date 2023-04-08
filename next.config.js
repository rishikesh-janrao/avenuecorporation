/** @type {import('next').NextConfig} */

const { getAll } = require('@vercel/edge-config')

const siteConfig = await getAll();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env:{
    domain:siteConfig.domain,
    siteUrl:siteConfig.siteUrl,
    salesEmails:siteConfig.salesEmails
  }
}

module.exports = nextConfig

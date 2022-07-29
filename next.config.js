/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["image.tmdb.org", "cdn-icons-png.flaticon.com"],
  },
  experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;

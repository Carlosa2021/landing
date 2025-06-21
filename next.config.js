/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['chainx.ch'], // ajusta si usas imágenes externas
  },
};

module.exports = nextConfig;

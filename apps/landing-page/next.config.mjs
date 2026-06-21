/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'utfs.io',
      'img.clerk.com',
      'subdomain',
      'ik.imagekit.io',
      'html.tailus.io',
      'tailark.com',
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Plain static files in out/, served by Netlify without any server functions.
    output: 'export',
    // /tr/privacy -> /tr/privacy/index.html, so every page is a real file on the CDN.
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
};

export default nextConfig;

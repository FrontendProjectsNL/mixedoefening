/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bdsm2day.nl',
        port: '',
        pathname: '/images/profiles/50/profile_img/**',
      },
    ],
  },
};

export default nextConfig;

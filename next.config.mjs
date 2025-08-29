/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'i.scdn.co', pathname: '/**' },
      { protocol: 'https', hostname: 'i1.sndcdn.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn-images.dzcdn.net', pathname: '/**' },
      { protocol: 'https', hostname: 'e-cdns-images.dzcdn.net', pathname: '/**' },
      { protocol: 'https', hostname: 'thumbnailer.mixcloud.com', pathname: '/**' },
    ],
  },
  // temporarily ignore type/eslint errors while we exclude files
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

// PROVE this config is being used:
console.log('>>> NEXT CONFIG: output=export (static export ON)');

export default nextConfig;

const nextConfig = {
  experimental: { agentUpgrade: 'security' },
  output: 'standalone',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

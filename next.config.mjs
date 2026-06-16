/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Lint is run separately in CI; don't block production builds on stylistic lint.
  eslint: { ignoreDuringBuilds: true },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  async redirects() {
    return [
      // Common aliases people may guess.
      { source: "/hospital", destination: "/ehr", permanent: false },
      { source: "/hospitals", destination: "/ehr", permanent: false },
      { source: "/patients", destination: "/telemedicine", permanent: false },
      { source: "/demo", destination: "/contact", permanent: false },
    ];
  },
};

export default nextConfig;

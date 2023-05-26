/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/d42ba1b4ddfb8a90580a58367da83a83/*",
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/public-images-5e6e98b5d6a9b294e961ed8e7b2836de/*",
      },
    ],
  },
};

module.exports = nextConfig;

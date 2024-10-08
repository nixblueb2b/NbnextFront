/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
    unoptimized: true,
},
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/users/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;



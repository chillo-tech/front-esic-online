/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  swcMinify: true,
  env: {
    ACCES_TOKEN: process.env.ACCES_TOKEN,
    API_URL: process.env.API_URL,
  },
  async rewrites() {
    return [
      {
        source: '/formations',
        destination: "/nos-formations",
      },
      {
        source: '/financements',
        destination: "/financements-cpf",
      },
      {
        source: '/formations-:id*',
        destination: "/formations",
      },
      {
        source: '/poe-:id*',
        destination: "/poe",
      },
      {
        source: '/certifications-:id*',
        destination: "/certifications",
      
      },
      {
        source: '/financements-cpf-:id*',
        destination: "/financements-cpf",
      }
    ]
  },
};

module.exports = nextConfig;

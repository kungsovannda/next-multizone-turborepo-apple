import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      
      /**
       * MAC ROUTE
       */
      {
        source: "/mac",
        destination: `${process.env.MAC_DOMAIN}/mac`,
      },
      {
        source: "/mac/:path*",
        destination: `${process.env.MAC_DOMAIN}/mac/:path*`,
      },
      /**
       * iPAD ROUTE
       */
      {
        source: "/ipad",
        destination: `${process.env.IPAD_DOMAIN}/ipad`,
      },
      {
        source: "/ipad/:path*",
        destination: `${process.env.IPAD_DOMAIN}/ipad/:path*`,
      },
      /**
       * iPHONE ROUTE
       */
      {
        source: "/iphone",
        destination: `${process.env.IPHONE_DOMAIN}/iphone`,
      },
      {
        source: "/iphone/:path*",
        destination: `${process.env.IPHONE_DOMAIN}/iphone/:path*`,
      }
    ];
  },
};

export default nextConfig;

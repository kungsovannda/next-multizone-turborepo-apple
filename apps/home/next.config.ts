import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      /**
       * MAC ROUTE
       */
      {
        source: "/mac",
        destination: `${process.env.MAC_DOMAIN}`,
      },
      {
        source: "/mac/:path*",
        destination: `${process.env.MAC_DOMAIN}/:path*`,
      },
      {
        source: "/mac-static/:path*",
        destination: `${process.env.MAC_DOMAIN}/mac-static/:path*`,
      },
      /**
       * iPAD ROUTE
       */
      {
        source: "/ipad",
        destination: `${process.env.IPAD_DOMAIN}`,
      },
      {
        source: "/ipad/:path*",
        destination: `${process.env.IPAD_DOMAIN}/:path*`,
      },
      {
        source: "/ipad-static/:path*",
        destination: `${process.env.IPAD_DOMAIN}/ipad-static/:path*`,
      },
      /**
       * iPHONE ROUTE
       */
      {
        source: "/iphone",
        destination: `${process.env.IPHONE_DOMAIN}`,
      },
      {
        source: "/iphone/:path*",
        destination: `${process.env.IPHONE_DOMAIN}/:path*`,
      },
      {
        source: "/iphone-static/:path*",
        destination: `${process.env.IPHONE_DOMAIN}/:path*`,
      },
    ];
  },
};

export default nextConfig;

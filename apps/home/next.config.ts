import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      /**
       * MAC ROUTE
       */
      {
        source: "/mac",
        destination: "http://localhost:3001",
      },
      {
        source: "/mac/:path*",
        destination: "http://localhost:3001/:path*",
      },
      {
        source: "/mac-static/:path*",
        destination: "http://localhost:3001/mac-static/:path*",
      },
      /**
       * iPAD ROUTE
       */
      {
        source: "/ipad",
        destination: "http://localhost:3002",
      },
      {
        source: "/ipad/:path*",
        destination: "http://localhost:3002/:path*",
      },
      {
        source: "/ipad-static/:path*",
        destination: "http://localhost:3002/ipad-static/:path*",
      },
      /**
       * iPHONE ROUTE
       */
      {
        source: "/iphone",
        destination: "http://localhost:3003",
      },
      {
        source: "/iphone/:path*",
        destination: "http://localhost:3003/:path*",
      },
      {
        source: "/iphone-static/:path*",
        destination: "http://localhost:3003/iphone-static/:path*",
      },
    ];
  },
};

export default nextConfig;

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const services: Record<string, string> = {
    '/mac': `${process.env.MAC_DOMAIN}`,
    '/ipad': `${process.env.IPAD_DOMAIN}`,
    '/iphone': `${process.env.IPHONE_DOMAIN}`,
  };

  for (const [path, serviceUrl] of Object.entries(services)) {
    if (pathname.startsWith(path)) {
      try {
        const response = await fetch(`${serviceUrl}${pathname}`, {
          method: request.method,
          headers: request.headers,
          signal: AbortSignal.timeout(5000),
        });

        if (!response.ok) {
          const url = request.nextUrl.clone();
          url.pathname = '/fallback';
          return NextResponse.rewrite(url);
        }
      } catch (error) {
        const url = request.nextUrl.clone();
        url.pathname = '/fallback';
        url.searchParams.set('error', String(error));
        return NextResponse.rewrite(url);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/mac/:path*', '/ipad/:path*', '/iphone/:path*'],
};
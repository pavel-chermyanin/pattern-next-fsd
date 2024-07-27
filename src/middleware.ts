// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { authMiddleware } from '@/src/app/lib/authMiddleware';

export function middleware(request: NextRequest) {
  console.log('Middleware triggered');

  // метод запроса
  const method = request.method;
  console.log(`HTTP Method: ${method}`);

  // путь запроса
  const pathname = request.nextUrl.pathname;
  console.log(`Pathname: ${pathname}`);

  // значение cookie
  const someCookie = request.cookies.get('someCookieName');
  console.log(`Cookie Value: ${someCookie}`);

  // заголовки
  const userAgent = request.headers.get('User-Agent');
  console.log(`User-Agent: ${userAgent}`);

  // IP-адрес клиента
  const ip = request.ip;
  console.log(`Client IP: ${ip}`);

  // геолокация клиента
  const geo = request.geo;
  console.log(`Client Location: ${geo?.city}, ${geo?.country}`);

  // --------------КАСТОМНЫЙ MIDDLEWARE--------------
  if (pathname.includes('auth')) {
    return authMiddleware(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/with-auth/:path*']
};

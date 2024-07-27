import { NextRequest, NextResponse } from 'next/server';

export function authMiddleware(request: NextRequest){
  // условная проверка на аторизацию
  const isAuth = request.url.includes('with-auth');

  if (isAuth) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

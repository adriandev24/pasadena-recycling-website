import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  if (request.nextUrl.hostname === 'www.pasadenarecycling.com') {
    const destination = request.nextUrl.clone();
    destination.hostname = 'pasadenarecycling.com';

    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

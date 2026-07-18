import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/dashboard") || pathname.startsWith("/api/clients") || pathname.startsWith("/api/campaigns") || pathname.startsWith("/api/dashboard")) {
    const token = req.cookies.get("session")?.value;

    if (!token) {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/clients/:path*", "/api/campaigns/:path*", "/api/dashboard"],
};

import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./server/auth/session";
import { cookies } from "next/headers";
import { env } from "./env";
import { routes } from "./lib/constants";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = routes.isPublicRoute(path);
  const isProtectedRoute = routes.isProtectedRoute(path);

  const cookie = cookies().get(env.SESSION_NAME)?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL(routes.getSignIn(), req.nextUrl));
  }
  if (isPublicRoute && session?.userId) {
    console.log(
      "Tried to access public route when signed in. Redirecting to dashboard"
    );
    return NextResponse.redirect(new URL(routes.getDashboard(), req.nextUrl));
  }

  return NextResponse.next();
}

import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./server/auth/session";
import { cookies } from "next/headers";
import { env } from "./env";

const publicRoutes=["/","/sign-in","sign-up"]
const protectedRoutes=["/dashboard"]

export default async function middleware(req: NextRequest){
    const path = req.nextUrl.pathname;
    const isPublicRoute = publicRoutes.includes(path);
    const isProtectedRoute = protectedRoutes.includes(path);

    const cookie = cookies().get(env.SESSION_NAME)?.value;
    const session = await decrypt(cookie);

    if (isProtectedRoute && !session?.userId){
        return NextResponse.redirect(new URL("/sing-in",req.nextUrl));
    }
     if (isPublicRoute && session?.userId){
        return NextResponse.redirect(new URL("/dashboard",req.nextUrl));
    }

    return NextResponse.next(); 
}
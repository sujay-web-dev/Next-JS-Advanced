import { NextResponse, type NextRequest } from "next/server";

export function middleware(request:NextRequest) {
    
    const response = NextResponse.next();

    const themePreference = request.cookies.get("theme");
    if(!themePreference) {
        response.cookies.set("theme","dark");
    }

    return response
    
    // if(request.nextUrl.pathname === "/profile") {
        // return NextResponse.redirect(new URL("/hello" , request.url))
        // return NextResponse.rewrite(new URL("/hello" , request.url))
    // } // second type of redirecting or rewriting 

    // return NextResponse.redirect(new URL("/",request.url))
} 

// export const config = {
//     matcher: "/profile",
// }
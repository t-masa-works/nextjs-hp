import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  const protectedPaths = [
    "/onomichi/index.html",
    "/corporate/top.html",
    "/oha_exam/index.html",
    "/sobolon/index.html",
  ];

  if (protectedPaths.includes(url.pathname) && url.pathname !== "/work") {
    const basicAuth = req.headers.get("authorization");

    if (basicAuth) {
      const auth = basicAuth.split(" ")[1];
      const [user, pwd] = Buffer.from(auth, "base64").toString().split(":");

      if (
        user === process.env.BASIC_AUTH_USER &&
        pwd === process.env.BASIC_AUTH_PASSWORD
      ) {
        return NextResponse.next();
      }
    }

    return new Response("Auth required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }
  return NextResponse.next();
}

// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req) {
//   const basicAuth = req.headers.get("authorization");
//   const url = req.nextUrl;

//   const protectUrl = [
//     "/onomichi/index.html",
//     "/デイトラ卒業制作課題/top.html",
//     "/oha_exam/index.html",
//     "/sobolon/index.html",
//   ];

//   if (protectUrl.includes(url.pathname)) {
//     const basicAuth = req.headers.get("authorization");

//     if (basicAuth) {
//       const authValue = basicAuth.split(" ")[1];
//       const [user, pwd] = Buffer.from(authValue, "base64")
//         .toString()
//         .split(":");

//       const BASIC_USER = process.env.BASIC_USER;
//       const BASIC_PASSWORD = process.env.BASIC_PASSWORD;

//       console.log("BASIC_USER:", process.env.BASIC_USER);
//       console.log("BASIC_PASSWORD:", process.env.BASIC_PASSWORD);

//       if (user === BASIC_USER && pwd === BASIC_PASSWORD) {
//         return NextResponse.next();
//       }
//     }
//     url.pathname = "/api/auth";
//   }
//   return NextResponse.rewrite(url);
// }

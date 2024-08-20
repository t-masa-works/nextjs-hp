import { NextRequest, NextResponse } from "next/server";

export function middleware(req) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  const protectUrl = [
    "/onomichi/index.html",
    "/デイトラ卒業制作課題/top.html",
    "/oha_exam/index.html",
    "/sobolon/index.html",
  ];

  if (protectUrl.includes(url.pathname) && url.pathname !== "/work") {
    const basicAuth = req.headers.get("authorization");

    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1];
      const [user, pwd] = Buffer.from(authValue, "base64")
        .toString()
        .split(":");

      const BASIC_USER = process.env.BASIC_USER;
      const BASIC_PASSWORD = process.env.BASIC_PASSWORD;

      console.log("BASIC_USER:", process.env.BASIC_USER);
      console.log("BASIC_PASSWORD:", process.env.BASIC_PASSWORD);

      if (user === BASIC_USER && pwd === BASIC_PASSWORD) {
        return NextResponse.next();
      }
    }
    url.pathname = "/api/auth";
  }
  return NextResponse.rewrite(url);
}

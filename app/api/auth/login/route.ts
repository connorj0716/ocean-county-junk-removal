import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, makeSessionToken, validateCredentials } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const username = body?.username?.toString().trim() ?? "";
  const password = body?.password?.toString() ?? "";

  if (!validateCredentials(username, password)) {
    return NextResponse.json(
      { ok: false, error: "Invalid username or password." },
      { status: 401 }
    );
  }

  const token = makeSessionToken(username);
  const res = NextResponse.json({ ok: true, user: username });
  res.cookies.set({
    name: AUTH_COOKIE,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}

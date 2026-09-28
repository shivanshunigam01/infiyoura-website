import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    if (!name || !email) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    console.info("[contact]", Object.fromEntries(data.entries()));
    return NextResponse.redirect(new URL("/?sent=1#contact", request.url), 303);
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { buildWeb3FormsPayload } from "@/lib/web3forms";

/**
 * Legacy same-origin POST (older cached bundles). Prefer browser → Web3Forms in ContactForm.
 * Server-side Web3Forms calls may be blocked; response includes a refresh hint when that happens.
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const payload = buildWeb3FormsPayload(formData);

    if ("error" in payload) {
      return NextResponse.json({ ok: false, error: payload.error }, { status: 400 });
    }

    const web3Response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    let data: { success?: boolean; message?: string } = {};
    try {
      data = (await web3Response.json()) as typeof data;
    } catch {
      data = {};
    }

    if (!web3Response.ok || !data.success) {
      const blocked =
        web3Response.status === 403 ||
        (data.message ?? "").toLowerCase().includes("not allowed");

      const error = blocked
        ? "Please hard-refresh this page (Ctrl+F5 or Cmd+Shift+R) and submit again."
        : (data.message ??
          "Could not send your message. Please email us at infiyoura@gmail.com.");

      return NextResponse.json({ ok: false, error }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Server error. Please try again or email infiyoura@gmail.com." },
      { status: 500 },
    );
  }
}

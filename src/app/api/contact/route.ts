import { NextResponse } from "next/server";
import { formatContactMessage, getWeb3FormsAccessKey } from "@/lib/web3forms";

export async function POST(request: Request) {
  try {
    const data = await request.formData();

    if (data.get("botcheck")) {
      return NextResponse.json({ ok: false, error: "Invalid submission" }, { status: 400 });
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();

    if (!name || !email || !details) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const accessKey = getWeb3FormsAccessKey();
    if (!accessKey) {
      console.error("[contact] WEB3FORMS_ACCESS_KEY is not configured");
      return NextResponse.json({ ok: false, error: "Form is not configured" }, { status: 503 });
    }

    const company = String(data.get("company") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const country = String(data.get("country") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const budget = String(data.get("budget") ?? "").trim();

    const message = formatContactMessage({
      details,
      company,
      phone,
      country,
      service,
      budget,
    });

    const payload = new FormData();
    payload.append("access_key", accessKey);
    payload.append("name", name);
    payload.append("email", email);
    payload.append("message", message);
    payload.append("subject", `Infiyoura contact${service ? `: ${service}` : ""}`);
    if (phone) payload.append("phone", phone);

    const web3Response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: payload,
    });

    const result = (await web3Response.json()) as { success?: boolean; message?: string };

    if (!web3Response.ok || !result.success) {
      console.error("[contact] Web3Forms error:", result);
      return NextResponse.json(
        { ok: false, error: result.message ?? "Submission failed" },
        { status: 502 },
      );
    }

    const wantsJson =
      request.headers.get("accept")?.includes("application/json") ||
      request.headers.get("x-requested-with") === "fetch";

    if (wantsJson) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.redirect(new URL("/contact?sent=1", request.url), 303);
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

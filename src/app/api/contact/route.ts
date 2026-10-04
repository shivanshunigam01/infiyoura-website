import { NextResponse } from "next/server";

/**
 * Legacy POST endpoint — Web3Forms must be called from the browser (see ContactForm).
 * Server-side calls are blocked by Web3Forms unless IP safelisted on a paid plan.
 */
export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      error: "Use the contact form in the browser. Direct API posts are disabled.",
    },
    { status: 410 },
  );
}

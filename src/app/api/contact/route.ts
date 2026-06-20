import { NextRequest, NextResponse } from "next/server";
import { API_BASE_URL } from "@/lib/cms";

/**
 * Server-side proxy for the contact / "Book a demo" form. The browser posts
 * here; we forward to the public API server-to-server (no CORS). The API
 * endpoint is honeypot-gated and stores the enquiry in the admin inbox.
 *   POST /api/contact   body: { name, email, organization, role?, interests?, message, website? }
 */
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request" }, { status: 400 });
  }

  try {
    const res = await fetch(`${API_BASE_URL}/media/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    const json = await res.json().catch(() => ({}));
    return NextResponse.json(json, { status: res.ok ? 200 : res.status });
  } catch {
    return NextResponse.json(
      { ok: false, message: "We couldn't submit your message. Please email us instead." },
      { status: 502 },
    );
  }
}

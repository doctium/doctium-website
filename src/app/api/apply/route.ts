import { NextRequest, NextResponse } from "next/server";
import { API_BASE_URL } from "@/lib/cms";

/**
 * Server-side proxy for the careers application form. The browser posts here;
 * we forward to the public API server-to-server (no CORS, and the API origin
 * stays out of the client). The API endpoint is honeypot + consent gated.
 *   POST /api/apply   body: { slug, fullName, email, cv (data-URL), ... }
 */
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request" }, { status: 400 });
  }

  const { slug, ...payload } = body as { slug?: string };
  if (!slug) {
    return NextResponse.json({ ok: false, message: "Missing role." }, { status: 400 });
  }

  try {
    const res = await fetch(`${API_BASE_URL}/media/jobs/${slug}/apply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const json = await res.json().catch(() => ({}));
    return NextResponse.json(json, { status: res.ok ? 200 : res.status });
  } catch {
    return NextResponse.json(
      { ok: false, message: "We couldn't submit your application. Please email us instead." },
      { status: 502 },
    );
  }
}

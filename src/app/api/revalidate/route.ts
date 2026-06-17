import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * On-demand revalidation. The Doctium admin calls this when content is
 * published/updated so the live site refreshes without a redeploy.
 *   POST /api/revalidate?secret=…   body: { "tag": "blog" | "news" | "jobs" | "landing" | "cms" }
 * Secret is checked against REVALIDATE_SECRET (set in the website's env).
 */
const VALID_TAGS = new Set(["blog", "news", "jobs", "landing", "cms"]);

export async function POST(req: NextRequest) {
  const secret =
    req.nextUrl.searchParams.get("secret") ??
    req.headers.get("x-revalidate-secret") ??
    "";
  const expected = process.env.REVALIDATE_SECRET;

  if (!expected || secret !== expected) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => ({}))) as { tag?: string };
  const tag = body.tag && VALID_TAGS.has(body.tag) ? body.tag : "cms";
  revalidateTag(tag);
  return NextResponse.json({ ok: true, revalidated: tag });
}

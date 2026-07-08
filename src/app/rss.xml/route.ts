import { siteConfig } from "@/content/site";
import { getBlogList, getNewsList } from "@/lib/cms";

export const revalidate = 600;

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET() {
  const [blog, news] = await Promise.all([getBlogList(), getNewsList()]);

  type Entry = { title: string; link: string; desc: string; date: string | null };
  const entries: Entry[] = [
    ...blog.items.map((b) => ({
      title: b.title,
      link: `${siteConfig.url}/blog/${b.slug}`,
      desc: b.excerpt,
      date: b.publishedAt,
    })),
    ...news.items
      .filter((n) => n.kind === "ANNOUNCEMENT")
      .map((n) => ({
        title: n.title,
        link: `${siteConfig.url}/newsroom/${n.slug}`,
        desc: n.excerpt,
        date: n.publishedAt,
      })),
  ]
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
    .slice(0, 30);

  const items = entries
    .map(
      (e) => `    <item>
      <title>${esc(e.title)}</title>
      <link>${esc(e.link)}</link>
      <guid>${esc(e.link)}</guid>
      <description>${esc(e.desc)}</description>
      ${e.date ? `<pubDate>${new Date(e.date).toUTCString()}</pubDate>` : ""}
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Doctium: Blog &amp; Newsroom</title>
    <link>${siteConfig.url}</link>
    <description>${esc(siteConfig.slogan)}</description>
    <language>en-NG</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

/**
 * Server-side fetchers for CMS content published from the Doctium admin
 * (api.doctiumhealth.com/api/v1/media/*). Everything is fail-soft: a network
 * error or unpublished API returns empty/null so the site renders graceful
 * empty states instead of crashing. ISR keeps it fast with tag-based
 * revalidation (the admin's publish webhook revalidates these tags).
 */

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.doctiumhealth.com/api/v1";

const REVALIDATE = 300; // 5 min ISR; publish webhook revalidates sooner by tag

async function cms<T>(
  path: string,
  tag: string,
  fallback: T,
): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}/media${path}`, {
      next: { revalidate: REVALIDATE, tags: [tag, "cms"] },
    });
    if (!res.ok) return fallback;
    const json = await res.json();
    return (json?.data ?? fallback) as T;
  } catch {
    return fallback;
  }
}

/* ── Types (public projections) ─────────────────────── */
export type Ref = { name: string; slug: string };
export type AuthorRef = { name: string; slug: string; avatarUrl?: string; role?: string };

export interface BlogListItem {
  title: string;
  slug: string;
  excerpt: string;
  coverImageUrl: string;
  readingMins: number;
  tags: string[];
  publishedAt: string | null;
  author?: AuthorRef | null;
  categories: Ref[];
}
export interface BlogPostFull extends BlogListItem {
  bodyMd: string;
  metaTitle?: string;
  metaDescription?: string;
  ogImageUrl?: string;
  canonicalUrl?: string;
  author?: (AuthorRef & { bioMd?: string; linkedinUrl?: string; xUrl?: string }) | null;
}

export interface NewsListItem {
  title: string;
  slug: string;
  kind: "ANNOUNCEMENT" | "COVERAGE";
  excerpt: string;
  coverImageUrl: string;
  outlet: string;
  outletLogoUrl: string;
  externalUrl: string;
  publishedAt: string | null;
  category?: Ref | null;
}
export interface NewsPostFull extends NewsListItem {
  bodyMd: string;
  metaTitle?: string;
  metaDescription?: string;
  ogImageUrl?: string;
}

export interface JobListItem {
  title: string;
  slug: string;
  location: string;
  jobType: string;
  workMode: string;
  summary: string;
  postedAt: string | null;
  team?: Ref | null;
}
export interface JobFull extends JobListItem {
  bodyMd: string;
  salaryNote: string;
  closesAt: string | null;
  metaTitle?: string;
  metaDescription?: string;
}

export interface LandingFull {
  kind: string;
  slug: string;
  h1: string;
  intro: string;
  bodyMd: string;
  metaTitle?: string;
  metaDescription?: string;
  ogImageUrl?: string;
}

type Paged<T> = { items: T[]; total: number; page: number; pageSize: number };
const emptyPage = <T>(): Paged<T> => ({ items: [], total: 0, page: 1, pageSize: 12 });

/* ── Fetchers ───────────────────────────────────────── */
export const getBlogList = (q: { page?: number; category?: string; tag?: string } = {}) => {
  const params = new URLSearchParams();
  if (q.page) params.set("page", String(q.page));
  if (q.category) params.set("category", q.category);
  if (q.tag) params.set("tag", q.tag);
  const qs = params.toString();
  return cms<Paged<BlogListItem>>(`/blog${qs ? `?${qs}` : ""}`, "blog", emptyPage());
};
export const getBlogPost = (slug: string) =>
  cms<BlogPostFull | null>(`/blog/${slug}`, "blog", null);
export const getBlogCategories = () => cms<Ref[]>("/blog/categories", "blog", []);

export const getNewsList = (q: { page?: number; kind?: string } = {}) => {
  const params = new URLSearchParams();
  if (q.page) params.set("page", String(q.page));
  if (q.kind) params.set("kind", q.kind);
  const qs = params.toString();
  return cms<Paged<NewsListItem>>(`/news${qs ? `?${qs}` : ""}`, "news", emptyPage());
};
export const getNewsPost = (slug: string) =>
  cms<NewsPostFull | null>(`/news/${slug}`, "news", null);

export const getJobs = (team?: string) =>
  cms<JobListItem[]>(`/jobs${team ? `?team=${team}` : ""}`, "jobs", []);
export const getJob = (slug: string) => cms<JobFull | null>(`/jobs/${slug}`, "jobs", null);
export const getJobTeams = () => cms<Ref[]>("/jobs/teams", "jobs", []);

export const getLanding = (slug: string) =>
  cms<LandingFull | null>(`/landing/${slug}`, "landing", null);

export interface TeamMember {
  name: string;
  slug: string;
  role: string;
  bioMd: string;
  avatarUrl: string;
  linkedinUrl: string;
  xUrl: string;
  group: string;
}
export const getTeamMembers = () => cms<TeamMember[]>("/team", "team", []);

export interface SitemapEntries {
  blog: { slug: string; updatedAt: string; publishedAt: string | null }[];
  news: { slug: string; updatedAt: string; publishedAt: string | null }[];
  jobs: { slug: string; updatedAt: string }[];
  landing: { slug: string; updatedAt: string }[];
}
export const getSitemapEntries = () =>
  cms<SitemapEntries>("/sitemap-entries", "cms", {
    blog: [],
    news: [],
    jobs: [],
    landing: [],
  });

export const API_BASE_URL = API_BASE;

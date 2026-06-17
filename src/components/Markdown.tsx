import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import { cn } from "@/lib/cn";

/**
 * Renders CMS Markdown as branded, sanitized prose. rehype-sanitize strips any
 * unsafe HTML, so author content is safe to render on the public site.
 */
export function Markdown({ children, className }: { children: string; className?: string }) {
  return (
    <div className={cn("max-w-none", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={{
          h1: (p) => <h2 className="mt-10 mb-4 text-3xl font-bold text-navy" {...p} />,
          h2: (p) => <h2 className="mt-10 mb-4 text-2xl font-bold text-navy" {...p} />,
          h3: (p) => <h3 className="mt-8 mb-3 text-xl font-bold text-navy" {...p} />,
          p: (p) => <p className="mb-5 text-lg leading-relaxed text-body/90" {...p} />,
          a: (p) => (
            <a
              className="font-medium text-trust-deep underline decoration-trust/40 underline-offset-2 hover:decoration-trust"
              target={p.href?.startsWith("http") ? "_blank" : undefined}
              rel={p.href?.startsWith("http") ? "noopener noreferrer" : undefined}
              {...p}
            />
          ),
          ul: (p) => <ul className="mb-5 ml-5 list-disc space-y-2 text-lg text-body/90 marker:text-trust" {...p} />,
          ol: (p) => <ol className="mb-5 ml-5 list-decimal space-y-2 text-lg text-body/90 marker:text-trust" {...p} />,
          li: (p) => <li className="leading-relaxed" {...p} />,
          blockquote: (p) => (
            <blockquote className="my-6 border-l-4 border-trust/40 bg-mist/60 py-3 pl-5 pr-4 text-lg italic text-navy" {...p} />
          ),
          strong: (p) => <strong className="font-semibold text-navy" {...p} />,
          code: (p) => <code className="rounded bg-mist px-1.5 py-0.5 font-mono text-[0.85em] text-navy" {...p} />,
          pre: (p) => <pre className="my-6 overflow-x-auto rounded-2xl bg-navy-950 p-5 text-sm text-white scroll-elegant" {...p} />,
          hr: () => <hr className="my-10 border-line" />,
          h4: (p) => <h4 className="mt-6 mb-2 text-lg font-bold text-navy" {...p} />,
          img: (p) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="my-6 w-full rounded-2xl border border-line" alt={p.alt ?? ""} {...p} />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

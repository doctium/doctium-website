"use client";

import { useState, useMemo, type FormEvent } from "react";
import { Check, ArrowRight, AlertCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

const interests = [
  "Hospital OS",
  "Doctium Scribe",
  "Personalized medicine",
  "Telemedicine",
  "Partnership",
] as const;

type FieldErrors = Partial<Record<"name" | "email" | "org" | "message", string>>;

const inputBase =
  "w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-[0.95rem] text-navy placeholder:text-muted/70 transition-colors focus-visible:outline-none focus-visible:border-trust focus-visible:ring-4 focus-visible:ring-trust/15 min-h-[3rem]";

const labelBase =
  "mb-1.5 block font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [role, setRole] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);

  const toggleInterest = (i: string) =>
    setSelected((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    );

  const mailtoHref = useMemo(() => {
    const subject = `Doctium enquiry — ${
      selected.length ? selected.join(", ") : "General"
    }`;
    const body = [
      `Name: ${name}`,
      `Work email: ${email}`,
      `Organization: ${org}`,
      role ? `Role: ${role}` : null,
      `Interested in: ${selected.length ? selected.join(", ") : "Not specified"}`,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    return `mailto:${siteConfig.links.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [name, email, org, role, selected, message]);

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Please tell us your name.";
    if (!email.trim()) next.email = "We need an email to reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "That email doesn't look right.";
    if (!org.trim()) next.org = "Which organization are you with?";
    if (!message.trim()) next.message = "Add a short message so we can help.";
    return next;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-8 shadow-[var(--shadow-card)]">
        <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-trust-light/60 to-mist blur-2xl" />
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-success/10">
          <Check className="h-7 w-7 text-success" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-navy">
          Thanks{name ? `, ${name.split(" ")[0]}` : ""} — we&apos;ll be in touch.
        </h3>
        <p className="mt-3 leading-relaxed text-muted">
          We&apos;ve noted your interest{" "}
          {selected.length ? (
            <span className="font-medium text-navy">in {selected.join(", ")}</span>
          ) : null}{" "}
          and will reply at{" "}
          <span className="font-medium text-navy">{email || "your email"}</span>.
        </p>
        <div className="mt-6 rounded-2xl border border-trust/20 bg-trust-light/40 p-4">
          <p className="text-[0.9rem] leading-relaxed text-navy">
            <span className="font-semibold">No backend yet?</span> To make sure your
            message reaches us right away, you can also send it straight from your
            email client.
          </p>
          <div className="mt-4">
            <Button
              href={mailtoHref}
              variant="primary"
              size="md"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              Send via email
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-mist to-trust-light/40 blur-2xl" />
      <form
        noValidate
        onSubmit={onSubmit}
        className="rounded-[2rem] border border-line bg-white p-6 shadow-[var(--shadow-card)] md:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className={labelBase}>
              Full name <span className="text-danger">*</span>
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "cf-name-err" : undefined}
              className={inputBase}
              placeholder="Dr. Ada Obi"
            />
            {errors.name && (
              <p id="cf-name-err" className="mt-1.5 flex items-center gap-1.5 text-[0.8rem] text-danger">
                <AlertCircle className="h-3.5 w-3.5" /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="cf-email" className={labelBase}>
              Work email <span className="text-danger">*</span>
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "cf-email-err" : undefined}
              className={inputBase}
              placeholder="you@hospital.org"
            />
            {errors.email && (
              <p id="cf-email-err" className="mt-1.5 flex items-center gap-1.5 text-[0.8rem] text-danger">
                <AlertCircle className="h-3.5 w-3.5" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="cf-org" className={labelBase}>
              Organization / hospital <span className="text-danger">*</span>
            </label>
            <input
              id="cf-org"
              name="organization"
              type="text"
              autoComplete="organization"
              value={org}
              onChange={(e) => setOrg(e.target.value)}
              aria-invalid={!!errors.org}
              aria-describedby={errors.org ? "cf-org-err" : undefined}
              className={inputBase}
              placeholder="St. Mary's Teaching Hospital"
            />
            {errors.org && (
              <p id="cf-org-err" className="mt-1.5 flex items-center gap-1.5 text-[0.8rem] text-danger">
                <AlertCircle className="h-3.5 w-3.5" /> {errors.org}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="cf-role" className={labelBase}>
              Role <span className="font-sans normal-case tracking-normal text-faint">(optional)</span>
            </label>
            <input
              id="cf-role"
              name="role"
              type="text"
              autoComplete="organization-title"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={inputBase}
              placeholder="Medical Director, CIO…"
            />
          </div>
        </div>

        {/* Interest pills */}
        <fieldset className="mt-6">
          <legend className={labelBase}>I&apos;m interested in</legend>
          <div className="flex flex-wrap gap-2">
            {interests.map((i) => {
              const active = selected.includes(i);
              return (
                <button
                  key={i}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleInterest(i)}
                  className={`inline-flex min-h-[2.75rem] cursor-pointer items-center gap-1.5 rounded-full border px-4 py-2 text-[0.85rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-trust/20 ${
                    active
                      ? "border-navy bg-navy text-white"
                      : "border-line bg-canvas text-body hover:border-navy/30 hover:bg-navy-50"
                  }`}
                >
                  {active && <Check className="h-3.5 w-3.5" />}
                  {i}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-6">
          <label htmlFor="cf-message" className={labelBase}>
            Message <span className="text-danger">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "cf-message-err" : undefined}
            className={`${inputBase} resize-y`}
            placeholder="Tell us about your hospital, your patients, and what you'd like to see."
          />
          {errors.message && (
            <p id="cf-message-err" className="mt-1.5 flex items-center gap-1.5 text-[0.8rem] text-danger">
              <AlertCircle className="h-3.5 w-3.5" /> {errors.message}
            </p>
          )}
        </div>

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" variant="primary" size="lg" iconRight={<ArrowRight className="h-4 w-4" />}>
            Book a demo
          </Button>
          <p className="flex items-start gap-1.5 text-[0.78rem] leading-snug text-muted sm:max-w-[16rem]">
            <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-trust" />
            On submit we&apos;ll show a confirmation and offer to open your email
            client so nothing is lost.
          </p>
        </div>
      </form>
    </div>
  );
}

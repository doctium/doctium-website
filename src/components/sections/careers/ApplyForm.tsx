"use client";

import { useRef, useState } from "react";
import { CheckCircle2, Loader2, Paperclip, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

const MAX_BYTES = 5 * 1024 * 1024; // 5MB
const ACCEPTED = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const inputClass =
  "w-full rounded-2xl border border-line bg-white px-4 py-3 text-[0.95rem] text-navy placeholder:text-muted/70 transition-shadow focus:border-trust focus:outline-none focus:ring-2 focus:ring-trust/30";
const labelClass = "block text-sm font-semibold text-navy";

function Field({
  id,
  label,
  required,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="ml-1 text-danger">*</span>}
        {hint && <span className="ml-2 font-normal text-muted">{hint}</span>}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

/**
 * Client-side application form for a single job. Posts a JSON payload (with the
 * CV encoded as a data-URL) to /api/apply, validates required fields and the CV
 * type/size inline, and includes a honeypot field to deflect bots.
 */
export function ApplyForm({ slug, title }: { slug: string; title: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const [cvDataUrl, setCvDataUrl] = useState<string | null>(null);
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const [reading, setReading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFile(file: File | undefined) {
    setCvError(null);
    setCvDataUrl(null);
    setCvFileName(null);
    if (!file) return;

    const isWordByExt = /\.(docx?|pdf)$/i.test(file.name);
    if (!ACCEPTED.includes(file.type) && !isWordByExt) {
      setCvError("Please upload a PDF or Word document.");
      return;
    }
    if (file.size > MAX_BYTES) {
      setCvError("That file is larger than 5MB. Please upload a smaller file.");
      return;
    }

    setReading(true);
    const reader = new FileReader();
    reader.onload = () => {
      setCvDataUrl(typeof reader.result === "string" ? reader.result : null);
      setCvFileName(file.name);
      setReading(false);
    };
    reader.onerror = () => {
      setCvError("We couldn't read that file. Please try again.");
      setReading(false);
    };
    reader.readAsDataURL(file);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const website = String(data.get("website") ?? ""); // honeypot
    const fullName = String(data.get("fullName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const linkedinUrl = String(data.get("linkedinUrl") ?? "").trim();
    const portfolioUrl = String(data.get("portfolioUrl") ?? "").trim();
    const coverNote = String(data.get("coverNote") ?? "").trim();
    const consent = data.get("consent") === "on";

    if (!fullName || !email || !phone) {
      setError("Please fill in your name, email and phone number.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (cvError) {
      setError("Please fix the issue with your CV upload.");
      return;
    }
    if (!consent) {
      setError("Please confirm you consent to us processing your application.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          fullName,
          email,
          phone,
          linkedinUrl,
          portfolioUrl,
          cv: cvDataUrl,
          cvFileName,
          coverNote,
          consent,
          website,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong sending your application. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-success/30 bg-[color-mix(in_srgb,var(--color-success)_8%,white)] p-8 text-center md:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/15">
          <CheckCircle2 className="h-7 w-7 text-success" />
        </div>
        <h3 className="mt-5 text-2xl font-bold text-navy">Application received</h3>
        <p className="mx-auto mt-3 max-w-md text-lg leading-relaxed text-muted">
          Thanks, we read every application and reply within 2 weeks.
        </p>
        <p className="mt-4 text-sm text-muted">
          You applied for <span className="font-semibold text-navy">{title}</span>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-line bg-white p-6 shadow-[0_24px_60px_-30px_rgba(15,43,77,0.25)] md:p-9"
    >
      {/* Honeypot — visually hidden, off-screen, not announced to AT */}
      <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="fullName" label="Full name" required>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            className={inputClass}
            placeholder="Ada Okafor"
          />
        </Field>
        <Field id="email" label="Email" required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            placeholder="you@example.com"
          />
        </Field>
        <Field id="phone" label="Phone" required>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={inputClass}
            placeholder="+234 800 000 0000"
          />
        </Field>
        <Field id="linkedinUrl" label="LinkedIn" hint="(optional)">
          <input
            id="linkedinUrl"
            name="linkedinUrl"
            type="url"
            className={inputClass}
            placeholder="https://linkedin.com/in/…"
          />
        </Field>
        <div className="sm:col-span-2">
          <Field id="portfolioUrl" label="Portfolio / website" hint="(optional)">
            <input
              id="portfolioUrl"
              name="portfolioUrl"
              type="url"
              className={inputClass}
              placeholder="https://…"
            />
          </Field>
        </div>
      </div>

      {/* CV upload */}
      <div className="mt-6">
        <label htmlFor="cv" className={labelClass}>
          CV / résumé <span className="ml-2 font-normal text-muted">(PDF or Word, max 5MB)</span>
        </label>
        <div className="mt-2">
          <label
            htmlFor="cv"
            className={cn(
              "flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed px-4 py-4 transition-colors",
              cvError
                ? "border-danger/50 bg-danger/5"
                : cvFileName
                  ? "border-success/40 bg-[color-mix(in_srgb,var(--color-success)_6%,white)]"
                  : "border-line bg-canvas hover:border-trust/50 hover:bg-mist",
            )}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-trust-deep">
              {reading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : cvFileName ? (
                <Paperclip className="h-5 w-5" />
              ) : (
                <UploadCloud className="h-5 w-5" />
              )}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[0.95rem] font-medium text-navy">
                {cvFileName ?? "Choose a file to upload"}
              </span>
              <span className="block text-xs text-muted">
                {cvFileName ? "Click to replace" : "PDF, DOC or DOCX up to 5MB"}
              </span>
            </span>
          </label>
          <input
            ref={fileInputRef}
            id="cv"
            name="cv"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="sr-only"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </div>
        {cvError && <p className="mt-2 text-sm font-medium text-danger">{cvError}</p>}
      </div>

      {/* Cover note */}
      <div className="mt-6">
        <Field id="coverNote" label="Cover note" hint="(optional)">
          <textarea
            id="coverNote"
            name="coverNote"
            rows={5}
            className={cn(inputClass, "resize-y")}
            placeholder="Anything you'd like us to know: why this role, what you'd bring."
          />
        </Field>
      </div>

      {/* Consent */}
      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-line bg-canvas p-4">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded-md border-line text-trust accent-trust focus:outline-none focus:ring-2 focus:ring-trust/30"
        />
        <label htmlFor="consent" className="text-sm leading-relaxed text-body">
          I consent to Doctium storing and processing the information in this application for
          recruitment purposes. <span className="text-danger">*</span>
        </label>
      </div>

      {error && (
        <div
          role="alert"
          className="mt-6 rounded-2xl border border-danger/30 bg-danger/5 px-4 py-3 text-sm font-medium text-danger"
        >
          {error}
        </div>
      )}

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          iconRight={
            status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : undefined
          }
        >
          {status === "submitting" ? "Sending…" : "Submit application"}
        </Button>
        <p className="text-xs leading-relaxed text-muted">
          We read every application and reply within 2 weeks.
        </p>
      </div>
    </form>
  );
}

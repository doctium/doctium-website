"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, AlertCircle, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AuthApiError, sendUserOtp, verifyUserOtp } from "@/lib/auth-api";
import { inputBase, labelBase, codeInputBase } from "./formStyles";
import { DownloadPanel } from "./DownloadPanel";

type Step = "phone" | "code" | "done";

// Nigerian mobile: 11 digits starting 0 (e.g. 08012345678) or +234… form.
const PHONE_RE = /^(?:\+?234|0)\d{10}$/;

export function PatientSignupForm() {
  const [step, setStep] = useState<Step>("phone");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const cleanCode = (v: string) => v.replace(/\D/g, "").slice(0, 6);

  const requestOtp = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    if (website) return; // bot
    const value = phone.trim().replace(/[\s-]/g, "");
    if (!PHONE_RE.test(value)) {
      setError("Enter a valid Nigerian mobile number, e.g. 0801 234 5678.");
      return;
    }
    setError("");
    setBusy(true);
    try {
      await sendUserOtp(value);
      setPhone(value);
      setStep("code");
    } catch (err) {
      setError(
        err instanceof AuthApiError ? err.message : "Couldn't send your code.",
      );
    } finally {
      setBusy(false);
    }
  };

  const verify = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    if (code.length !== 6) {
      setError("Enter the 6-digit code we sent you.");
      return;
    }
    setError("");
    setBusy(true);
    try {
      await verifyUserOtp(phone, code);
      setStep("done");
    } catch (err) {
      setError(
        err instanceof AuthApiError
          ? err.message
          : "That code didn't work. Try again.",
      );
    } finally {
      setBusy(false);
    }
  };

  const resend = async () => {
    if (busy) return;
    setError("");
    setBusy(true);
    try {
      await sendUserOtp(phone);
    } catch (err) {
      setError(err instanceof AuthApiError ? err.message : "Couldn't resend.");
    } finally {
      setBusy(false);
    }
  };

  if (step === "done") {
    return (
      <DownloadPanel
        heading="You're in — welcome to Doctium."
        subtitle="Your patient account is ready. Download the app to see verified doctors, book consultations, and manage your care."
        next="Download the Doctium app on your phone and sign in with this number to start."
      />
    );
  }

  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-mist to-trust-light/40 blur-2xl" />
      <div className="rounded-[2rem] border border-line bg-white p-6 shadow-[var(--shadow-card)] md:p-8">
        {error && (
          <div className="mb-5 flex items-start gap-2 rounded-2xl border border-danger/25 bg-danger/5 p-3.5 text-[0.85rem] leading-snug text-navy">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
            {error}
          </div>
        )}

        {step === "phone" && (
          <form noValidate onSubmit={requestOtp}>
            <label htmlFor="pt-phone" className={labelBase}>
              Mobile number
            </label>
            <input
              id="pt-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputBase}
              placeholder="0801 234 5678"
            />
            <p className="mt-2 text-[0.8rem] leading-snug text-muted">
              We&apos;ll text you a 6-digit code to confirm it&apos;s you. This
              becomes your Doctium sign-in.
            </p>

            {/* Honeypot */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden"
            >
              <label htmlFor="pt-website">Leave this field empty</label>
              <input
                id="pt-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="mt-6 w-full"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              {busy ? "Sending code…" : "Send code"}
            </Button>
          </form>
        )}

        {step === "code" && (
          <form noValidate onSubmit={verify}>
            <button
              type="button"
              onClick={() => {
                setStep("phone");
                setCode("");
                setError("");
              }}
              className="mb-4 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-muted transition-colors hover:text-navy"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Change number
            </button>

            <label htmlFor="pt-code" className={labelBase}>
              Enter the code
            </label>
            <input
              id="pt-code"
              name="code"
              inputMode="numeric"
              autoComplete="one-time-code"
              value={code}
              onChange={(e) => setCode(cleanCode(e.target.value))}
              className={codeInputBase}
              placeholder="000000"
            />
            <p className="mt-2 flex items-center gap-1.5 text-[0.8rem] leading-snug text-muted">
              <Phone className="h-3.5 w-3.5 text-trust" />
              Sent to <span className="font-medium text-navy">{phone}</span>
            </p>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="mt-6 w-full"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              {busy ? "Verifying…" : "Create my account"}
            </Button>

            <p className="mt-4 text-center text-[0.85rem] text-muted">
              Didn&apos;t get it?{" "}
              <button
                type="button"
                onClick={resend}
                disabled={busy}
                className="font-medium text-trust-deep hover:underline disabled:opacity-50"
              >
                Resend code
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

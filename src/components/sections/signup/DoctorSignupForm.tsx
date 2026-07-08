"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, AlertCircle, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  AuthApiError,
  registerDoctor,
  sendDoctorOtp,
} from "@/lib/auth-api";
import { DOCTOR_SPECIALITIES, SPOKEN_LANGUAGES } from "@/content/signup";
import { inputBase, labelBase, codeInputBase } from "./formStyles";
import { DownloadPanel } from "./DownloadPanel";

type Step = "details" | "verify" | "done";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^(?:\+?234|0)\d{10}$/;

export function DoctorSignupForm() {
  const [step, setStep] = useState<Step>("details");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [consultantSpeciality, setConsultantSpeciality] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [website, setWebsite] = useState(""); // honeypot

  const [emailCode, setEmailCode] = useState("");
  const [phoneCode, setPhoneCode] = useState("");

  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const cleanCode = (v: string) => v.replace(/\D/g, "").slice(0, 6);

  const toggleLanguage = (code: string) =>
    setLanguages((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code],
    );

  const submitDetails = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    if (website) return; // bot

    const em = email.trim();
    const ph = phone.trim().replace(/[\s-]/g, "");
    if (!firstName.trim() || !lastName.trim()) {
      setError("Enter your first and last name.");
      return;
    }
    if (!EMAIL_RE.test(em)) {
      setError("Enter a valid email address.");
      return;
    }
    if (!PHONE_RE.test(ph)) {
      setError("Enter a valid Nigerian mobile number, e.g. 0801 234 5678.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (!speciality) {
      setError("Select your speciality.");
      return;
    }
    if (speciality === "Consultant" && !consultantSpeciality.trim()) {
      setError("Enter your consultant speciality.");
      return;
    }

    setError("");
    setBusy(true);
    try {
      await sendDoctorOtp(em, ph);
      setEmail(em);
      setPhone(ph);
      setStep("verify");
    } catch (err) {
      setError(
        err instanceof AuthApiError
          ? err.message
          : "Couldn't start registration.",
      );
    } finally {
      setBusy(false);
    }
  };

  const submitVerify = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    if (emailCode.length !== 6 || phoneCode.length !== 6) {
      setError("Enter both 6-digit codes.");
      return;
    }
    setError("");
    setBusy(true);
    try {
      await registerDoctor({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email,
        phone,
        password,
        speciality,
        consultantSpeciality: consultantSpeciality.trim() || undefined,
        languages,
        emailCode,
        phoneCode,
      });
      setStep("done");
    } catch (err) {
      setError(
        err instanceof AuthApiError ? err.message : "Verification failed.",
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
      await sendDoctorOtp(email, phone);
    } catch (err) {
      setError(err instanceof AuthApiError ? err.message : "Couldn't resend.");
    } finally {
      setBusy(false);
    }
  };

  if (step === "done") {
    return (
      <DownloadPanel
        heading="Application received, welcome aboard."
        subtitle="Your doctor account has been created and is now with our team for review. New registrations are verified before you go live."
        next="Download the Doctium Doctor app and sign in with your email to upload your verification documents (practising licence, ID) and complete review."
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

        {step === "details" && (
          <form noValidate onSubmit={submitDetails}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="dr-first" className={labelBase}>
                  First name
                </label>
                <input
                  id="dr-first"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={inputBase}
                  placeholder="Ada"
                />
              </div>
              <div>
                <label htmlFor="dr-last" className={labelBase}>
                  Last name
                </label>
                <input
                  id="dr-last"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={inputBase}
                  placeholder="Obi"
                />
              </div>
              <div>
                <label htmlFor="dr-email" className={labelBase}>
                  Email address
                </label>
                <input
                  id="dr-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputBase}
                  placeholder="doctor@example.com"
                />
              </div>
              <div>
                <label htmlFor="dr-phone" className={labelBase}>
                  Phone number
                </label>
                <input
                  id="dr-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputBase}
                  placeholder="0801 234 5678"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="dr-password" className={labelBase}>
                Password
              </label>
              <input
                id="dr-password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputBase}
                placeholder="At least 8 characters"
              />
              <p className="mt-2 text-[0.8rem] leading-snug text-muted">
                You&apos;ll sign in with your email and this password.
              </p>
            </div>

            <div className="mt-5">
              <label htmlFor="dr-speciality" className={labelBase}>
                Speciality
              </label>
              <select
                id="dr-speciality"
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
                className={`${inputBase} cursor-pointer appearance-none`}
              >
                <option value="">Select your speciality</option>
                {DOCTOR_SPECIALITIES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {speciality === "Consultant" && (
              <div className="mt-5">
                <label htmlFor="dr-consultant" className={labelBase}>
                  Your speciality
                </label>
                <input
                  id="dr-consultant"
                  value={consultantSpeciality}
                  onChange={(e) => setConsultantSpeciality(e.target.value)}
                  className={inputBase}
                  placeholder="e.g. Cardiology, Paediatrics"
                />
              </div>
            )}

            <fieldset className="mt-6">
              <legend className={labelBase}>
                Languages you speak{" "}
                <span className="font-sans normal-case tracking-normal text-faint">
                  (optional)
                </span>
              </legend>
              <div className="flex flex-wrap gap-2">
                {SPOKEN_LANGUAGES.map((l) => {
                  const active = languages.includes(l.code);
                  return (
                    <button
                      key={l.code}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleLanguage(l.code)}
                      className={`inline-flex min-h-[2.75rem] cursor-pointer items-center gap-1.5 rounded-full border px-4 py-2 text-[0.85rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-trust/20 ${
                        active
                          ? "border-navy bg-navy text-white"
                          : "border-line bg-canvas text-body hover:border-navy/30 hover:bg-navy-50"
                      }`}
                    >
                      {active && <Check className="h-3.5 w-3.5" />}
                      {l.native}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-[0.8rem] leading-snug text-muted">
                Patients can find you by the languages you speak. You can change
                this later.
              </p>
            </fieldset>

            {/* Honeypot */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden"
            >
              <label htmlFor="dr-website">Leave this field empty</label>
              <input
                id="dr-website"
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
              className="mt-7 w-full"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              {busy ? "Sending codes…" : "Continue"}
            </Button>

            <p className="mt-4 text-[0.8rem] leading-snug text-muted">
              New registrations are reviewed by our team before you go live.
            </p>
          </form>
        )}

        {step === "verify" && (
          <form noValidate onSubmit={submitVerify}>
            <button
              type="button"
              onClick={() => {
                setStep("details");
                setEmailCode("");
                setPhoneCode("");
                setError("");
              }}
              className="mb-4 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-muted transition-colors hover:text-navy"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to details
            </button>

            <p className="mb-5 text-[0.9rem] leading-relaxed text-muted">
              We sent a 6-digit code to your email (
              <span className="font-medium text-navy">{email}</span>) and your
              phone (<span className="font-medium text-navy">{phone}</span>).
              Enter both to finish creating your account.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="dr-ecode" className={labelBase}>
                  Email code
                </label>
                <input
                  id="dr-ecode"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  value={emailCode}
                  onChange={(e) => setEmailCode(cleanCode(e.target.value))}
                  className={codeInputBase}
                  placeholder="000000"
                />
              </div>
              <div>
                <label htmlFor="dr-pcode" className={labelBase}>
                  Phone code
                </label>
                <input
                  id="dr-pcode"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  value={phoneCode}
                  onChange={(e) => setPhoneCode(cleanCode(e.target.value))}
                  className={codeInputBase}
                  placeholder="000000"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="mt-6 w-full"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              {busy ? "Creating account…" : "Verify & create account"}
            </Button>

            <p className="mt-4 text-center text-[0.85rem] text-muted">
              Didn&apos;t get the codes?{" "}
              <button
                type="button"
                onClick={resend}
                disabled={busy}
                className="font-medium text-trust-deep hover:underline disabled:opacity-50"
              >
                Resend
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

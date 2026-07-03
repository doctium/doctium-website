/**
 * Browser-side client for the Doctium auth API (api.doctiumhealth.com/api/v1).
 *
 * These signup/OTP endpoints are called DIRECTLY from the browser (unlike the
 * CMS/contact/apply calls which proxy server-side) for two reasons: the API's
 * auth throttle is per-IP (10/min), so proxying would make every visitor share
 * the website server's IP and collectively trip the limit; and these are public
 * endpoints with no secret to hide. CORS already allows the doctiumhealth.com
 * origins and the endpoints are CSRF-exempt (no admin cookie), so no token
 * handling is needed. We mirror the exact request shapes the mobile apps send.
 */

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.doctiumhealth.com/api/v1";

/** A user-presentable error carrying the API's own message where available. */
export class AuthApiError extends Error {}

type ApiErrorBody = { message?: string | string[] };

async function post<T>(path: string, body: unknown): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new AuthApiError(
      "Couldn't reach Doctium. Check your connection and try again.",
    );
  }

  // Success envelope is { status, message, data }; errors are Nest bodies.
  const json = (await res.json().catch(() => null)) as
    | ({ data?: T } & ApiErrorBody)
    | null;

  if (!res.ok) {
    const m = json?.message;
    const msg = Array.isArray(m) ? m[0] : m;
    throw new AuthApiError(msg || `Something went wrong (${res.status}).`);
  }

  return (json?.data ?? (json as unknown)) as T;
}

export type AuthTokens = { accessToken: string; refreshToken: string };

// ── Patient (phone OTP) ──────────────────────────────────────────
export const sendUserOtp = (mobile: string) =>
  post<{ message: string }>("/auth/user/otp/send", { mobile });

/** Verifies the code and creates the patient account if it doesn't exist. */
export const verifyUserOtp = (mobile: string, otp: string) =>
  post<AuthTokens>("/auth/user/otp/verify", { mobile, otp });

// ── Doctor (email + phone OTP) ───────────────────────────────────
export const sendDoctorOtp = (email: string, phone: string) =>
  post<{ sent: boolean; devEmailCode?: string; devPhoneCode?: string }>(
    "/auth/doctor/register/send-otp",
    { email, phone },
  );

export type DoctorRegisterInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  speciality: string;
  consultantSpeciality?: string;
  languages: string[];
  emailCode: string;
  phoneCode: string;
};

/** Verifies both codes and creates the doctor (status NEW, pending review). */
export const registerDoctor = (input: DoctorRegisterInput) =>
  post<AuthTokens>("/auth/doctor/register", input);

// Shared field checks for the free-audit form.
// Everything is checked on the trimmed value, so a field holding only spaces
// counts as empty (the browser's own `required` lets "   " through).

export const PHONE_CHARS_RE = /^[+\d\s().-]+$/;
const NAME_RE = /^[\p{L}\p{M}][\p{L}\p{M} .'’-]*$/u;
const EMAIL_RE =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)*\.[a-z]{2,}$/i;

/** Common slips in the part after the @, with the address they meant. */
const DOMAIN_TYPOS: Record<string, string> = {
  "gmial.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gamil.com": "gmail.com",
  "gmail.con": "gmail.com",
  "gmail.co": "gmail.com",
  "gnail.com": "gmail.com",
  "hotmial.com": "hotmail.com",
  "hotmail.con": "hotmail.com",
  "yaho.com": "yahoo.com",
  "yahoo.con": "yahoo.com",
  "outlok.com": "outlook.com",
  "outlook.con": "outlook.com",
};

/** Trimmed string from a FormData entry, control characters removed. */
export const clean = (v: FormDataEntryValue | null) =>
  String(v ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .trim();

/** Error message for a person's name, or undefined when it's fine. */
export function nameError(name: string, label = "name"): string | undefined {
  if (!name) return `Please enter your ${label}.`;
  if (name.length < 2) return `Your ${label} is too short.`;
  if (name.length > 80) return `Your ${label} is too long.`;
  if (!NAME_RE.test(name)) return `Please use letters only in your ${label}.`;
  return undefined;
}

/** Error message for an email value, or undefined when it's fine. */
export function emailError(email: string): string | undefined {
  if (!email) return "Please enter your email address.";
  if (email.length > 254 || email.includes("..") || !EMAIL_RE.test(email)) return "That email address doesn't look right.";
  const fix = DOMAIN_TYPOS[email.split("@")[1]?.toLowerCase() ?? ""];
  if (fix) return `Did you mean ${email.split("@")[0]}@${fix}?`;
  return undefined;
}

/** Error message for a phone value, or undefined when it's fine. */
export function phoneError(phone: string): string | undefined {
  if (!phone) return "Please enter your phone or WhatsApp number.";
  const digits = phone.replace(/\D/g, "");
  if (
    !PHONE_CHARS_RE.test(phone) ||
    phone.lastIndexOf("+") > 0 ||
    digits.length < 8 ||
    digits.length > 15 ||
    /^(\d)\1+$/.test(digits)
  )
    return "Enter a valid number with country code, e.g. +1 555 123 4567.";
  return undefined;
}

/** A website address like yourstore.com or https://yourstore.com/shop. */
export const DOMAIN_RE = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?([/?#]\S*)?$/i;

/** Error message for a website address, or undefined when it's fine. */
export function websiteError(site: string): string | undefined {
  if (!site) return "Please enter your website address.";
  if (!DOMAIN_RE.test(site)) return "That address doesn't look right, e.g. yourstore.com.";
  return undefined;
}

/** One or more store URLs (one per line or comma-separated). */
export function storeUrlsError(raw: string): string | undefined {
  const urls = raw
    .split(/[\n,]+/)
    .map((u) => u.trim())
    .filter(Boolean);
  if (urls.length === 0) return "Please enter your store URL.";
  if (urls.length > 5) return "Please list up to 5 store URLs.";
  if (urls.some((u) => !DOMAIN_RE.test(u))) return "One of the URLs doesn't look right, e.g. yourstore.com.";
  return undefined;
}

/** Free-text message with a minimum length. */
export function messageError(text: string, min = 10): string | undefined {
  if (text.length < min) return `Please tell us a little more (at least ${min} characters).`;
  return undefined;
}

/**
 * Live (on blur) checks, keyed by the field's `name`. Empty values are left
 * alone here — "required" is enforced when the form is submitted.
 */
export function fieldError(name: string, value: string): string | undefined {
  const v = value.trim();
  if (!v) return undefined;
  switch (name) {
    case "name":
      return nameError(v);
    case "firstName":
      return nameError(v, "first name");
    case "lastName":
      return nameError(v, "last name");
    case "email":
      return emailError(v.toLowerCase());
    case "phone":
      return phoneError(v);
    case "storeUrls":
      return storeUrlsError(v);
    case "message":
      return messageError(v);
    case "customBudget":
      return /\d/.test(v) ? undefined : "Please enter your budget, e.g. $1,500.";
    case "otherService":
      return v.length < 3 ? "Please describe what you need." : undefined;
    default:
      return undefined;
  }
}

// Supabase Edge Function: emails a new website lead to the team inbox over SMTP.
//
// The website's server calls this right after it saves a lead. The SMTP login lives here, in
// Supabase secrets, so it never touches the Next.js app or its .env file.
//
// Deploy (needs the Supabase CLI, `supabase login` and `supabase link` once):
//   supabase functions deploy send-lead-email --no-verify-jwt
// Secrets (use your mail provider's SMTP details):
//   supabase secrets set SMTP_HOSTNAME=smtp.gmail.com SMTP_PORT=465 \
//     SMTP_USER=you@yourdomain.com SMTP_PASSWORD=... \
//     SMTP_FROM="SAFZTECH Website <you@yourdomain.com>" \
//     LEADS_INBOX=info@safztech.com EMAIL_FUNCTION_SECRET=<a long random string>
// The same EMAIL_FUNCTION_SECRET goes in the website's .env as EMAIL_FUNCTION_SECRET.

import nodemailer from "npm:nodemailer@6.9.16";

const TITLES: Record<string, string> = {
  contact: "Contact Us",
  free_audit: "Free Audit",
  referral: "Referral Program",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

const text = (v: unknown, max: number) => (typeof v === "string" ? v.slice(0, max).trim() : "");
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

Deno.serve(async (req) => {
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  // Only the website's server knows this secret.
  const secret = Deno.env.get("EMAIL_FUNCTION_SECRET");
  if (!secret || req.headers.get("Authorization") !== `Bearer ${secret}`) {
    return json({ error: "Unauthorized" }, 401);
  }

  const body = await req.json().catch(() => null);
  if (!body) return json({ error: "Invalid JSON" }, 400);

  const type = TITLES[body.type] ? String(body.type) : "contact";
  const lead = {
    name: text(body.name, 160),
    email: text(body.email, 254),
    phone: text(body.phone, 40),
    website: text(body.website, 500),
    service: text(body.service, 200),
    message: text(body.message, 5000),
  };
  if (!lead.name || !lead.email) return json({ error: "name and email are required" }, 400);

  const host = Deno.env.get("SMTP_HOSTNAME");
  const user = Deno.env.get("SMTP_USER");
  const pass = Deno.env.get("SMTP_PASSWORD");
  const missing = [["SMTP_HOSTNAME", host], ["SMTP_USER", user], ["SMTP_PASSWORD", pass]].filter(([, v]) => !v).map(([k]) => k);
  if (missing.length) return json({ error: `Missing secrets: ${missing.join(", ")}` }, 500);
  const port = Number(Deno.env.get("SMTP_PORT") ?? 465);

  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px;font-weight:bold;vertical-align:top;">${label}</td><td style="padding:8px;">${esc(value || "Not provided")}</td></tr>`;

  try {
    const transporter = nodemailer.createTransport({
      host: host!,
      port,
      secure: port === 465,
      auth: { user: user!, pass: pass! },
    });
    await transporter.sendMail({
      from: Deno.env.get("SMTP_FROM") ?? user!,
      to: Deno.env.get("LEADS_INBOX") ?? "info@safztech.com",
      replyTo: lead.email,
      subject: `New ${TITLES[type]} lead: ${lead.name}${lead.service ? ` — ${lead.service}` : ""}`,
      text: `New ${TITLES[type]} submission\n\nName: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nWebsite: ${lead.website}\nService: ${lead.service}\n\n${lead.message}`,
      html: `<h2>New ${TITLES[type]} submission</h2>
        <table style="width:100%;border-collapse:collapse;">
          ${row("Name", lead.name)}${row("Email", lead.email)}${row("Phone", lead.phone)}
          ${row("Website", lead.website)}${row("Service", lead.service)}${row("Message", lead.message)}
        </table>`,
    });
  } catch (err) {
    console.error("SMTP send failed:", err);
    return json({ error: `SMTP failed: ${err instanceof Error ? err.message : String(err)}` }, 502);
  }

  return json({ ok: true });
});

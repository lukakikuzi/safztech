import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

import { rest, supabaseReady, type LeadType } from "@/lib/supabase";

// Every form on the site (Contact Us, Free Audit, Referral) comes through here. The lead is saved to
// Supabase first (that is what the admin panel shows); an email to info@safztech.com is a bonus,
// sent by the Edge Function once it is deployed.
const TYPES: LeadType[] = ["contact", "free_audit", "referral"];

const text = (v: unknown, max: number) => (typeof v === "string" ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max) : "");

// The email itself is sent by the "send-lead-email" Supabase Edge Function (it holds the SMTP login).
async function sendEmail(type: LeadType, lead: Record<string, string>) {
  const url = process.env.SUPABASE_URL?.replace(/\/+$/, "");
  const secret = process.env.EMAIL_FUNCTION_SECRET;
  if (!url || !secret) return false;
  const res = await fetch(`${url}/functions/v1/send-lead-email`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${secret}` },
    body: JSON.stringify({ type, ...lead }),
    signal: AbortSignal.timeout(10_000),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`send-lead-email returned ${res.status}`);
  return true;
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid request." }, { status: 400 });

  const type: LeadType = TYPES.includes(body.type) ? body.type : "contact";
  const lead = {
    name: text(body.name, 160),
    email: text(body.email, 254).toLowerCase(),
    phone: text(body.phone, 40),
    website: text(body.website, 500),
    service: text(body.service, 200),
    message: text(body.message, 5000),
  };

  if (!lead.name || !lead.email || (type === "contact" && !lead.message)) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });
  }

  const id = randomUUID();
  let saved = false;
  let emailed = false;

  if (supabaseReady()) {
    const res = await rest("leads", {
      method: "POST",
      prefer: "return=minimal",
      body: { id, type, ...lead, phone: lead.phone || null, website: lead.website || null, service: lead.service || null, message: lead.message || null },
    });
    saved = res.ok;
    if (!res.ok) console.error("Saving lead failed:", res.status, JSON.stringify(res.data).slice(0, 300));
  }

  try {
    emailed = await sendEmail(type, lead);
  } catch (err) {
    console.error("Email send failed:", err);
  }

  if (!saved && !emailed) {
    return NextResponse.json({ error: "We couldn't send your details. Please try again." }, { status: 500 });
  }
  return NextResponse.json({ success: true, id: saved ? id : null });
}

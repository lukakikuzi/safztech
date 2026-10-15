"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { adminEmails, endSession, getAdmin, startSession } from "@/lib/admin-session";
import { rest, supabaseReady, verifyPassword, type LeadStatus } from "@/lib/supabase";

const STATUSES: LeadStatus[] = ["new", "contacted", "won", "lost"];
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function login(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!supabaseReady() || adminEmails().length === 0) redirect("/admin/login?error=setup");
  if (!email || !password) redirect("/admin/login?error=credentials");

  // Only listed admins get in, even if someone else has a Supabase account.
  const verified = adminEmails().includes(email) ? await verifyPassword(email, password) : null;
  if (!verified) redirect("/admin/login?error=credentials");

  await startSession(verified);
  redirect("/admin");
}

export async function logout() {
  await endSession();
  redirect("/admin/login");
}

export async function updateLead(formData: FormData) {
  if (!(await getAdmin())) redirect("/admin/login");
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "") as LeadStatus;
  const notes = String(formData.get("notes") ?? "").trim().slice(0, 5000);
  if (!UUID.test(id) || !STATUSES.includes(status)) redirect("/admin");

  await rest(`leads?id=eq.${id}`, { method: "PATCH", prefer: "return=minimal", body: { status, notes: notes || null } });
  revalidatePath("/admin");
  redirect(`/admin/leads/${id}?saved=1`);
}

export async function deleteLead(formData: FormData) {
  if (!(await getAdmin())) redirect("/admin/login");
  const id = String(formData.get("id") ?? "");
  if (UUID.test(id)) await rest(`leads?id=eq.${id}`, { method: "DELETE", prefer: "return=minimal" });
  revalidatePath("/admin");
  redirect("/admin");
}

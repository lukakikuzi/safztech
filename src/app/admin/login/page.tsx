import { redirect } from "next/navigation";

import { login } from "@/app/admin/actions";
import { getAdmin } from "@/lib/admin-session";

export const dynamic = "force-dynamic";

const MESSAGES: Record<string, string> = {
  credentials: "Wrong email or password.",
  setup:
    "Admin is not set up yet. Add SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY and ADMIN_EMAILS to the environment.",
};

export default async function AdminLogin({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  if (await getAdmin()) redirect("/admin");
  const { error } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <form
        action={login}
        className="w-full max-w-sm space-y-5 rounded-3xl border border-white/20 bg-[rgba(0,0,0,0.25)] bg-gradient-to-br from-white/[0.12] to-white/[0.03] p-8 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.4),0_24px_50px_-24px_rgba(0,0,0,0.8)] backdrop-blur-[10px]"
      >
        <div>
          <p className="font-poppins text-2xl font-extrabold text-heading">
            SAFZ<span className="text-primary">TECH</span>
          </p>
          <p className="mt-1 text-sm text-paragraph">Admin panel</p>
        </div>

        <label className="block space-y-1.5">
          <span className="text-sm text-heading">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-full border border-white/15 bg-black/30 px-5 py-3 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm text-heading">Password</span>
          <input
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="w-full rounded-full border border-white/15 bg-black/30 px-5 py-3 text-sm outline-none focus:border-primary"
          />
        </label>

        {error && (
          <p role="alert" className="text-sm text-destructive">
            {MESSAGES[error] ?? "Something went wrong."}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-full border border-[rgba(255,215,0,0.55)] bg-gradient-to-br from-[rgba(255,200,0,0.5)] to-[rgba(255,140,0,0.2)] px-6 py-3 font-semibold text-white shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.5)] transition-all hover:from-[rgba(255,200,0,0.65)]"
        >
          Sign in
        </button>
      </form>
    </main>
  );
}

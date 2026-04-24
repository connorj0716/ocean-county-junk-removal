import type { Metadata } from "next";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Sign In",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const params = await searchParams;
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 grid place-items-center text-white font-bold shadow-lg shadow-brand-900/40">
            OC
          </div>
          <div>
            <div className="text-sm text-slate-400">Ocean County</div>
            <div className="text-lg font-semibold leading-tight">
              Junk Removal Dashboard
            </div>
          </div>
        </div>

        <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-2xl font-semibold mb-1">Welcome back</h1>
          <p className="text-sm text-slate-400 mb-6">
            Sign in to view your business dashboard.
          </p>
          <LoginForm next={params?.next} />
        </div>

        <p className="text-center text-xs text-slate-500 mt-6">
          &copy; {new Date().getFullYear()} Ocean County Junk Removal
        </p>
      </div>
    </main>
  );
}

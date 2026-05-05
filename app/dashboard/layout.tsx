import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE, readSessionUser } from "@/lib/auth";
import DashboardChrome from "@/components/dashboard/DashboardChrome";

export const metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE)?.value;
  const user = readSessionUser(token);
  if (!user) redirect("/login");

  return <DashboardChrome user={user}>{children}</DashboardChrome>;
}

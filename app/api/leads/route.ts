import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

function str(v: unknown, max = 1000): string | null {
  if (typeof v !== "string") return null;
  const trimmed = v.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = str(body.name, 120);
  const phone = str(body.phone, 40);
  const email = str(body.email, 200);
  const town = str(body.town, 120);
  const service = str(body.service, 120);
  const message = str(body.message, 2000);

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "Name and phone are required." },
      { status: 400 }
    );
  }

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("leads").insert({
      name,
      phone,
      email,
      town,
      service,
      message,
      source: "website",
    });
    if (error) {
      console.error("leads insert error:", error);
      return NextResponse.json(
        { ok: false, error: "Could not save your request. Please call us." },
        { status: 500 }
      );
    }
  } catch (e) {
    console.error("leads route exception:", e);
    return NextResponse.json(
      { ok: false, error: "Server is not configured. Please call us." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}

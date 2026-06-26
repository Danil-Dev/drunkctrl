import { NextResponse } from "next/server";

// Minimal waitlist sink. No DB needed for an MVP: if TG_BOT_TOKEN + TG_CHAT_ID are set we
// push each lead to Telegram (instant phone notification); otherwise we just log it to the
// server console so nothing is lost. Swap in a DB / sheet later without touching the form.

export const runtime = "nodejs";

interface Lead {
  contact?: unknown;
  volume?: unknown;
  website?: unknown; // honeypot
}

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: Lead;
  try {
    body = (await req.json()) as Lead;
  } catch {
    return NextResponse.json({ ok: false, error: "bad json" }, { status: 400 });
  }

  // Honeypot: real users never fill `website`. Pretend success, drop the bot.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const contact = clean(body.contact, 200);
  const volume = clean(body.volume, 40);
  if (!contact || contact.length < 3) {
    return NextResponse.json({ ok: false, error: "contact required" }, { status: 422 });
  }

  const token = process.env.TG_BOT_TOKEN;
  const chat = process.env.TG_CHAT_ID;
  if (token && chat) {
    const text =
      `🍻 <b>DrunkCtrl waitlist</b>\n` +
      `Контакт: <code>${escapeHtml(contact)}</code>\n` +
      (volume ? `Объём: ${escapeHtml(volume)}\n` : "");
    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chat, text, parse_mode: "HTML" }),
      });
    } catch {
      // best-effort — never fail the submission because Telegram hiccuped
    }
  } else {
    console.log("[waitlist]", { contact, volume });
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

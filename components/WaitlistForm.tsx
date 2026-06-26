"use client";

import { useState } from "react";
import type { Dict } from "@/lib/i18n";

type State = "idle" | "loading" | "ok" | "error";
type FormDict = Dict["waitlist"]["form"];

export function WaitlistForm({ t }: { t: FormDict }) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "loading") return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      contact: String(data.get("contact") ?? "").trim(),
      volume: String(data.get("volume") ?? "").trim(),
      // honeypot — bots fill it, humans don't
      website: String(data.get("website") ?? ""),
    };
    if (!payload.contact) {
      setState("error");
      setError(t.errContact);
      return;
    }
    setState("loading");
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text().catch(() => ""));
      setState("ok");
      form.reset();
    } catch {
      setState("error");
      setError(t.errSend);
    }
  }

  if (state === "ok") {
    return (
      <div className="rounded-2xl border border-signal/30 bg-signal/5 p-6 text-center">
        <div className="font-mono text-sm text-signal">{t.okTag}</div>
        <p className="mt-2 font-display text-xl font-bold">{t.okTitle}</p>
        <p className="mt-1 text-sm text-haze">{t.okSub}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0"
        aria-hidden
      />
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          name="contact"
          placeholder={t.contactPlaceholder}
          autoComplete="off"
          className="h-12 flex-1 rounded-xl border border-line bg-ink/60 px-4 font-mono text-sm text-white placeholder:text-haze/60 outline-none transition focus:border-indigo focus:ring-2 focus:ring-indigo/30"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="group relative h-12 shrink-0 overflow-hidden rounded-xl bg-gradient-to-r from-indigo to-violet px-6 font-display font-bold text-white shadow-[0_8px_30px_-6px_rgba(79,70,229,0.6)] transition active:scale-[0.98] disabled:opacity-60"
        >
          {state === "loading" ? t.submitting : t.submit}
        </button>
      </div>
      <select
        name="volume"
        defaultValue=""
        className="h-11 w-full rounded-xl border border-line bg-ink/60 px-4 font-mono text-xs text-haze outline-none transition focus:border-indigo"
      >
        <option value="" disabled>
          {t.volumePrompt}
        </option>
        {t.volumeOptions.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {state === "error" && <p className="font-mono text-xs text-red-400">{error}</p>}
      <p className="font-mono text-[11px] text-haze/60">{t.privacy}</p>
    </form>
  );
}

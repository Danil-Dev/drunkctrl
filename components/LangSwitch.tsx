"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

const LABEL: Record<Locale, string> = { ru: "RU", uk: "UK", en: "EN" };

export function LangSwitch({ current }: { current: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  function go(l: Locale) {
    if (l === current) return;
    // Remember the explicit choice so middleware honors it on the next bare visit.
    document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=31536000; samesite=lax`;
    const rest = pathname.replace(/^\/(ru|uk|en)/, "");
    router.push(`/${l}${rest}`);
  }

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-line bg-surface p-0.5 font-mono text-[11px]">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => go(l)}
          aria-current={l === current}
          className={`rounded px-2 py-1 transition ${
            l === current ? "bg-indigo text-white" : "text-haze hover:text-white"
          }`}
        >
          {LABEL[l]}
        </button>
      ))}
    </div>
  );
}

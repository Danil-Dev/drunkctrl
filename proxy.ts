import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./lib/i18n";

// Locale routing (Next 16 "proxy" convention, formerly middleware). Picks a locale: explicit
// cookie choice first, then the browser's Accept-Language, else default — and redirects any
// path without a /<locale> prefix to the resolved one.
function pickLocale(req: NextRequest): string {
  const cookie = req.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && (locales as readonly string[]).includes(cookie)) return cookie;

  const accept = req.headers.get("accept-language") ?? "";
  const ordered = accept
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { base: tag.split("-")[0].toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { base } of ordered) {
    if ((locales as readonly string[]).includes(base)) return base;
  }
  return defaultLocale;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  const locale = pickLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Everything except /api, Next internals, and files with an extension (icon.svg, etc.)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

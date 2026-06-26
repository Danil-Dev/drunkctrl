import { notFound } from "next/navigation";
import { Mark, Wordmark } from "@/components/Mark";
import { Reveal } from "@/components/Reveal";
import { WaitlistForm } from "@/components/WaitlistForm";
import { DashboardMock } from "@/components/DashboardMock";
import { LangSwitch } from "@/components/LangSwitch";
import { getDictionary, isLocale } from "@/lib/i18n";

// ── Edit me ──────────────────────────────────────────────────────────────────
// Starting subscription price. The "from / per month" wording is per-locale (dict.pricing).
const PRICE = "50$";
const TELEGRAM = "https://t.me/drunkctrl";
// ──────────────────────────────────────────────────────────────────────────────

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] glow-indigo" />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-2.5">
            <Mark size={28} />
            <Wordmark className="text-lg" />
          </a>
          <div className="hidden items-center gap-7 font-mono text-[13px] text-haze md:flex">
            <a href="#why" className="transition hover:text-white">{d.nav.why}</a>
            <a href="#features" className="transition hover:text-white">{d.nav.features}</a>
            <a href="#pricing" className="transition hover:text-white">{d.nav.pricing}</a>
            <a href="#faq" className="transition hover:text-white">{d.nav.faq}</a>
          </div>
          <div className="flex items-center gap-3">
            <LangSwitch current={lang} />
            <a
              href="#waitlist"
              className="rounded-lg border border-line bg-surface px-4 py-2 font-display text-sm font-semibold transition hover:border-indigo hover:bg-indigo/10"
            >
              {d.nav.access}
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="relative z-10 mx-auto max-w-6xl px-5">
        {/* HERO */}
        <section className="grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
          <div>
            <Reveal>
              <div className="eyebrow flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 animate-blink rounded-full bg-signal" />
                {d.hero.eyebrow}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.2rem]">
                {d.hero.h1a}
                <br />
                <span className="text-gradient">{d.hero.h1b}</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-haze">{d.hero.sub}</p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#waitlist"
                  className="rounded-xl bg-gradient-to-r from-indigo to-violet px-7 py-3.5 font-display font-bold shadow-[0_10px_40px_-8px_rgba(79,70,229,0.65)] transition active:scale-[0.98]"
                >
                  {d.hero.ctaPrimary}
                </a>
                <a
                  href="#why"
                  className="rounded-xl border border-line px-7 py-3.5 font-display font-semibold text-haze transition hover:border-indigo hover:text-white"
                >
                  {d.hero.ctaSecondary}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <DashboardMock t={d.dash} />
          </Reveal>
        </section>

        {/* STAT BAR */}
        <section className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {d.stats.map((s) => (
            <div key={s.small} className="bg-ink p-6 text-center">
              <div className="font-display text-3xl font-extrabold text-gradient">{s.big}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-haze">{s.small}</div>
            </div>
          ))}
        </section>

        {/* WHY — strengths */}
        <section id="why" className="scroll-mt-20 py-24">
          <Reveal>
            <p className="eyebrow">{d.why.eyebrow}</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {d.why.heading}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {d.why.items.map((s, idx) => (
              <Reveal key={s.title} delay={(idx % 3) * 70}>
                <div className="group h-full bg-ink p-7 transition hover:bg-surface">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-xs text-indigo">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="h-2 w-2 rounded-full bg-line transition group-hover:bg-signal" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-haze">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="scroll-mt-20 border-t border-line py-24">
          <Reveal>
            <p className="eyebrow">{d.features.eyebrow}</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {d.features.heading}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {d.features.items.map((f, idx) => (
              <Reveal key={f.title} delay={(idx % 4) * 60}>
                <div className="group h-full bg-ink p-6 transition hover:bg-surface">
                  <h3 className="font-display text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-haze">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="scroll-mt-20 border-t border-line py-24">
          <Reveal>
            <p className="eyebrow text-center">{d.pricing.eyebrow}</p>
            <h2 className="mt-3 text-center font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {d.pricing.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-center text-haze">{d.pricing.sub}</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mx-auto mt-12 max-w-md">
              <div className="relative overflow-hidden rounded-3xl border border-indigo/40 bg-gradient-to-b from-surface to-ink p-8 shadow-[0_30px_90px_-30px_rgba(79,70,229,0.6)]">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo to-transparent" />
                <div className="flex items-center gap-2.5">
                  <Mark size={26} />
                  <Wordmark className="text-lg" />
                </div>
                <div className="mt-6 flex items-end gap-1.5">
                  <span className="mb-2 font-mono text-sm text-haze">{d.pricing.from}</span>
                  <span className="font-display text-6xl font-extrabold tracking-tight">{PRICE}</span>
                  <span className="mb-2 font-mono text-sm text-haze">{d.pricing.per}</span>
                </div>
                <ul className="mt-7 space-y-3 text-sm">
                  {d.pricing.bullets.map((li) => (
                    <li key={li} className="flex gap-3 text-haze">
                      <span className="mt-0.5 text-signal">✓</span>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className="mt-8 block rounded-xl bg-gradient-to-r from-indigo to-violet py-3.5 text-center font-display font-bold transition active:scale-[0.98]"
                >
                  {d.pricing.cta}
                </a>
                <p className="mt-3 text-center font-mono text-[11px] text-haze/60">{d.pricing.note}</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* WAITLIST */}
        <section id="waitlist" className="scroll-mt-20 border-t border-line py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="eyebrow">{d.waitlist.eyebrow}</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {d.waitlist.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-haze">
                {d.waitlist.sub1}
                <a href={TELEGRAM} className="text-white underline decoration-indigo underline-offset-4">
                  {d.waitlist.tg}
                </a>
                {d.waitlist.sub2}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mx-auto mt-10 max-w-lg text-left">
                <WaitlistForm t={d.waitlist.form} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 border-t border-line py-24">
          <Reveal>
            <p className="eyebrow">{d.faq.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">{d.faq.heading}</h2>
          </Reveal>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {d.faq.items.map((item, idx) => (
              <Reveal key={item.q} delay={idx * 60}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-display text-lg font-semibold">{item.q}</span>
                    <span className="font-mono text-xl text-indigo transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-haze">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-12 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <Mark size={26} />
            <div>
              <Wordmark className="text-base" />
              <p className="font-mono text-[11px] text-haze/60">{d.footer.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-6 font-mono text-[13px] text-haze">
            <a href={TELEGRAM} className="transition hover:text-white">{d.footer.links.telegram}</a>
            <a href="#why" className="transition hover:text-white">{d.footer.links.why}</a>
            <a href="#waitlist" className="transition hover:text-white">{d.footer.links.access}</a>
          </div>
          <p className="font-mono text-[11px] text-haze/50">© 2026 DrunkCtrl · drunkctrl.com</p>
        </div>
      </footer>
    </div>
  );
}

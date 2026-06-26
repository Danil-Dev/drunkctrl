import { Mark, Wordmark } from "@/components/Mark";
import { Reveal } from "@/components/Reveal";
import { WaitlistForm } from "@/components/WaitlistForm";

// ── Edit me ──────────────────────────────────────────────────────────────────
// Single subscription tier. Set the real number; "/мес" rendered next to it.
const PRICE = "149$";
const TELEGRAM = "https://t.me/drunkctrl";
// ──────────────────────────────────────────────────────────────────────────────

const FEATURES: { i: string; title: string; body: string }[] = [
  {
    i: "01",
    title: "Чек без браузера",
    body: "curl-impersonate с реальным Chrome JA3 через прокси аккаунта. Статус, карты, биллинг и политика — за секунды, с высокой конкурентностью. Ноль Chromium.",
  },
  {
    i: "02",
    title: "Антидетект из коробки",
    body: "rebrowser + Apify fingerprint, согласованные UA/WebGL/WebRTC, свой fingerprint, прокси и cookies на каждый аккаунт. Свой профиль Chromium на акк.",
  },
  {
    i: "03",
    title: "Приём политики",
    body: "Принятие Ads-политики headless — один POST на legacy-эндпоинт, без открытия браузера. Авто-эскалация в браузер при отказе.",
  },
  {
    i: "04",
    title: "Карты и лимиты",
    body: "Привязка и удаление карт (form-fill + SDK), смена локали кабинета, лимит открута. Round-robin карт по аккаунтам в батче.",
  },
  {
    i: "05",
    title: "Передача доступов",
    body: "РК и FanPage между твоими аккаунтами, claim РК в БМ, выдача и отзыв ролей, выход из БМ. Всё через replay реальных мутаций.",
  },
  {
    i: "06",
    title: "Залив трафика",
    body: "Marketing API: кампании, адсеты, креативы, пиксель, гео-таргет, DSA, расписание. Шаблоны запусков + лимиты конкурентности.",
  },
  {
    i: "07",
    title: "Статистика",
    body: "Группированные инсайты + drill-down «как в Ads Manager» по кампаниям/адсетам/объявлениям. Старт/стоп/бюджет прямо из панели.",
  },
  {
    i: "08",
    title: "Workflow-конвейеры",
    body: "Собери пайплайн действий (чек → политика → карта → залив) с условными gate'ами и прогони на сотнях аккаунтов одной кнопкой.",
  },
  {
    i: "09",
    title: "Self-hosted desktop",
    body: "Десктоп-установка под Windows (Electron). Твои аккаунты, cookies и прокси не покидают твою машину. Никакого облака с твоими данными.",
  },
];

const STEPS: { n: string; t: string; d: string }[] = [
  { n: "01", t: "Записал один раз", d: "Делаешь действие в UI на одном аккаунте — DrunkCtrl снимает мутацию (doc_id + шейп переменных)." },
  { n: "02", t: "Панель выучила", d: "Шаблон сохраняется как LearnedMutation. Реверс реального флоу — без хрупких UI-кликов." },
  { n: "03", t: "Реплей на N", d: "Запускаешь headless на всём парке. Каждый аккаунт — через свой прокси, fingerprint и сессию." },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Это облако или у меня на машине?",
    a: "Self-hosted. Десктоп-установка под Windows на базе Electron — аккаунты, cookies и прокси хранятся локально и никуда не уходят.",
  },
  {
    q: "Нужен отдельный антидетект-браузер?",
    a: "Нет. Стелс встроен: rebrowser-Chromium + Apify fingerprint, свой профиль, прокси и отпечаток на каждый аккаунт.",
  },
  {
    q: "Сколько аккаунтов тянет?",
    a: "Headless-чек без браузера идёт сотнями параллельно. Браузерные действия упираются в RAM (~5 окон одновременно на средней машине).",
  },
  {
    q: "Как оплата и доступ?",
    a: "Подписка. Сейчас открыт лист ожидания — оставь контакт, напишем в Telegram, как откроем доступ.",
  },
];

export default function Page() {
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
            <a href="#features" className="transition hover:text-white">возможности</a>
            <a href="#how" className="transition hover:text-white">как работает</a>
            <a href="#pricing" className="transition hover:text-white">цена</a>
            <a href="#faq" className="transition hover:text-white">faq</a>
          </div>
          <a
            href="#waitlist"
            className="rounded-lg border border-line bg-surface px-4 py-2 font-display text-sm font-semibold transition hover:border-indigo hover:bg-indigo/10"
          >
            Доступ
          </a>
        </nav>
      </header>

      <main id="top" className="relative z-10 mx-auto max-w-6xl px-5">
        {/* HERO */}
        <section className="grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
          <div>
            <Reveal>
              <div className="eyebrow flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 animate-blink rounded-full bg-signal" />
                self-hosted ops console · часть экосистемы DrunkFB
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                Сотни FB-аккаунтов.
                <br />
                Один <span className="text-gradient">Ctrl</span>.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-haze">
                Командный центр для парка рекламных аккаунтов: headless-чек за секунды,
                приём политики, карты, передача доступов, залив трафика и статистика.
                Антидетект из коробки — свой fingerprint, прокси и cookies на каждый акк.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#waitlist"
                  className="rounded-xl bg-gradient-to-r from-indigo to-violet px-7 py-3.5 font-display font-bold shadow-[0_10px_40px_-8px_rgba(79,70,229,0.65)] transition active:scale-[0.98]"
                >
                  В лист ожидания →
                </a>
                <a
                  href="#features"
                  className="rounded-xl border border-line px-7 py-3.5 font-display font-semibold text-haze transition hover:border-indigo hover:text-white"
                >
                  Что умеет
                </a>
              </div>
            </Reveal>
          </div>

          {/* Terminal demo */}
          <Reveal delay={200}>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/80 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px animate-scan bg-gradient-to-r from-transparent via-indigo to-transparent" />
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span className="ml-2 font-mono text-xs text-haze/70">drunkctrl — batch 240</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
{`$ drunkctrl check --batch 240
`}<span className="text-signal">{`✓ 198 active`}</span>{`        12.4s
`}<span className="text-yellow-300">{`⚠  31 policy`}</span>{`        auto-accept →
`}<span className="text-red-400">{`✗  11 checkpoint`}</span>{`

$ drunkctrl accept-policy --headless
`}<span className="text-signal">{`✓ 31 certified`}</span>{`         no chromium

$ drunkctrl bind-card --scope no-card
`}<span className="text-signal">{`✓ 64 cabinets bound`}</span>{`

$ drunkctrl launch --tpl summer-traffic
`}<span className="text-signal">{`✓ 240 campaigns ACTIVE`}</span>{`  `}<span className="animate-blink">▋</span>
</pre>
            </div>
          </Reveal>
        </section>

        {/* STAT BAR */}
        <section className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {[
            ["~10s", "медианный чек аккаунта"],
            ["0", "Chromium на быстром чеке"],
            ["1000+", "аккаунтов в одном батче"],
            ["ru / uk / en", "интерфейс панели"],
          ].map(([big, small]) => (
            <div key={small} className="bg-ink p-6 text-center">
              <div className="font-display text-3xl font-extrabold text-gradient">{big}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-haze">{small}</div>
            </div>
          ))}
        </section>

        {/* FEATURES */}
        <section id="features" className="scroll-mt-20 py-24">
          <Reveal>
            <p className="eyebrow">// возможности</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Всё FB-рутины — в одном месте, headless.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, idx) => (
              <Reveal key={f.i} delay={(idx % 3) * 70}>
                <div className="group h-full bg-ink p-7 transition hover:bg-surface">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-xs text-indigo">{f.i}</span>
                    <span className="h-2 w-2 rounded-full bg-line transition group-hover:bg-signal" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-haze">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="scroll-mt-20 border-t border-line py-24">
          <Reveal>
            <p className="eyebrow">// как это работает</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Запиши один раз — повтори на всём парке.
            </h2>
            <p className="mt-4 max-w-xl text-haze">
              Паттерн capture-then-replay: вместо хрупких кликов панель снимает реальную
              мутацию FB и проигрывает её headless на сотнях аккаунтов.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, idx) => (
              <Reveal key={s.n} delay={idx * 90}>
                <div className="relative h-full rounded-2xl border border-line bg-surface/60 p-7">
                  <div className="font-display text-5xl font-extrabold text-line">{s.n}</div>
                  <h3 className="mt-3 font-display text-xl font-bold">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-haze">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="scroll-mt-20 border-t border-line py-24">
          <Reveal>
            <p className="eyebrow text-center">// доступ</p>
            <h2 className="mt-3 text-center font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Одна подписка. Без урезанных тарифов.
            </h2>
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
                  <span className="font-display text-6xl font-extrabold tracking-tight">{PRICE}</span>
                  <span className="mb-2 font-mono text-sm text-haze">/ мес</span>
                </div>
                <ul className="mt-7 space-y-3 text-sm">
                  {[
                    "Все модули: чек, политика, карты, доступы, залив, статистика",
                    "Антидетект и прокси-бридж из коробки",
                    "Workflow-конвейеры и массовые действия",
                    "Self-hosted desktop — данные на твоей машине",
                    "Обновления и новые FB-флоу",
                  ].map((li) => (
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
                  Получить доступ
                </a>
                <p className="mt-3 text-center font-mono text-[11px] text-haze/60">
                  сейчас — лист ожидания
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* WAITLIST */}
        <section id="waitlist" className="scroll-mt-20 border-t border-line py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="eyebrow">// заявка</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Забронируй доступ к DrunkCtrl
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-haze">
                Оставь Telegram или email — напишем, как откроем подписку. Можно сразу в{" "}
                <a href={TELEGRAM} className="text-white underline decoration-indigo underline-offset-4">
                  @drunkctrl
                </a>
                .
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mx-auto mt-10 max-w-lg text-left">
                <WaitlistForm />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 border-t border-line py-24">
          <Reveal>
            <p className="eyebrow">// faq</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">Вопросы</h2>
          </Reveal>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {FAQ.map((item, idx) => (
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
              <p className="font-mono text-[11px] text-haze/60">ops console для FB-аккаунтов</p>
            </div>
          </div>
          <div className="flex items-center gap-6 font-mono text-[13px] text-haze">
            <a href={TELEGRAM} className="transition hover:text-white">telegram</a>
            <a href="#features" className="transition hover:text-white">возможности</a>
            <a href="#waitlist" className="transition hover:text-white">доступ</a>
          </div>
          <p className="font-mono text-[11px] text-haze/50">© 2026 DrunkCtrl · drunkctrl.com</p>
        </div>
      </footer>
    </div>
  );
}

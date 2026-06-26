import { Mark, Wordmark } from "@/components/Mark";
import { Reveal } from "@/components/Reveal";
import { WaitlistForm } from "@/components/WaitlistForm";
import { DashboardMock } from "@/components/DashboardMock";

// ── Edit me ──────────────────────────────────────────────────────────────────
// Single subscription tier. Set the real number; "/мес" rendered next to it.
const PRICE = "50$";
const TELEGRAM = "https://t.me/drunkctrl";
// ──────────────────────────────────────────────────────────────────────────────

const STRENGTHS: { i: string; title: string; body: string }[] = [
  {
    i: "01",
    title: "Без лимитов",
    body: "Сколько угодно аккаунтов, кабинетов и действий. Одна подписка — а не плата за каждый аккаунт, как у антидетект-браузеров.",
  },
  {
    i: "02",
    title: "Не облако — твой компьютер",
    body: "Аккаунты, пароли и cookies хранятся только у тебя на ПК и никогда не уходят на чужие серверы.",
  },
  {
    i: "03",
    title: "Встроенный антидетект-браузер",
    body: "Открой любой аккаунт в полноценном браузере в один клик — со своим отпечатком, прокси и cookies. Заходи руками, когда нужно: пройти проверку, посмотреть кабинет, докрутить вручную.",
  },
  {
    i: "04",
    title: "Массовые действия",
    body: "Проверить, принять политику, привязать карты, запустить рекламу — сразу на сотнях аккаунтов в один клик.",
  },
  {
    i: "05",
    title: "Всё в одном",
    body: "Проверка, антидетект-браузер, карты, запуск рекламы и статистика — в одном окне. Больше не жонглируешь десятком программ и таблиц.",
  },
  {
    i: "06",
    title: "Скорость",
    body: "Статус всех аккаунтов — за секунды, без открытия браузера на каждом. Время на рутину сокращается в разы.",
  },
];

const FEATURES: { title: string; body: string }[] = [
  {
    title: "Проверка аккаунтов",
    body: "Узнай за секунды по каждому: жив / в бане / на проверке, есть ли карта, принята ли рекламная политика.",
  },
  {
    title: "Встроенный антидетект-браузер",
    body: "Открой любой аккаунт в полноценном браузере в один клик — со своим отпечатком, прокси и cookies. Полный ручной контроль, когда нужно.",
  },
  {
    title: "Принятие политики",
    body: "Массово принять рекламную политику Facebook сразу на пачке аккаунтов — без ручных кликов.",
  },
  {
    title: "Карты и лимиты",
    body: "Привязать или удалить карты и выставить лимит открута сразу на много аккаунтов.",
  },
  {
    title: "Передача доступов",
    body: "Перекидывай рекламные кабинеты и страницы между своими аккаунтами и бизнес-менеджерами.",
  },
  {
    title: "Запуск рекламы",
    body: "Кампании, креативы, аудитории и бюджеты — сразу на много аккаунтов, по шаблонам.",
  },
  {
    title: "Статистика",
    body: "Вся аналитика по кампаниям в одном окне — со стартом, стопом и сменой бюджета прямо из панели.",
  },
  {
    title: "Сценарии",
    body: "Собери цепочку «проверить → принять политику → привязать карту → запустить» и прогони на всех аккаунтах одной кнопкой.",
  },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Это программа у меня или сайт в облаке?",
    a: "Программа устанавливается на твой компьютер (Windows). Все аккаунты, пароли и cookies хранятся локально и не уходят на чужие серверы.",
  },
  {
    q: "Можно ли зайти в аккаунт руками?",
    a: "Да. Встроенный антидетект-браузер открывает любой аккаунт в один клик — со своим отпечатком, прокси и cookies. Пройти проверку, посмотреть кабинет или докрутить что-то вручную можно в любой момент, когда автоматики мало.",
  },
  {
    q: "Есть лимит на количество аккаунтов?",
    a: "Нет лимитов. Веди хоть тысячи аккаунтов и кабинетов — цена подписки не меняется.",
  },
  {
    q: "Как устроена оплата и доступ?",
    a: "Одна подписка, всё включено. Сейчас открыт лист ожидания — оставь контакт, и мы напишем, когда откроем доступ.",
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
            <a href="#why" className="transition hover:text-white">преимущества</a>
            <a href="#features" className="transition hover:text-white">возможности</a>
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
                управление FB-аккаунтами · экосистема DrunkFB
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.2rem]">
                Сотни FB-аккаунтов под рукой.
                <br />
                <span className="text-gradient">Без лимитов, без облака.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-haze">
                DrunkCtrl проверяет, готовит и запускает рекламу на твоих аккаунтах —
                массово, в один клик. А встроенный антидетект-браузер открывает любой
                аккаунт руками в любой момент. Всё на твоём компьютере, без лимитов.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#waitlist"
                  className="rounded-xl bg-gradient-to-r from-indigo to-violet px-7 py-3.5 font-display font-bold shadow-[0_10px_40px_-8px_rgba(79,70,229,0.65)] transition active:scale-[0.98]"
                >
                  Получить доступ →
                </a>
                <a
                  href="#why"
                  className="rounded-xl border border-line px-7 py-3.5 font-display font-semibold text-haze transition hover:border-indigo hover:text-white"
                >
                  Почему DrunkCtrl
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <DashboardMock />
          </Reveal>
        </section>

        {/* STAT BAR */}
        <section className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {[
            ["∞", "аккаунтов и кабинетов"],
            ["1 подписка", "всё включено, без доплат"],
            ["0", "твоих данных в облаке"],
            ["секунды", "на проверку аккаунта"],
          ].map(([big, small]) => (
            <div key={small} className="bg-ink p-6 text-center">
              <div className="font-display text-3xl font-extrabold text-gradient">{big}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-haze">{small}</div>
            </div>
          ))}
        </section>

        {/* WHY — strengths */}
        <section id="why" className="scroll-mt-20 py-24">
          <Reveal>
            <p className="eyebrow">// почему DrunkCtrl</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Сильнее, дешевле и безопаснее, чем зоопарк инструментов.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {STRENGTHS.map((s, idx) => (
              <Reveal key={s.i} delay={(idx % 3) * 70}>
                <div className="group h-full bg-ink p-7 transition hover:bg-surface">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-xs text-indigo">{s.i}</span>
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
            <p className="eyebrow">// что умеет</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Вся работа с аккаунтами — в одной программе.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, idx) => (
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
            <p className="eyebrow text-center">// доступ</p>
            <h2 className="mt-3 text-center font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Одна подписка. Всё включено.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-center text-haze">
              Старт от 50$ в месяц. Без доплат за количество аккаунтов — веди хоть тысячи.
            </p>
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
                  <span className="mb-2 font-mono text-sm text-haze">от</span>
                  <span className="font-display text-6xl font-extrabold tracking-tight">{PRICE}</span>
                  <span className="mb-2 font-mono text-sm text-haze">/ мес</span>
                </div>
                <ul className="mt-7 space-y-3 text-sm">
                  {[
                    "Без лимитов: сколько угодно аккаунтов и кабинетов",
                    "Встроенный антидетект-браузер — открой любой аккаунт в 1 клик",
                    "Проверка, политика, карты, доступы, реклама, статистика",
                    "Массовые действия и сценарии-автоматизации",
                    "Работает на твоём компьютере — данные не в облаке",
                    "Обновления и новые функции включены",
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
              <p className="font-mono text-[11px] text-haze/60">управление FB-аккаунтами</p>
            </div>
          </div>
          <div className="flex items-center gap-6 font-mono text-[13px] text-haze">
            <a href={TELEGRAM} className="transition hover:text-white">telegram</a>
            <a href="#why" className="transition hover:text-white">преимущества</a>
            <a href="#waitlist" className="transition hover:text-white">доступ</a>
          </div>
          <p className="font-mono text-[11px] text-haze/50">© 2026 DrunkCtrl · drunkctrl.com</p>
        </div>
      </footer>
    </div>
  );
}

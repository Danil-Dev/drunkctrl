# DrunkCtrl — landing

Маркетинговый лендинг для **DrunkCtrl** (`drunkctrl.com`). Next.js 15 (App Router) +
Tailwind 3, деплой на Vercel. Тёмный «ops-terminal» дизайн, форма waitlist.

## Локально

```bash
npm install
npm run dev        # http://localhost:3000
```

## Языки (i18n)

ru / uk / en. Маршруты `/(ru|uk|en)`; `/` редиректит на язык браузера (`Accept-Language`),
выбор переключателя запоминается в cookie `NEXT_LOCALE`. Логика — `proxy.ts` (конвенция
Next 16, бывший middleware). Переключатель — `components/LangSwitch.tsx`.

- **Все тексты** — словари `lib/dict/{ru,uk,en}.ts`. `ru` — эталон формы (`Dict`), `uk`/`en`
  типизированы под него: пропущенный ключ в переводе = ошибка компиляции. Правишь строку —
  правь во всех трёх.
- Добавить язык: код в `lib/i18n.ts` (`locales`) + новый словарь.

## Что и где править

- **Цена / Telegram-ссылка** — константы `PRICE` и `TELEGRAM` вверху `app/[lang]/page.tsx`.
- **Тексты** — словари `lib/dict/*.ts` (см. «Языки» выше).
- **SEO / OpenGraph** — `generateMetadata` в `app/[lang]/layout.tsx` (берёт из словаря,
  + hreflang `alternates.languages`).
- **Бренд** — логотип-марка в `components/Mark.tsx`, favicon `app/icon.svg`, палитра в
  `tailwind.config.ts` (indigo `#4f46e5` → violet `#a855f7`, signal teal).

## Форма waitlist

Сабмит уходит в `POST /api/waitlist`. Поведение:

- Если заданы env-переменные **`TG_BOT_TOKEN`** + **`TG_CHAT_ID`** — каждая заявка падает
  тебе в Telegram мгновенно.
- Иначе заявка просто логируется в консоль сервера (ничего не теряется, но и не уведомляет).

Есть honeypot-поле против ботов. Позже легко заменить sink на БД/таблицу — трогать форму не надо.

`.env.local` (см. `.env.example`):

```
TG_BOT_TOKEN=123456:ABC...
TG_CHAT_ID=123456789
```

## Деплой на Vercel

1. Запушь репозиторий на GitHub (org `drunkctrl`).
2. Vercel → New Project → импортируй репо (Next.js определится автоматически).
3. Settings → Environment Variables: добавь `TG_BOT_TOKEN` и `TG_CHAT_ID` (если нужен форвард).
4. Domains: привяжи `drunkctrl.com` (+ `www`).

Прод-сборка локально для проверки: `npm run build && npm start`.

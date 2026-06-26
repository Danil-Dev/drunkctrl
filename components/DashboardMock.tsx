import { Mark } from "./Mark";

type Status = "ok" | "ban" | "check";

const ROWS: { name: string; uid: string; status: Status; card: boolean }[] = [
  { name: "Anna Köhler", uid: "100087…421", status: "ok", card: true },
  { name: "Marco Rossi", uid: "100092…118", status: "ok", card: true },
  { name: "Lena Brandt", uid: "100071…903", status: "check", card: false },
  { name: "Carlos Díaz", uid: "100065…277", status: "ok", card: true },
  { name: "Sofia Müller", uid: "100099…540", status: "ban", card: false },
  { name: "Tomáš Novák", uid: "100088…662", status: "ok", card: true },
];

const BADGE: Record<Status, { label: string; cls: string; dot: string }> = {
  ok: { label: "Активен", cls: "border-signal/30 bg-signal/10 text-signal", dot: "bg-signal" },
  check: { label: "Проверка", cls: "border-yellow-400/30 bg-yellow-400/10 text-yellow-300", dot: "bg-yellow-300" },
  ban: { label: "Бан", cls: "border-red-400/30 bg-red-400/10 text-red-400", dot: "bg-red-400" },
};

/** Stylized product UI — an accounts list with live-looking status badges. Non-technical
 *  "this is the panel you'll use" visual instead of a command line. */
export function DashboardMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/80 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px animate-scan bg-gradient-to-r from-transparent via-indigo to-transparent" />

      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <div className="ml-2 flex items-center gap-1.5">
          <Mark size={14} />
          <span className="font-mono text-xs text-haze/80">DrunkCtrl — Аккаунты</span>
        </div>
      </div>

      {/* toolbar */}
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
        <span className="font-mono text-xs text-haze">
          <span className="text-white">240</span> аккаунтов
        </span>
        <span className="rounded-lg bg-gradient-to-r from-indigo to-violet px-3 py-1.5 font-display text-xs font-bold text-white shadow-[0_6px_20px_-6px_rgba(79,70,229,0.7)]">
          Проверить все
        </span>
      </div>

      {/* summary chips */}
      <div className="flex flex-wrap gap-2 border-b border-line px-4 py-3">
        {[
          ["198 активных", "text-signal"],
          ["31 политика", "text-yellow-300"],
          ["11 бан", "text-red-400"],
        ].map(([t, c]) => (
          <span key={t} className={`rounded-md border border-line bg-ink px-2.5 py-1 font-mono text-[11px] ${c}`}>
            {t}
          </span>
        ))}
      </div>

      {/* rows */}
      <div className="divide-y divide-line/70">
        {ROWS.map((r) => {
          const b = BADGE[r.status];
          return (
            <div key={r.uid} className="flex items-center gap-3 px-4 py-3">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-indigo/30 to-violet/30 font-display text-xs font-bold text-white">
                {r.name[0]}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium text-white">{r.name}</div>
                <div className="font-mono text-[11px] text-haze/70">{r.uid}</div>
              </div>
              {r.card && (
                <span className="hidden font-mono text-[11px] text-haze sm:inline">💳 карта</span>
              )}
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] ${b.cls}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${b.dot}`} />
                {b.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

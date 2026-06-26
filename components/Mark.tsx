export function Mark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden>
      <defs>
        <linearGradient id="dcm" x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4f46e5" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#dcm)" />
      <rect x="0.5" y="0.5" width="63" height="63" rx="15.5" stroke="#fff" strokeOpacity="0.12" />
      <path d="M18 40 L32 23 L46 40" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-bold tracking-tight ${className}`}>
      Drunk<span className="text-gradient">Ctrl</span>
    </span>
  );
}

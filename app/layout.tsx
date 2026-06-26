import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const SITE = "https://drunkctrl.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "DrunkCtrl — командный центр для парка FB-аккаунтов",
  description:
    "Self-hosted панель для управления сотнями рекламных FB-аккаунтов: headless-чек за секунды, приём политики, привязка карт, передача доступов, залив трафика и статистика — с антидетектом из коробки.",
  keywords: ["DrunkCtrl", "FB аккаунты", "антидетект", "арбитраж трафика", "Facebook ads", "self-hosted"],
  openGraph: {
    title: "DrunkCtrl — командный центр для парка FB-аккаунтов",
    description:
      "Управляй сотнями FB-аккаунтов из одной консоли. Headless, антидетект, self-hosted.",
    url: SITE,
    siteName: "DrunkCtrl",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="grain font-sans">{children}</body>
    </html>
  );
}

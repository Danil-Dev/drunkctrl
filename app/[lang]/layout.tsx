import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { locales, getDictionary, isLocale } from "@/lib/i18n";

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

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const d = getDictionary(isLocale(lang) ? lang : "ru");
  return {
    metadataBase: new URL(SITE),
    title: d.meta.title,
    description: d.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { ru: "/ru", uk: "/uk", en: "/en", "x-default": "/uk" },
    },
    openGraph: {
      title: d.meta.title,
      description: d.meta.description,
      url: `${SITE}/${lang}`,
      siteName: "DrunkCtrl",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: d.meta.title,
      description: d.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang} className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="grain font-sans">{children}</body>
    </html>
  );
}

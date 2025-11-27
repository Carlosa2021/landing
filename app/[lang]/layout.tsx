// app/[lang]/layout.tsx

import '../globals.css';
import { Inter } from 'next/font/google';
import { Locale } from '../../lib/i18n/settings';
import { ReactNode } from 'react';
import { getDictionary } from '../../lib/i18n/getDictionary';

const inter = Inter({ subsets: ['latin'] });

const dir = (lang: string) =>
  ['ar', 'he', 'fa', 'ur'].includes(lang) ? 'rtl' : 'ltr';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return {
    title: t.meta?.title || 'ChainX Landing',
    description: t.meta?.description || 'Landing Web3 multilingüe con Next.js y i18n',
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return (
    <div
      data-lang={lang}
      dir={dir(lang)}
      className={`${inter.className} bg-gradient-to-b from-gray-900 to-black text-white min-h-screen`}
    >
      {children}
    </div>
  );
}

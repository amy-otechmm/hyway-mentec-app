/** @format */

import './globals.scss';
import type { Metadata, Viewport } from 'next';
import MainLayout from '@/layout/main-layout';
import { Suspense } from 'react';
import LenisProvider from '@/stores/lenis-provider';
import ScrollToTop from '@/components/ui-accessory/scroll-to-top';

export const metadata: Metadata = {
  title: 'パーフェクト工法のハイウェイメンテック',
  description:
    'ハイウェイメンテックは、一括吊上げ工法、ヤモリ工法、ハイグランド工法の足場技術「パーフェクト工法」を専門とする技術集団です。高速道路、橋梁工事の建設足場のことならお任せください。',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16' },
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        rel: 'apple-touch-icon',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja' className='light'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        />
        <link rel='shortcut icon' href='/shortcut-icon.png' />
        <link rel='icon' href='/icon.png' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link
          rel='apple-touch-icon-precomposed'
          href='/apple-touch-icon-precomposed.png'
        />
      </head>
      <body suppressHydrationWarning={true}>
        <LenisProvider>
          <ScrollToTop />
          <Suspense>
            <MainLayout>{children}</MainLayout>
          </Suspense>
        </LenisProvider>
      </body>
    </html>
  );
}

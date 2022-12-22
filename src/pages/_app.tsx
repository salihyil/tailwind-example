import '@/theme/globals.css';

import { gemunu, open } from '@/fonts';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${gemunu.variable} ${open.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

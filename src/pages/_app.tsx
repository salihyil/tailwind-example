import '@/theme/globals.css';

import { gemunu, open } from '@/fonts';
import type { AppProps } from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${gemunu.variable} ${open.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

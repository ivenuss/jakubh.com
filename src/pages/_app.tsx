import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import NProgress from 'nprogress';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Toaster } from '~/ui/Toaster';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeProvider attribute="class">
        <Toaster position="bottom-center" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

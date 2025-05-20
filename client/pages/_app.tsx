import { AppProps } from "next/dist/shared/lib/router/router";
import Head from 'next/head';
import "../styles/globals.css";

export default function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return <>
      <Head>
				<title>TOP-APP</title>
				<link key={1} rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
        <meta property="og:locale" content="ru_RU" />
      </Head>
      <Component {...pageProps} />
    </>;
}

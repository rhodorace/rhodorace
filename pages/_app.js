import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { appWithTranslation } from 'next-i18next'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import Footer from '@/components/footer';
const App = ({ Component, pageProps }) => (
    <>
      <Head>
        <title>RhodoRace Momchilgrad</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <Footer/>
    </>
)

export default appWithTranslation(App)
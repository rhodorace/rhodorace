import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { appWithTranslation } from 'next-i18next'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import Script from 'next/script'
import Footer from '@/components/footer';
const App = ({ Component, pageProps }) => (
    <>
      <Head>
        <title>RhodoRock Momchilgrad</title>
      </Head>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-PGQCTN7M7Y"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-PGQCTN7M7Y');
            `}
        </Script>
        <Script id="facebook-pixel" strategy="afterInteractive">
            {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '808077255907543');
                fbq('track', 'PageView');
            `}
        </Script>
      <Component {...pageProps} />
      <Analytics />
      <Footer/>
    </>
)

export default appWithTranslation(App)
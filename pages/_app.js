import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { appWithTranslation } from 'next-i18next'
import { Analytics } from '@vercel/analytics/react';

const App = ({ Component, pageProps }) => (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
)

export default appWithTranslation(App)
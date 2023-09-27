import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }) => (
    <Component {...pageProps} />
)

export default appWithTranslation(App)
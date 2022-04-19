import {useSelector} from 'react-redux'
import {IntlProvider} from "react-intl";
import {MESSAGES} from "../intl/messages";
import {wrapper} from "../store/reducer";
import '../styles/globals.css'
import '/styles/scss/index.scss'

function MyApp({ Component, pageProps }) {
    const locale = useSelector(state => state.main?.locale);
    return (

      <IntlProvider locale={locale} messages={MESSAGES[locale]}>
        <Component {...pageProps} />
      </IntlProvider>
      )

}

export default wrapper.withRedux(MyApp);

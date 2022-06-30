import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import ThemeContextWrapper from '../components/Themes/ThemeContextWrapper'

config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextWrapper>
      <Component {...pageProps} />
      </ThemeContextWrapper>
  )
  
}

export default MyApp

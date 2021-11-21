import Header from '../components/Header'
import { ThemeProvider } from '@emotion/react'
import GlobalStyles from '../components/globalStyles/globalStyles'
import theme from '../theme/theme'
import 'tailwindcss/tailwind.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header isDark="theme" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

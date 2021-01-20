import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyles } from '@portfolio/theme'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp

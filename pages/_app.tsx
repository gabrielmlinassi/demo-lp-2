import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from 'config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header title={pageProps.title} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

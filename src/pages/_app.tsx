import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  usePageViews();

  return (
      <Layout>
        <GoogleAnalytics />
        <Component {...pageProps} />
      </Layout>
    )
}

export default MyApp

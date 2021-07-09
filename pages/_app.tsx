import { SSRProvider, OverlayProvider } from 'react-aria'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import '@styles/global.css'
import '@styles/nprogress.css'
import '@styles/chrome-bug.css'
import NProgress from '@components/nprogress'
import ResizeHandler from '@components/resize-handler'
import * as ga from '@lib/ga'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <SSRProvider>
      <OverlayProvider>
        <Component {...pageProps} />
        <ResizeHandler />
        <NProgress />
      </OverlayProvider>
    </SSRProvider>
  )
}

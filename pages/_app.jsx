import Head from 'next/head'

import { CartContextProvider } from '../components/CartContext'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <>
      <Head>
        <title>TruSports</title>
        <link rel="shortcut icon" type="image/jpg" href="/TruSports.jpg" />
      </Head>
      <SessionProvider session={session}>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </SessionProvider>
    </>
  )
}
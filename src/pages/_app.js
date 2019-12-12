import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from '@kiwicom/orbit-components'
import { getTokens } from '@kiwicom/orbit-components'
import enUs from '@kiwicom/orbit-components/lib/data/dictionary/en-US.json'
import Layout from '../components/Layout'

const tokens = getTokens()

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <link
            href="https://unpkg.com/normalize.css@8.0.1/normalize.css"
            rel="stylesheet"
            key="normalize.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700"
            rel="stylesheet"
            key="orbit"
          />
          <link
            rel="preload"
            href="https://res.cloudinary.com/silvenon/image/upload/v1/demon.jpg"
            as="image"
            key="preload-image"
          />
        </Head>
        <ThemeProvider theme={{ orbit: tokens }} dictionary={enUs}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    )
  }
}

export default MyApp

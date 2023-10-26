// pages/_app.js
import { ChakraProvider, Spinner, Box, CSSReset } from '@chakra-ui/react'
import theme from '../theme/theme'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp

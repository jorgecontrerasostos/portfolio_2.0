import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container, Box } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const Layout = ({ children }) => {
  return (
    <Container maxWidth='1440px' mt={12}>
      <Navbar />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout

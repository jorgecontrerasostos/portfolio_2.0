import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container } from '@chakra-ui/react'

const Layout = ({ children }) => {
  return (
    <Container maxW='1280px'>
      <Navbar />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout

import React from 'react'
import AnimatedSection from './AnimatedSection'
import { Box, Text, Stack, Icon, Container, Divider } from '@chakra-ui/react'
import { FaLinkedin } from 'react-icons/fa'
import { SiBuymeacoffee } from 'react-icons/si'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from '@chakra-ui/next-js'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <AnimatedSection delay={0.1}>
      <Box>
        <Divider mt={6} borderColor='white' />
        <Container
          as={Stack}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
          maxW='container.lg'
        >
          <Text>© 2023 Jorge Contreras. Made with &#x2764;</Text>
          <Stack direction={'row'} spacing={6}>
            <Link
              href='https://www.linkedin.com/in/jorge-contreras-ostos/'
              target='_blank'
            >
              <motion.div whileHover={{ scale: 1.2 }}>
                <Icon as={FaLinkedin} boxSize={7} color='#0072b1' />
              </motion.div>
            </Link>
            <Link href='https://twitter.com/jorgecontreras' target='_blank'>
              <motion.div whileHover={{ scale: 1.2 }}>
                <Icon as={FaXTwitter} boxSize={7} />
              </motion.div>
            </Link>
            <Link
              href='https://www.buymeacoffee.com/jorgecontreras'
              target='_blank'
            >
              <motion.div whileHover={{ scale: 1.2 }}>
                <Icon as={SiBuymeacoffee} boxSize={7} color='#f9dd4a' />
              </motion.div>
            </Link>
          </Stack>
        </Container>
      </Box>
    </AnimatedSection>
  )
}

export default Footer

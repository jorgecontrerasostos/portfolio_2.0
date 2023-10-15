import React from 'react'
import { Text, Heading, VStack, Container } from '@chakra-ui/react'
import AnimatedSection from './AnimatedSection'
import Photo from './Photo'

const Hero = () => {
  return (
    <AnimatedSection delay={0.3}>
      <VStack
        p={10}
        textAlign='center'
        w='100%'
        whiteSpace={['normal', 'normal', 'nowrap']}
      >
        <Heading
          fontSize={['5xl', '5xl', '6xl', '7xl', '7xl', '7xl']}
          fontWeight='extrabold'
          mb={[-3, -3, -4, -4, -6, -6]}
        >
          Hi I&apos;m Jorge
        </Heading>
        <Heading
          fontSize={['5xl', '5xl', '6xl', '7xl', '7xl', '7xl']}
          fontWeight='extrabold'
          bgGradient='linear(to-r,#0C3ACF, #13B0CF)'
          bgClip='text'
          mb={-4}
        >
          &lt;Junior Web Developer /&gt;
        </Heading>
        <Text fontSize='3xl' fontWeight='extrabold'>
          {' '}
          from &#x1F1F2;&#x1F1FD;{' '}
        </Text>
        <Photo />
        <Text whiteSpace={['normal', 'normal', 'normal']} mt={6} fontSize='xl'>
          Web developer, team player, and a perpetual learner. I thrive on
          creating innovative web solutions and am committed to exceeding
          expectations.
        </Text>
      </VStack>
    </AnimatedSection>
  )
}

export default Hero

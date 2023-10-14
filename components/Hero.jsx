import React from 'react'
import { Text, Heading, VStack } from '@chakra-ui/react'
import AnimatedSection from './AnimatedSection'

const Hero = () => {
  return (
    <AnimatedSection delay={0.1}>
      <VStack p={10}>
        <Heading fontSize='7xl' fontWeight='extrabold' mb={-6}>
          Hi I&apos;m Jorge
        </Heading>
        <Heading
          fontSize='7xl'
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
      </VStack>
    </AnimatedSection>
  )
}

export default Hero

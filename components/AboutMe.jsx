import React from 'react'
import AnimatedSection from './AnimatedSection'
import { Heading, VStack, Flex, Box, Text } from '@chakra-ui/react'

const AboutMe = () => {
  return (
    <AnimatedSection delay={0.4}>
      <VStack p={10} textAlign='center'>
        <Heading
          bgGradient='linear(to-r, #C6CF46, #C463CF)'
          bgClip='text'
          fontSize='5xl'
          fontWeight='extrabold'
        >
          About Me
        </Heading>
        <Flex
          justify='center'
          align='center'
          direction={['column', 'column', 'row', 'row']}
          p={4}
        >
          <Box w='100%' h='100%' textAlign='left'>
            <Heading textAlign='center'>A Bit About Myself</Heading>
            <br />
            <Text>
              I graduated from Tecnológico Nacional de México Campus Saltillo in
              2021 with a B.S. in Computer Systems Engineering and have been
              working in the field ever since.{' '}
            </Text>
            <br />
            <Text>
              I strongly believe that if you keep on learning and working every
              day with discipline you can achieve everything you want.{' '}
            </Text>
            <br />
            <Text>
              As Doc Brown once said: &quot;If you put your mind into it, you
              can accomplish anything.&quot;
            </Text>
          </Box>
          <Box bg='blue' w='100%' h='100%'>
            <Heading textAlign='center'>My Hobbies</Heading>
            <Text></Text>
          </Box>
        </Flex>
      </VStack>
    </AnimatedSection>
  )
}

export default AboutMe

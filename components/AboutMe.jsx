import React from 'react'
import AnimatedSection from './AnimatedSection'
import { Heading, VStack, Flex, Box, Text, Divider } from '@chakra-ui/react'

const hobbies = [
  'Baseball',
  'Playing ukulele',
  'Playing videogames',
  'Coding',
  'Going out with friends'
]

const AboutMe = () => {
  return (
    <AnimatedSection delay={0.4}>
      <VStack p={10} textAlign='center'>
        <Heading
          bgClip='text'
          fontSize='5xl'
          fontWeight='bold'
          bgGradient='linear(to-r, #C6CF46, #C463CF)'
        >
          About Me
        </Heading>
        <Divider
          orientation='horizontal'
          width='70px'
          borderWidth='4px'
          borderRadius='md'
          color='white'
        />
        <Flex
          justify='center'
          align='center'
          direction={['column', 'column', 'row', 'row']}
          p={4}
        >
          <Box w='100%' h='100%' textAlign='left' p={4}>
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
          <Box w='100%' h='100%'>
            <Heading textAlign='center'>My Hobbies</Heading>
            <Flex flexWrap='wrap' gap='4' mt={6}>
              {hobbies.map((hobby, index) => (
                <Box
                  key={index}
                  borderWidth='1px'
                  rounded='lg'
                  bg='white'
                  width={['100%', '48%', '30%']}
                  display='flex' // Enable flex display on the Box
                  justifyContent='center' // Vertically center the text within the box // Adjust the width for different screen sizes
                >
                  <Text
                    fontSize='md'
                    fontWeight='bold'
                    align='center'
                    textAlign='center'
                    color='black'
                  >
                    {hobby}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </VStack>
    </AnimatedSection>
  )
}

export default AboutMe

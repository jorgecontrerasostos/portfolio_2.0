import { Heading, VStack, Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { DiJavascript1, DiHtml5, DiCss3 } from 'react-icons/di'
import { SiChakraui, SiNextdotjs } from 'react-icons/si'
import { FaReact, FaNodeJs } from 'react-icons/fa'

const Technologies = () => {
  return (
    <AnimatedSection delay={0.4}>
      <VStack p={10} textAlign='center'>
        <Heading
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='5xl'
          fontWeight='extrabold'
        >
          My Toolbox
        </Heading>
        <Flex p={6} gap={12}>
          <Icon as={DiHtml5} boxSize={16} color='#e34c26' />
          <Icon as={DiCss3} boxSize={16} color='#264de4' />
          <Icon as={DiJavascript1} boxSize={16} color='#f7df1e' />
          <Icon as={FaReact} boxSize={16} color='#81d8f7' />
          <Icon as={SiNextdotjs} boxSize={16} />
          <Icon as={FaNodeJs} boxSize={16} color='#3c873a' />
          <Icon as={SiChakraui} boxSize={16} color='#7ec7c9' />
        </Flex>
      </VStack>
    </AnimatedSection>
  )
}

export default Technologies

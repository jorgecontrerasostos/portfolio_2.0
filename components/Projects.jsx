import React from 'react'
import {
  Heading,
  Flex,
  Link,
  Image,
  Text,
  Stack,
  Icon,
  Divider
} from '@chakra-ui/react'
import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'

const Projects = () => {
  return (
    <AnimatedSection delay={0.4}>
      <Heading
        bgClip='text'
        fontSize='5xl'
        fontWeight='bold'
        bgGradient='linear(to-l, #32CF80, #276ACF)'
        textAlign='center'
        p={10}
      >
        Projects
      </Heading>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <Stack direction={{ base: 'column', md: 'row' }}>
              <Flex flex={1}>
                <Link href={project.link} target='_blank'>
                  <motion.div whileHover={{ scale: 1.03 }}>
                    <Image
                      alt='NASA Photo of the Day Project'
                      objectFit={'cover'}
                      src={project.image}
                      borderRadius='lg'
                    />
                  </motion.div>
                </Link>
              </Flex>
              <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                  <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    <Text>NASA Photo of the Day</Text>
                  </Heading>
                  <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.400'}>
                    {project.description}
                  </Text>
                  <Stack
                    direction={{ base: 'row', md: 'row' }}
                    spacing={4}
                    justifyContent={{ base: 'center', md: 'left' }}
                  >
                    <Link href={project.github} target='_blank'>
                      <motion.div whileHover={{ scale: 1.2 }}>
                        <Icon as={BsGithub} boxSize={10} />
                      </motion.div>
                    </Link>
                    <Link href={project.link} target='_blank'>
                      <motion.div whileHover={{ scale: 1.2 }}>
                        <Icon as={BsArrowUpRightSquare} boxSize={10} />
                      </motion.div>
                    </Link>
                  </Stack>
                </Stack>
              </Flex>
            </Stack>
            <Divider
              borderColor='gray.400'
              m='auto'
              width='120px'
              borderRadius='md'
              borderWidth='2px'
              my={{ base: 0, md: 10 }}
            />
          </div>
        )
      })}
    </AnimatedSection>
  )
}

export default Projects

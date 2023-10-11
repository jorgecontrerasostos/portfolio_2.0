import React from 'react'
import { FaGithub, FaTerminal } from 'react-icons/fa'
import { Icon, IconButton } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { Box, Flex, ButtonGroup, Text, HStack, VStack } from '@chakra-ui/react'
import SwitchColorMode from './SwitchColorMode'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const Navbar = () => {
  const [display, setDisplay] = useState('none')
  return (
    <Box w='100%'>
      <Flex
        as='nav'
        minWidth='max-content'
        alignItems='center'
        gap='2'
        justifyContent='space-between'
      >
        <Box p='2' display={['flex', 'flex', 'flex', 'flex', 'flex', 'flex']}>
          <Link href='/'>
            <Icon as={FaTerminal} boxSize={8} />
          </Link>
        </Box>
        <HStack
          justifyContent='space-between'
          gap={16}
          display={['none', 'none', 'flex', 'flex', 'flex', 'flex']}
        >
          <Text>about</Text>
          <Link
            href='/projects'
            textDecor='none'
            _hover={{ textDecoration: 'none' }}
            as='a'
          >
            projects
          </Link>
          <Text>contact</Text>
        </HStack>
        <HStack gap={10}>
          {' '}
          <ButtonGroup
            gap='4'
            display={['none', 'none', 'flex', 'flex', 'flex', 'flex']}
          >
            <Link href='https://github.com/jorgecontrerasostos' target='_blank'>
              <Icon as={FaGithub} boxSize={8} />
            </Link>
          </ButtonGroup>
          <HamburgerIcon
            boxSize={8}
            cursor='pointer'
            display={['flex', 'flex', 'none', 'none']}
            aria-label='Open Menu'
            onClick={() => setDisplay('flex')}
          />
          <SwitchColorMode />
        </HStack>
      </Flex>

      <Flex
        w='100vw'
        bgColor='gray.50'
        zIndex={20}
        height='100vh'
        pos='fixed'
        top='0'
        left='0'
        overflow='auto'
        flexDir='column'
        display={display}
      >
        <Flex justify='flex-end'>
          <IconButton
            mt={2}
            mr={2}
            size='lg'
            icon={<CloseIcon />}
            aria-label='Close Menu'
            onClick={() => setDisplay('none')}
          />
        </Flex>
        <Flex flexDir='column' align='center'>
          <VStack justifyContent='space-between' gap={16}>
            <Text>about</Text>
            <Link
              href='/projects'
              textDecor='none'
              _hover={{ textDecoration: 'none' }}
              as='a'
            >
              projects
            </Link>
            <Text>contact</Text>
          </VStack>
          <VStack gap={10}>
            {' '}
            <ButtonGroup gap='4' mt={10}>
              <Link
                href='https://github.com/jorgecontrerasostos'
                target='_blank'
              >
                <Icon as={FaGithub} boxSize={8} />
              </Link>
            </ButtonGroup>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar

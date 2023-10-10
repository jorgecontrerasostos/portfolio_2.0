import React from 'react'
import {
  Box,
  Flex,
  Spacer,
  Heading,
  ButtonGroup,
  Button
} from '@chakra-ui/react'
import ColorModeToggle from './ColorModeToggle'

const Navbar = () => {
  return (
    <Box w='100%'>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'>
          <Heading size='md'>Chakra App</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button colorScheme='teal'>Sign Up</Button>
          <ColorModeToggle />
        </ButtonGroup>
      </Flex>
    </Box>
  )
}

export default Navbar

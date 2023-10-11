import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Button, useColorMode, Icon } from '@chakra-ui/react'

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? (
        <Icon
          as={FaMoon}
          background='transparent'
          _hover={{ bg: 'transparent' }}
        />
      ) : (
        <Icon
          as={FaSun}
          background='transparent'
          _hover={{ bg: 'transparent' }}
        />
      )}
    </Button>
  )
}
export default ColorModeToggle

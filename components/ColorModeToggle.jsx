import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Button, useColorMode } from '@chakra-ui/react'

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? <FaMoon /> : <FaSun />}
    </Button>
  )
}
export default ColorModeToggle

import React from 'react'
import { useColorMode, Switch } from '@chakra-ui/react'

const SwitchColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Switch
      isChecked={colorMode === 'dark'}
      onChange={toggleColorMode}
      colorScheme='customSwitchColors'
    />
  )
}

export default SwitchColorMode

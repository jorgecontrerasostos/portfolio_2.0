// theme.js
import { extendTheme } from '@chakra-ui/react'
import { mode, createBreakPoints } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  colors: {
    light: {
      background: 'white' // Light mode background color
    },
    dark: {
      background: 'black', // Dark mode background color
      overriddenBackground: 'black' // Override the dark mode background color
    },
    customSwitchColors: {
      100: '#0C3ACF',
      200: '#0C3ACF'
    }
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('light.background', 'dark.overriddenBackground')(props), // Use overridden background color for dark mode
        color: mode('black', 'white')(props)
      }
    })
  }
})

export default theme

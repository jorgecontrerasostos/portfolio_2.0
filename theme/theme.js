import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark', // Choose the initial color mode
    useSystemColorMode: false // Use the system color mode if true, or let users choose manually
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Inter', sans-serif"
  },
  colors: {
    light: {},
    dark: {}
  }
})
export default theme

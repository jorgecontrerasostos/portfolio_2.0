import { mode } from '@chakra-ui/theme-tools'
const styles = {
  global: (props) => ({
    body: {
      bg: mode('light.background', 'dark.background')(props), // Apply background color based on color mode
      color: mode('black', 'white')(props)
    }
  })
}

export default styles

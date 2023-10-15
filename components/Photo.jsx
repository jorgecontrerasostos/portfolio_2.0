import React from 'react'
import { Image, Box } from '@chakra-ui/react'

const Photo = () => {
  let PROFILE_PICTURE = '/images/profile_squared.jpg'
  return (
    <Box>
      <Image
        src={PROFILE_PICTURE}
        alt='Jorge Contreras Portrait'
        boxSize={['200px', '300px', '300px']}
        borderRadius='full'
      />
    </Box>
  )
}

export default Photo

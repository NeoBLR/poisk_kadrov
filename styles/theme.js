import { extendTheme } from '@chakra-ui/react'

export const DefaultTheme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  colors: {
    gray: {
      10: '#1a202c8c',
      // ...
      900: '#1719238c',
    },
    // ...
  },
})

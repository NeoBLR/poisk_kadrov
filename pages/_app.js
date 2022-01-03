import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.scss'

import { DefaultTheme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={DefaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

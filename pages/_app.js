import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.scss'

import { useRef, useEffect } from 'react'

import { DefaultTheme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  const scrollRef = useRef()

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const scroll = import('locomotive-scroll').then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: document.querySelector('.app'),
        smooth: true,
        mobile: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      })
    })

    return () => scroll.destroy()
  }, [])
  return (
    <div ref={scrollRef}>
      <ChakraProvider theme={DefaultTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  )
}

export default MyApp

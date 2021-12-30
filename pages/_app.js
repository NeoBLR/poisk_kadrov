import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.scss'

import { useRef, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const scrollRef = useRef()

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const scroll = import('locomotive-scroll').then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: scrollRef.current,
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
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  )
}

export default MyApp

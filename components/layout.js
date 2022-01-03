import { Box, Flex } from '@chakra-ui/react'
import NavBar from './NavBar'
import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Foter from './foter'

export default function Layout({ children }) {
  const containerRef = useRef(null)
  return (
    <>
      <NavBar />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        containerRef={containerRef}
      >
        <Box data-scroll-container ref={containerRef} className='app'>
          {children}
          <Foter />
        </Box>
      </LocomotiveScrollProvider>
    </>
  )
}

import { Box, Flex } from '@chakra-ui/react'
import NavBar from './NavBar'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <Box className='app'>{children}</Box>
    </>
  )
}

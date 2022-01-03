import { Box, Flex } from '@chakra-ui/react'
import NavBar from '../components/NavBar'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <Box className='app'>{children}</Box>
    </>
  )
}

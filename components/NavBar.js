import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import {
  Flex,
  Heading,
  useColorMode,
  Center,
  Box,
  Stack,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react'
import ColorModeButton from './ColorModeButton'
// import HamburgerButton from './HamburgerButton'

export default function NavBar() {
  const { colorMode } = useColorMode()
  const { isOpen, onToggle } = useDisclosure()

  let HamburgerButton = () => (
    <IconButton
      onClick={onToggle}
      icon={isOpen ? <CloseIcon h='3' w='3' /> : <HamburgerIcon h='5' w='5' />}
    />
  )

  let ItemMenu = () => (
    <>
      <Heading w='100%' textAlign='center'>
        Item Menu 1
      </Heading>
      <Heading w='100%' textAlign='center'>
        Item Menu 1
      </Heading>
    </>
  )

  return (
    <Box
      position='fixed'
      w='100%'
      data-scroll
      data-scroll-sticky
      data-scroll-target='body'
      bg={colorMode === 'light' ? 'gray.200' : 'gray.400'}
    >
      <Flex>
        <Heading m='.5rem' w='10rem'>
          NavBar
        </Heading>

        <Box m='.5rem' display={['none', 'none', 'flex']} flex='1'>
          <ItemMenu />
        </Box>

        <Box display={['flex', 'flex', 'none']} flex='1'></Box>

        <Center
          display={['flex', 'flex', 'none']}
          justifyContent='flex-end'
          m='.5rem'
        >
          <HamburgerButton />
        </Center>

        <Center justifyContent='flex-end' m='.5rem'>
          <ColorModeButton />
        </Center>
      </Flex>
      {isOpen && (
        <Stack display={['flex', 'flex', 'none']}>
          <ItemMenu />
        </Stack>
      )}
    </Box>
  )
}

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
import { AnimatePresence, motion } from 'framer-motion'
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
      <Heading fontWeight='light' w='100%' textAlign='center'>
        Item Menu 1
      </Heading>
      <Heading fontWeight='light' w='100%' textAlign='center'>
        Item Menu 1
      </Heading>
    </>
  )

  return (
    <Box
      backdropFilter='blur(1rem);'
      position='fixed'
      w='100%'
      data-scroll
      data-scroll-sticky
      data-scroll-target='body'
      zIndex='1'
    >
      <Flex bg={colorMode === 'light' ? 'gray.10' : 'gray.900'}>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
          >
            <Stack
              zIndex='-1'
              bg={colorMode === 'light' ? 'gray.10' : 'gray.900'}
              display={['flex', 'flex', 'none']}
            >
              <ItemMenu />
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}

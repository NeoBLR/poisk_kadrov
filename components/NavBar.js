import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  SettingsIcon,
  AtSignIcon,
} from '@chakra-ui/icons'
import {
  Flex,
  Heading,
  useColorMode,
  Center,
  Box,
  Stack,
  useDisclosure,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  VStack,
  HStack,
  Avatar,
  Text,
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi'

import ChakraNextLink from './ChakraNextLink'
import ChakraNextLinkButton from './ChakraNextLinkButton'

// import Link from 'next/link'
import ColorModeButton from './ColorModeButton'
// import HamburgerButton from './HamburgerButton'

import { BsFillGearFill, BsDoorClosedFill } from 'react-icons/bs'

import Hamburger01 from '../components/Hamburger01'

export default function NavBar() {
  const { colorMode } = useColorMode()
  const { isOpen, onToggle } = useDisclosure()
  const [Auth, SetAuth] = useState(false)

  let HamburgerButton = () => <Hamburger01 isOpen={isOpen} />

  let ItemMenu = () => (
    <>
      <ChakraNextLink w='100%' href='/news' variant='link'>
        <Heading fontWeight='light' textAlign='center'>
          News
        </Heading>
      </ChakraNextLink>
      <Heading fontWeight='light' w='100%' textAlign='center'>
        Item Menu 1
      </Heading>
    </>
  )

  return (
    <Box
      backdropFilter='saturate(180%) blur(1rem)'
      position='fixed'
      w='100%'
      data-scroll
      data-scroll-sticky
      data-scroll-target='body'
      zIndex='1'
    >
      <Flex bg={colorMode === 'light' ? '#ffffffcc' : '#1a202ccc'}>
        <ChakraNextLink
          m='auto auto auto auto'
          w='10rem'
          href='/'
          variant='link'
        >
          <Heading ml='1rem' my={1}>
            NavBar
          </Heading>
        </ChakraNextLink>

        <Box m='auto' display={['none', 'none', 'flex']} flex='1'>
          <ItemMenu />
        </Box>

        <Box display={['flex', 'flex', 'none']} flex='1'></Box>

        <Center
          display={['flex', 'flex', 'none']}
          justifyContent='flex-end'
          m='auto'
        >
          <HamburgerButton />
        </Center>

        {Auth ? (
          <Center m='auto'>
            <Menu>
              <MenuButton
                pr={3}
                transition='all 0.3s'
                _focus={{ boxShadow: 'none' }}
              >
                <HStack>
                  <Avatar
                    size={'sm'}
                    src={
                      'https://mangalib.me/uploads/users/287021/jAzvAgwFed0u.gif'
                    }
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems='flex-start'
                    spacing='1px'
                    ml='2'
                  >
                    <Text fontSize='sm'>Henry Markov</Text>
                    <Text fontSize='xs' color='gray.600'>
                      Admin
                    </Text>
                  </VStack>
                  <Box display={{ base: 'none', md: 'flex' }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>

              <MenuList>
                <MenuItem>Профиль</MenuItem>
                <MenuItem>Настройки</MenuItem>

                <MenuItem>Выйти</MenuItem>
                <MenuDivider />
                <Stack>
                  <ColorModeButton />
                </Stack>
              </MenuList>
            </Menu>
          </Center>
        ) : (
          <>
            <Center justifyContent='flex-end' m='auto' mr={3}>
              <ColorModeButton />
            </Center>
            <ChakraNextLinkButton
              colorScheme='teal'
              m='auto'
              mr={3}
              href='/login'
            >
              Войдите
            </ChakraNextLinkButton>
          </>
        )}
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
              pb='1rem'
              bg={colorMode === 'light' ? '#ffffffcc' : '#1a202ccc'}
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

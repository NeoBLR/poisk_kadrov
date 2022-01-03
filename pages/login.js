import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { motion } from 'framer-motion'

import Layout from '../components/layout'

import Links from 'next/link'

export default function Log() {
  return (
    <Layout>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Войди в твой аккаунт</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              чтобы насладиться всеми классными{' '}
              <Link color={'teal.400'}>функциями</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id='email'>
                <FormLabel>Емайл адрес</FormLabel>
                <Input type='email' />
              </FormControl>
              <FormControl id='password'>
                <FormLabel>Пароль</FormLabel>
                <Input type='password' />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox colorScheme={'teal'}>Запомнить меня</Checkbox>
                  <Link color={'teal.400'}>Востановить пароль?</Link>
                </Stack>

                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 1.2 }}
                >
                  <Button
                    bg={'teal.400'}
                    color={'white'}
                    width='100%'
                    _hover={{
                      bg: 'teal.500',
                    }}
                  >
                    Войти
                  </Button>
                </motion.div>
              </Stack>
            </Stack>
          </Box>
          <Stack align={'center'}>
            <Text fontSize={'lg'} color={'gray.600'}>
              Нету Аккаунта?{' '}
              <Link color={'teal.400'}>
                <Links href={'/reg '}>Зарегистрируйтесь</Links>
              </Link>{' '}
              ✌️
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Layout>
  )
}

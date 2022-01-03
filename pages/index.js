import { Center, Heading, Stack, useColorMode } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Path from '../components/Path'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const { colorMode } = useColorMode()

  return (
    <Layout>
      <Head>
        <title>Главная</title>
      </Head>

      <Center overflow='hidden' h='100vh' textAlign='center'>
        <Stack>
          <Heading
            color={colorMode === 'light' ? 'white ' : 'gray.800'}
            fontWeight='black'
            fontSize='9xl'
            textShadow={
              colorMode === 'light'
                ? '#1a202c8c 1px 1px 0, #1a202c8c -1px -1px 0,  #1a202c8c -1px 1px 0, #1a202c8c 1px -1px 0; '
                : 'white 1px 1px 0, white -1px -1px 0,  white -1px 1px 0, white 1px -1px 0; '
            }
            textTransform='uppercase'
            data-scroll
            data-scroll-speed='-5'
          >
            Welcome to Index Page
          </Heading>

          <Heading zIndex='0' fontWeight='black'>
            Content
          </Heading>
        </Stack>
      </Center>

      <Center h='100vh'>
        <Heading fontWeight='black'>Content</Heading>
      </Center>

      <Center h='100vh'>
        <Heading>Content</Heading>
      </Center>
    </Layout>
  )
}

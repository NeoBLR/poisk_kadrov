import { Center, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import layout from '../components/layout'
import NavBar from '../components/NavBar'
import Path from '../components/Path'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <layout>
      <Head>
        <title>Главная</title>
      </Head>

      <NavBar />

      <Center h='100vh'>
        <Heading>
          <Heading>Content</Heading>
        </Heading>
      </Center>

      <Center h='100vh'>
        <Heading fontWeight='black'>Content</Heading>
      </Center>

      <Center h='100vh'>
        <Heading>Content</Heading>
      </Center>
    </layout>
  )
}

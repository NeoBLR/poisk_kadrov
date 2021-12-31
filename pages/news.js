import { Center, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import layout from '../components/layout'
import NavBar from '../components/NavBar'
import Path from '../components/path'
import styles from '../styles/Home.module.scss'

export default function News() {
  return (
    <layout>
      <NavBar />

      <Center h='100vh'>
        <Heading>
          <Path />
        </Heading>
      </Center>

      <Center h='100vh'>
        <Heading>Content</Heading>
      </Center>

      <Center h='100vh'>
        <Heading>Content</Heading>
      </Center>
    </layout>
  )
}

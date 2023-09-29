import Head from 'next/head'
import { Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Text fontFamily='body'>Hello</Text>
    </>
  )
}

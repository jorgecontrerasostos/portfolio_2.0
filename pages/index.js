import Head from 'next/head'
import Hero from '../components/Hero'
import Technologies from '../components/Technologies'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Hero />
      <Technologies />
    </>
  )
}

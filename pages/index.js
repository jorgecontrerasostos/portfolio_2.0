import Head from 'next/head'
import Hero from '../components/Hero'
import Technologies from '../components/Technologies'
import AboutMe from '../components/AboutMe'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Hero />
      <AboutMe />
      <Technologies />
    </>
  )
}

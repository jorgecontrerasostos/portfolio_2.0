import Head from 'next/head'
import Hero from '../components/Hero'
import Technologies from '../components/Technologies'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
    </>
  )
}

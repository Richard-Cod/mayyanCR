import Head from 'next/head'
import BlockItem from '../components/BlockItem'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import PartnairesSection from '../components/PartnairesSection'
import RayImage from '../components/RayImage'
import SocialsSection from '../components/SocialsSection'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar />

      <HeroSection />

      <PartnairesSection />

      {[1,2,3].map((value , index) => <BlockItem />)}

      <RayImage />

      {[1,2,3,4].map((value , index) => <BlockItem />)}

      <RayImage />


      {[1,2,3,4].map((value , index) => <BlockItem />)}

      <SocialsSection />

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          Richard Bathiebo
        </a>
      </footer>
    </div>
  )
}

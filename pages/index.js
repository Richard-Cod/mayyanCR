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
        <title>Create  App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar />

      <HeroSection />

      <PartnairesSection />

      {[1,2,3].map((value , index) => <BlockItem isOdd={index % 2 == 0} />)}

      <RayImage texte="Blockchain gives Africa economic identity" img='/ray2.jpg' />



      {[1,2,3].map((value , index) => <BlockItem isOdd={index % 2 == 0} />)}


      <RayImage texte="Blockchain is Africa's future" img='/ray3.jpg' />


      {[1,2,3].map((value , index) => <BlockItem isOdd={index % 2 == 0} />)}


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

"use client"
import Image from 'next/image'
import TabBar from './components/tabBar'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-screen bg-no-repeat"
      style={{
        backgroundImage: "url(/images/image.png)", height: "900px", backgroundSize: "cover"
      }}>
      <article className=''>
        <section className='flex flex-col justify-center items-center'>
          <h1 className="font-main text-4xl font-light text-darkPrimary">Montreal</h1>
          <p className="font-main text-6xl font-extralight text-darkPrimary">0°C</p>
          <p className="font-main text-2xl text-darkPrimary">Vejret</p>
          <p className="font-main text-2xl text-darkPrimary">H: 32°C L:-20°C</p>
        </section>
        <Image src="/images/weather-house.png" width={390} height={390} alt="Picture of a cute house" />
      </article>
      <TabBar />
    </main>


  )
}

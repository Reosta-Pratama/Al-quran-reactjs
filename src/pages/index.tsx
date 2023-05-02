import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Hero from '@/components/hero'
import Quran from '@/components/quran'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
        <title>Dirham</title>
      </Head>

      <Hero></Hero>
      <Suspense fallback={<p>Loading...</p>}>
        <Quran></Quran>
      </Suspense>
    </main>
  )
}

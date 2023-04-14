import Head from 'next/head'
import React from 'react'

export const getStaticPaths = async () => {
    const res = await fetch('https://equran.id/api/v2/surat');
    const data = await res.json();
  
    const paths = data?.data?.map(item => {
      return {
        params: { nomor: item.nomor.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async (surah) => {
    const nomor = surah.params.nomor;
    const request = await fetch('https://equran.id/api/v2/surat/' + nomor);
    const result = await request.json();
  
    return {
      props: { item: result }
    }
  }

export default function index({item}) {
    return (
        <section>
            <Head>
                <title>{item.data.nama}</title>
            </Head>
        </section>
    )
}

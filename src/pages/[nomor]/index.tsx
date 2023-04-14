import Badge from '@/components/badge';
import Tabs from '@/components/tabs';
import Head from 'next/head'
import React from 'react'

export const getStaticPaths = async () => {
    const request = await fetch('https://equran.id/api/v2/surat');
    const result = await request.json();
  
    const paths = result.data?.map((item: { nomor: { toString: () => any; }; }) => {
      return {
        params: { nomor: item.nomor.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
}

  export const getStaticProps = async (surah: { params: { nomor: any; }; }) => {
    const nomor = surah.params.nomor;
    const request = await fetch('https://equran.id/api/v2/surat/' + nomor);
    const result = await request.json();
  
    return {
      props: { item: result }
    }
}

export default function index({item}:any) {
    return (
        <>
            <Head>
                <title>{item.data.namaLatin} - {item.data.nama}</title>
            </Head>

            <Badge item={item}></Badge>
            <Tabs item={item}></Tabs>
        </>
    )
}

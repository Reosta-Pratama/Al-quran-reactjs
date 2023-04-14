import React from 'react'
import styles from '../styles/Surah.module.css'

export default function Surah({item} : any) {
    return (
        <section className={styles.surah}>
            <div className={styles.background}></div>
            <div className={styles.container}>
                {
                    item
                        .data
                        .ayat
                        .map(function (ayat : any) {
                            return (
                                <div key={ayat.nomorAyat} className='grid grid-cols-3 py-4 px-4 border-b border-[#021b42] border-solid'>
                                    <div className='py-4'>
                                    </div>

                                    <div className='col-span-2 py-4'>
                                        <div className="mt-2 mb-4 text-right">
                                            <h3 className='text-6xl'>{ayat.teksArab} <span className='text-3xl px-3 border border-white border-solid rounded-full'>{(ayat.nomorAyat).toLocaleString('ar-u-nu-arab')}</span></h3>
                                        </div>
                                        <div className="mt-2 mb-4">
                                            <h3 className='text-2xl'><span>{ayat.nomorAyat}.</span> {ayat.teksLatin}</h3>
                                        </div>
                                        <p className='text-md'>{ayat.teksIndonesia}</p>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </section>
    )
}

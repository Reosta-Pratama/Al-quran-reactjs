import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Quran.module.css'

export default function Quran() {
    const surah = useRef(null);
    const [quran, setquran] = useState([])
    useEffect(() => {
        async function getAlquran() {
            const request = await fetch('https://equran.id/api/v2/surat')
            const result = await request.json()

            setquran(result)
        }

        getAlquran()
    }, []);

    return (
    <section className={styles.quran} id='surah'>
        <div className={styles.background}></div>
        <div className={styles.container}>
            <div className='px-4'>
                <div className='mb-5 text-center'>
                    <h2 className={styles.subtitle}>Al-qur'an Featured</h2>
                </div>
                <div className='mb-5 text-center'>
                    <h1 className={styles.title}>
                        Discover the beauty of Islam, find peace in our center.
                    </h1>
                </div>
                <div className={`${styles.desc} mb-5 text-center`}>
                    <p>Donec pharetra, felis sed tincidunt tincidunt, risus lacus luctus justo, nec
                        accumsan ante quam et turpis. Donec pulvinar metus vel felis placerat gravida.
                        Aliquam molestie aliquet mi.</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {
                        quran.data?.map(function(item:any){
                            return(
                                <div key={item.nomor}>
                                    <div className={styles.content}>
                                        <div className={styles.background_content}></div>
                                        <div className='mb-5 pb-5'>
                                            <div className={styles.posisi_nomor}>
                                                <span className={styles.nomor}>{item.nomor}</span>
                                            </div>
                                        </div>
                                        <div className='relative z-10'>
                                            <Link href={`/${item.nomor}`}><h2 className={styles.nama_surat}>{item.namaLatin}</h2></Link>
                                            <p className={styles.desc_surat}>{item.deskripsi}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
    )
}
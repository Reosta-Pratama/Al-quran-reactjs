import Link from 'next/link'
import React from 'react'
import styles from '../styles/Badge.module.css'

export default function Badge({item}:any) {
    return (
        <section className={styles.badge}>
            <div className={styles.badge_background}></div>
            <div className={styles.badge_content}>
                <div className='p-4'>
                    <div className="mb-5 text-center">
                        <h1 className={styles.title}>{item.data.namaLatin}</h1>
                    </div>
                    <div className='text-center'>
                        <p>
                            <Link className={styles.home} href='/'>Home</Link>
                            / {item.data.namaLatin}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

import Link from 'next/link'
import React from 'react'
import styles from '../styles/Scrolldown.module.css'

export default function Scrolldown() {
    return (
        <Link href='/#surah' scroll={false}>
            <div className={styles.box}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Link>
    )
}

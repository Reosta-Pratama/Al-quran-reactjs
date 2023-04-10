import Link from 'next/link'
import React from 'react'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <div className='flex justify-center items-center mx-auto sm'>
            <Link href='/'><img src="../img/Dirham.png" alt="Logo" className={styles.logo}/></Link>
        </div>
    </header>
  )
}

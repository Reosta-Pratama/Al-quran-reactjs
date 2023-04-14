import React from 'react'
import styles from '../styles/Hero.module.css'
import Scrolldown from './scrolldown'

export default function Hero() {
  return (
    <section className={styles.hero}>
        <div className={styles.effect}></div>
        <div className={styles.container}>
            <div className='mb-5 text-center'>
                <h2 className={styles.salam}>Assalamualaikum</h2>
            </div>

            <div className='mb-5 text-center'>
                <h1 className={styles.title}>Happy Ramadhan Kareem</h1>
            </div>
            
            <div className={styles.desc}>
                <p>The month of Ramadan is (the month) in which the Qur’an was sent down, as a guide for humans and explanations for these instructions and a differentiator (between right and wrong) (Surah Al-Baqarah: 185)</p>
            </div>
        </div>
        <div className={styles.background}></div>
        <Scrolldown></Scrolldown>
    </section>
  )
}

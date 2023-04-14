import Link from 'next/link'
import React, {useState} from 'react'
import styles from '../styles/Tabs.module.css'
import Surah from './surah'
import Tafsir from './tafsir'

export default function Tabs({item} : any) {
    const [active, setactive] = useState(2)

    return (
        <div className={styles.tabs}>
            <div className={styles.background}></div>
            <div className={styles.container}>
                <div className={styles.option}>
                    <ul className='flex list-none flex-wrap flex-row' role='tablist'>
                        <li className='mr-2 last:mr-0 flex-auto text-center'>
                            <Link
                                className={`${styles.button} ${ (
                                    active === 1
                                        ? styles.active
                                        : null
                                )}`}
                                onClick={e => {
                                    e.preventDefault();
                                    setactive(1)
                                }}
                                data-toggle="tab"
                                href='#link1'
                                role='tablist'>Description</Link>
                        </li>
                        <li className='mr-2 last:mr-0 flex-auto text-center'>
                            <Link
                                className={`${styles.button} ${ (
                                    active === 2
                                        ? styles.active
                                        : null
                                )}`}
                                onClick={e => {
                                    e.preventDefault();
                                    setactive(2)
                                }}
                                data-toggle="tab"
                                href='#link1'
                                role='tablist'>Verse</Link>
                        </li>
                        <li className='mr-2 last:mr-0 flex-auto text-center'>
                            <Link
                                className={`${styles.button} ${ (
                                    active === 3
                                        ? styles.active
                                        : null
                                )}`}
                                onClick={e => {
                                    e.preventDefault();
                                    setactive(3)
                                }}
                                data-toggle="tab"
                                href='#link1'
                                role='tablist'>Interpretation</Link>
                        </li>
                    </ul>
                </div>

                <div className="mt-20">
                    <div
                        className={active === 1
                            ? "block"
                            : "hidden"}
                        id="link1">
                        <p>
                            1
                        </p>
                    </div>
                    <div
                        className={active === 2
                            ? "block"
                            : "hidden"}
                        id="link2">
                        <Surah item={item}></Surah>
                    </div>
                    <div
                        className={active === 3
                            ? "block"
                            : "hidden"}
                        id="link3">
                        <Tafsir item={item}></Tafsir>
                    </div>
                </div>
            </div>
        </div>
    )
}

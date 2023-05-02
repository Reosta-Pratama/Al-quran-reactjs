import React, {Suspense, useEffect, useState} from 'react'

export function padWithLeadingZeros(num : number, totalLength : number) {
    return String(num).padStart(totalLength, '0');
}

export default function Tafsir({item} : any) {
    const nomor = item.data
        ?.nomor
    const [tafsir, settafsir] = useState([])
    useEffect(() => {
        async function getTafsir() {
            const request = await fetch('https://equran.id/api/v2/tafsir/' + nomor)
            const result = await request.json()

            settafsir(result.data.tafsir)
        }

        getTafsir()
    }, []);

    return (
        <section className='relative'>
            <Suspense fallback={<p> Loading ...</p>}>
                <div>
                    {
                        tafsir
                            ?.map(function (tafsir
                            : any) {
                                return (
                                    <div
                                        key={tafsir.ayat}
                                        className='grid grid-cols-12 py-4 -mx-4 border-b border-[#021b42] border-solid'>
                                        <div className='col-span-2 py-4 px-4 text-4xl flex items-start'>
                                            <h3 className='text-[#f39632]'>Ayat {padWithLeadingZeros(tafsir.ayat, 2)}.</h3>
                                        </div>

                                        <div className='col-span-10 py-4 px-4'>
                                            <p className='text-lg text-justify leading-9'>{tafsir.teks}</p>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div>
            </Suspense>
        </section>
    )
}

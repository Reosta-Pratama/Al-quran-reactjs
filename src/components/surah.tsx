import React, { useEffect } from 'react'
import { padWithLeadingZeros } from './tafsir';

export default function Surah({item} : any) {
    useEffect(() => {
        function audioPlayer(){
            document.addEventListener('play', function(e) {
                var audios = document.getElementsByTagName('audio');
                for (var i = 0, len = audios.length; i < len; i++) {
                    if (audios[i] != e.target) {
                        audios[i].pause();
                    }
                }
            }, true);
        }

        audioPlayer()
    }, []);

    return (
        <section className='relative'>
            <div>
                {
                    item
                        .data
                        .ayat
                        .map(function (ayat : any) {
                            return (
                                <div key={ayat.nomorAyat} className='grid grid-cols-3 py-4 -mx-4 border-b border-[#021b42] border-solid'>
                                    <div className='py-4 px-4 flex items-center'>
                                        {ayat.audio && <audio className='w-full' src={ayat.audio['05']} controls></audio>}
                                    </div>

                                    <div className='col-span-2 py-4 px-4 '>
                                        <div className="mt-2 mb-4 text-right">
                                            <h3 className='text-6xl'>{ayat.teksArab} <span className='text-3xl px-3 border border-white border-solid rounded-full'>{(ayat.nomorAyat).toLocaleString('ar-u-nu-arab')}</span></h3>
                                        </div>
                                        
                                        <div className="mt-2 mb-4">
                                            <h3 className='text-2xl'><span>{padWithLeadingZeros(ayat.nomorAyat, 2)}.</span> {ayat.teksLatin}</h3>
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

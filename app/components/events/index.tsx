// app\components\events\index.tsx

"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { hostGrotesk } from '../fontSetter';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import AOS from 'aos'; // Importer AOS
import 'aos/dist/aos.css'; // Assurez-vous de bien importer le fichier CSS de AOS


export const EventsSection = () => {

  // Initialiser AOS une seule fois après le premier rendu
  useEffect(() => {
    AOS.init({ duration: 500, easing: 'ease-out', offset: 90, }); // Options de durée et d'animation lissée
  },);

    return(
        <section className="w-full flex flex-col gap-16 items-center justify-center md:p-16 py-16 px-4 bg-tertiary">
            <h1 className={`text-4xl font-extrabold text-center title ${hostGrotesk.className}`}>Évènements</h1>
            <div className="flex flex-col md:flex-row md:gap-16 gap-8 w-full md:items-stretch iterms-center justify-center">
                <div data-aos-once={true} data-aos="fade-up" className="container md:max-w-96 max-w-2xl ease-in-out duration-150 hover:shadow-stone-500 rounded-2xl relative px-8 pt-8 pb-28 shadow-xl shadow-stone-300 bg-white flex flex-col gap-8">
                    <span className='justify-self-start text-sm text-gray-500 '>21 novembre 2024</span>
                    <h1 className={`text-3xl text-gray-800 font-bold ${hostGrotesk.className}`}>Meet up autour des produits digitaux de la BSIC Bénin</h1>
                    <p className='w-full flex justify-end absolute bottom-8 right-8'>
                        <Link href="#" className="flex flex-row gap-1 items-center justify-center bg-primary hover:bg-secondary duration-150 ease-in-out text-white rounded-md py-2 px-4">
                            <PlusCircleIcon className='h-6 w-6'/>
                            <span>En savoir plus</span>
                        </Link>
                    </p>
                </div>
                <div data-aos-once={true} data-aos="fade-up" className="container md:max-w-96 max-w-2xl ease-in-out duration-150 hover:shadow-stone-500 rounded-2xl relative px-8 pt-8 pb-28 shadow-xl shadow-stone-300 bg-white flex flex-col gap-8">
                    <span className='justify-self-start text-sm text-gray-500 '>13 août 2024</span>
                    <h1 className={`text-3xl text-gray-800 font-bold ${hostGrotesk.className}`}>Avis d’appel à candidature interne : Recrutement chargée d’affaires grandes entreprises</h1>
                    <p className='w-full flex justify-end absolute bottom-8 right-8'>
                        <Link href="#" className="flex flex-row gap-1 items-center justify-center bg-primary hover:bg-secondary duration-150 ease-in-out text-white rounded-md py-2 px-4">
                            <PlusCircleIcon className='h-6 w-6'/>
                            <span>En savoir plus</span>
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
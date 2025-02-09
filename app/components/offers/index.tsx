// app\components\offers\index.tsx

"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { hostGrotesk } from '../fontSetter';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import AOS from 'aos'; // Importer AOS
import 'aos/dist/aos.css'; // Assurez-vous de bien importer le fichier CSS de AOS


export const OffersSection = () => {

  // Initialiser AOS une seule fois après le premier rendu
  useEffect(() => {
    AOS.init({ duration: 500, easing: 'ease-out', offset: 90, }); // Options de durée et d'animation lissée
  },);

    return(
        <section className="w-full flex flex-col gap-16 items-center justify-center md:p-16 py-16 px-4 bg-white">
            <h1 className={`text-4xl font-extrabold text-center title ${hostGrotesk.className}`}>Vous souhaitez</h1>
            <div className="flex flex-wrap flex-row md:gap-16 gap-8 w-full md:items-stretch items-center justify-center">
                {/*  */}
                <div data-aos-once={true} data-aos="fade-up" className="container md:max-w-80 group max-w-2xl ease-in-out duration-150 hover:shadow-stone-500 rounded-2xl relative px-8 pt-8 pb-28 shadow-xl shadow-stone-300 bg-white bg-cover" style={{backgroundImage: "url('/images/offers/1.jpg')"}}>
                    <div className="absolute w-full h-full left-0 top-0 rounded-2xl bg-black/70 group-hover:bg-black/80 ease-in-out duration-150"></div>
                    <div className="z-10 relative h-full w-full flex flex-col gap-8 items-center">
                        <h2 className={`text-3xl text-white font-bold text-center ${hostGrotesk.className}`}>Ouvrir un compte</h2>
                        <span className='text-gray-200'>Particulier ou Entreprise, domiciliez votre compte chez BSIC Bénin</span>
                    </div>
                    <p className='w-full flex justify-end absolute bottom-8 right-8'>
                            <Link href="#" className="flex flex-row gap-1 items-center justify-center bg-primary hover:bg-secondary duration-150 ease-in-out text-white rounded-md py-2 px-4">
                                <PlusCircleIcon className='h-6 w-6'/>
                                <span>En savoir plus</span>
                            </Link>
                        </p>
                </div>
                {/*  */}
                <div data-aos-once={true} data-aos="fade-up" className="container md:max-w-80 group max-w-2xl ease-in-out duration-150 hover:shadow-stone-500 rounded-2xl relative px-8 pt-8 pb-28 shadow-xl shadow-stone-300 bg-white bg-cover" style={{backgroundImage: "url('/images/offers/2.jpg')"}}>
                    <div className="absolute w-full h-full left-0 top-0 rounded-2xl bg-black/70 group-hover:bg-black/80 ease-in-out duration-150"></div>
                    <div className="z-10 relative h-full w-full flex flex-col gap-8 items-center">
                        <h2 className={`text-3xl text-white font-bold text-center ${hostGrotesk.className}`}>Transférer de l'argent</h2>
                        <span className='text-gray-200'>Découvrez nos moyens de tranferts rapides partout dans le monde</span>
                    </div>
                    <p className='w-full flex justify-end absolute bottom-8 right-8'>
                            <Link href="#" className="flex flex-row gap-1 items-center justify-center bg-primary hover:bg-secondary duration-150 ease-in-out text-white rounded-md py-2 px-4">
                                <PlusCircleIcon className='h-6 w-6'/>
                                <span>En savoir plus</span>
                            </Link>
                        </p>
                </div>
                {/*  */}
                <div data-aos-once={true} data-aos="fade-up" className="container md:max-w-80 group max-w-2xl ease-in-out duration-150 hover:shadow-stone-500 rounded-2xl relative px-8 pt-8 pb-28 shadow-xl shadow-stone-300 bg-white bg-cover" style={{backgroundImage: "url('/images/offers/3.jpg')"}}>
                    <div className="absolute w-full h-full left-0 top-0 rounded-2xl bg-black/70 group-hover:bg-black/80 ease-in-out duration-150"></div>
                    <div className="z-10 relative h-full w-full flex flex-col gap-8 items-center">
                        <h2 className={`text-3xl text-white font-bold text-center ${hostGrotesk.className}`}>Obtenir un financement</h2>
                        <span className='text-gray-200'>Faîtes-nous part de vos projets, et nous vous aideront à les réaliser</span>
                    </div>
                    <p className='w-full flex justify-end absolute bottom-8 right-8'>
                            <Link href="#" className="flex flex-row gap-1 items-center justify-center bg-primary hover:bg-secondary duration-150 ease-in-out text-white rounded-md py-2 px-4">
                                <PlusCircleIcon className='h-6 w-6'/>
                                <span>En savoir plus</span>
                            </Link>
                        </p>
                </div>
                {/*  */}
                <div data-aos-once={true} data-aos="fade-up" className="container md:max-w-80 group max-w-2xl ease-in-out duration-150 hover:shadow-stone-500 rounded-2xl relative px-8 pt-8 pb-28 shadow-xl shadow-stone-300 bg-white bg-cover" style={{backgroundImage: "url('/images/offers/4.jpg')"}}>
                    <div className="absolute w-full h-full left-0 top-0 rounded-2xl bg-black/70 group-hover:bg-black/80 ease-in-out duration-150"></div>
                    <div className="z-10 relative h-full w-full flex flex-col gap-8 items-center">
                        <h2 className={`text-3xl text-white font-bold text-center ${hostGrotesk.className}`}>Nos services digitaux </h2>
                        <span className='text-gray-200'>Gagnez plus en investissant votre argent chez nous</span>
                    </div>
                    <p className='w-full flex justify-end absolute bottom-8 right-8'>
                            <Link href="#" className="flex flex-row gap-1 items-center justify-center bg-primary hover:bg-secondary duration-150 ease-in-out text-white rounded-md py-2 px-4">
                                <PlusCircleIcon className='h-6 w-6'/>
                                <span>En savoir plus</span>
                            </Link>
                        </p>
                </div>
                {/*  */}
                <div data-aos-once={true} data-aos="fade-up" className="container md:max-w-80 group max-w-2xl ease-in-out duration-150 hover:shadow-stone-500 rounded-2xl relative px-8 pt-8 pb-28 shadow-xl shadow-stone-300 bg-white bg-cover" style={{backgroundImage: "url('/images/offers/5.jpg')"}}>
                    <div className="absolute w-full h-full left-0 top-0 rounded-2xl bg-black/70 group-hover:bg-black/80 ease-in-out duration-150"></div>
                    <div className="z-10 relative h-full w-full flex flex-col gap-8 items-center">
                        <h2 className={`text-3xl text-white font-bold text-center ${hostGrotesk.className}`}>Épargner</h2>
                        <span className='text-gray-200'>Préparez votre futur et l'avenir de votre famille</span>
                    </div>
                    <p className='w-full flex justify-end absolute bottom-8 right-8'>
                            <Link href="#" className="flex flex-row gap-1 items-center justify-center bg-primary hover:bg-secondary duration-150 ease-in-out text-white rounded-md py-2 px-4">
                                <PlusCircleIcon className='h-6 w-6'/>
                                <span>En savoir plus</span>
                            </Link>
                        </p>
                </div>
                {/*  */}
                <div data-aos-once={true} data-aos="fade-up" className="container md:max-w-80 group max-w-2xl ease-in-out duration-150 hover:shadow-stone-500 rounded-2xl relative px-8 pt-8 pb-28 shadow-xl shadow-stone-300 bg-white bg-cover" style={{backgroundImage: "url('/images/offers/6.jpg')"}}>
                    <div className="absolute w-full h-full left-0 top-0 rounded-2xl bg-black/70 group-hover:bg-black/80 ease-in-out duration-150"></div>
                    <div className="z-10 relative h-full w-full flex flex-col gap-8 items-center">
                        <h2 className={`text-3xl text-white font-bold text-center ${hostGrotesk.className}`}>Assurer</h2>
                        <span className='text-gray-200'>Choisissez les options qui vous permettent de vivre avec le moins d'inquiétude</span>
                    </div>
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
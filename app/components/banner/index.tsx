// app\components\banner\index.tsx

"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importation des styles Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Définition des images pour chaque format
const desktopImages = [
    { src: "/images/banners/1.png", alt: "Image 1" },
    { src: "/images/banners/2.png", alt: "Image 2" },
    { src: "/images/banners/3.png", alt: "Image 3" },
    { src: "/images/banners/4.png", alt: "Image 4" },
    { src: "/images/banners/5.png", alt: "Image 5" }
];

const mobileImages = [
    { src: "/images/banners/mobile1.png", alt: "Image 1" },
    { src: "/images/banners/mobile2.png", alt: "Image 2" },
    { src: "/images/banners/mobile3.png", alt: "Image 3" },
    { src: "/images/banners/mobile4.png", alt: "Image 4" },
    { src: "/images/banners/mobile5.png", alt: "Image 5" }
];

export const Banner = () => {
    // État pour suivre la largeur de l'écran
    const [isMobile, setIsMobile] = useState<boolean>(false);

    // Effect pour détecter le changement de taille d'écran
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // 768px est le breakpoint md de Tailwind
        };

        // Vérification initiale
        handleResize();

        // Ajout du listener pour les changements de taille
        window.addEventListener('resize', handleResize);

        // Nettoyage du listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="w-full flex">
            <div className='w-full relative'>
                {/* Swiper Container */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                    }}
                    className="w-full"
                >
                    {/* Affichage conditionnel des images selon le format */}
                    {(isMobile ? mobileImages : desktopImages).map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image 
                                src={image.src} 
                                alt={image.alt} 
                                width={isMobile ? 1024 : 1920}
                                height={isMobile ? 1024 : 640}
                                className="w-full max-h-[89vh]"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Boutons de navigation personnalisés */}
                <div className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                    <button className="bg-primary hover:bg-secondary duration-150 ease-in-out text-white maxmd:p-3 p-2 rounded-full">
                        <ChevronLeftIcon className="h-5 w-5" />
                    </button>
                </div>
                <div className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <button className="bg-primary hover:bg-secondary duration-150 ease-in-out text-white maxmd:p-3 p-2 rounded-full">
                        <ChevronRightIcon className="h-5 w-5" />
                    </button>
                </div>

                {/* Pagination personnalisée */}
                <div className="swiper-pagination rounded-xl absolute bottom-4 !left-2/4 !-translate-x-2/4 bg-white/50 max-w-fit container justify-self-center flex flex-wrap flex-row !gap-1 p-2"></div>
            </div>
        </section>
    );
};
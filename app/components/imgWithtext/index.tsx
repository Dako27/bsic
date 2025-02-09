// // app\components\imgWithtext\index.tsx

"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { hostGrotesk } from '../fontSetter';
import AOS from 'aos'; // Importer AOS
import 'aos/dist/aos.css'; // Assurez-vous de bien importer le fichier CSS de AOS

interface SectionProps {
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  title: string;
  text: string;
  linkIcon?: React.ReactNode;
  link?: string;
  linkText?: string;
  reverse?: boolean;
  className?: string;
  titleClassName?: string;
  textClassName?: string;
  style?: React.CSSProperties;
  animate?: boolean; // Nouvelle prop pour contrôler l'activation de l'animation
}

export const ImgWithText: React.FC<SectionProps> = ({
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  title,
  text,
  link,
  linkIcon,
  linkText,
  reverse,
  className,
  titleClassName,
  textClassName,
  style,
  animate,
}) => {

  // Initialiser AOS une seule fois après le premier rendu
  useEffect(() => {
    if (animate) {
      AOS.init({ duration: 500, easing: 'ease-out', offset: 90, }); // Options de durée et d'animation lissée
    }
  }, [animate]);

  return (
    <section
      style={style}
      className={`relative overflow-x-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 py-16 px-4 md:px-16 ${
        reverse ? 'md:flex-row-reverse' : ''
      } ${className}`}
    >
      <div
        data-aos-once={true} // Animation une seule fois
        data-aos={animate ? reverse ? 'fade-left' :  'fade-right' : ''} // Animation pour l'image (elle vient de la gauche)
        className="w-full md:w-1/2 relative"
      >
        <Image
          width={imgWidth}
          height={imgHeight}
          src={imgSrc}
          alt={imgAlt}
          className="w-full h-auto rounded-2xl shadow-xl shadow-stone-400"
        />
      </div>
      <div
        data-aos-once={true} // Animation une seule fois
        data-aos={animate ? reverse ? 'fade-right' : 'fade-left' : ''} // Animation pour le texte (il vient de la droite)
        className="w-full md:w-1/2 flex flex-col gap-8 items-center"
      >
        <h2
          className={`${titleClassName ? titleClassName : 'text-4xl title font-bold text-center'}  ${
            hostGrotesk.className
          }`}
        >
          {title}
        </h2>
        <p className={`${textClassName ? textClassName : 'text-gray-700'}`}>{text}</p>
        {link && (
          <Link
            href={link}
            className="flex flex-row gap-1 items-center justify-center bg-primary hover:bg-secondary duration-150 ease-in-out text-white rounded-md py-2 px-4"
          >
            {linkIcon ? linkIcon : <PlusCircleIcon className="h-6 w-6" />}
            <span>{linkText || 'En savoir plus'}</span>
          </Link>
        )}
      </div>
    </section>
  );
};

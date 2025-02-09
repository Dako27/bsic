// // app/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from './components/header';
import { Banner } from './components/banner';
import { EventsSection } from './components/events';
import { OffersSection } from './components/offers';
import { ImgWithText } from './components/imgWithtext';
import NewsLetter from './components/newsLetter';
import { Footer } from './components/footer';


export default function Page() {
  return (
    <div>
      <Header />
      <div className='relative mt-[4.5rem] bg-slate-500'>
        <Banner/>
        <EventsSection/>
        <OffersSection/>
        <ImgWithText 
          title='E-Banking' 
          text='Consultez votre compte en ligne grâce au service E-banking de BSIC Bénin. A la maison, au bureau ou en déplacement, ayez accès à vos comptes en un clic' 
          link='#' 
          imgSrc='/images/section/1.png' 
          imgAlt='image' 
          imgWidth={1024} 
          imgHeight={1024} 
          className='bg-tertiary' 
          animate
        />
        <ImgWithText 
          title='Nos services monétiques' 
          text='Faîtes vos opérations en toute quiétude 24h/24 et 7j/7 sur tout le réseau affichant GIM UEMOA' 
          link='#' 
          imgSrc='/images/section/2.png' 
          imgAlt='image' 
          imgWidth={1024} 
          imgHeight={1024} 
          className='bg-white' 
          reverse 
          animate
        />
        <ImgWithText 
          title='La BSIC, une vision, un instrument !' 
          text='Nous vous offrons des produits et services sur mesure' 
          link='#' 
          imgSrc='/images/section/choisir-sa-banque.jpg' 
          imgAlt='image' 
          imgWidth={1024} 
          imgHeight={1024} 
          className='bg-tertiary'
          animate 
        />
        <ImgWithText 
          title='Nos services monétiques' 
          text='Faîtes vos opérations en toute quiétude 24h/24 et 7j/7 sur tout le réseau affichant GIM UEMOA' 
          link='#' 
          imgSrc='/images/section/secParImg1.png' 
          imgAlt='image' 
          imgWidth={1024} 
          imgHeight={1024} 
          className='bg-white parallax' 
          titleClassName='text-white text-4xl font-bold text-center'
          textClassName='text-gray-200'
          reverse 
          style={{backgroundImage: "url('/images/section/parallax1.jpg')"}}
          // animate
        />
        <ImgWithText 
          title='Le Crédit à moindre coût !​' 
          text='En savoir plus sur les conditions d’obtention de crédit dans l’espace UEMOA​' 
          link='#' 
          imgSrc='/images/section/secParImg2.jpg' 
          imgAlt='image' 
          imgWidth={1024} 
          imgHeight={1024} 
          className='bg-white' 
          animate
        />
        <NewsLetter />
        <Footer/>
      </div>
    </div>
  );
}
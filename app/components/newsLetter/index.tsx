// app\components\newsLetter\index.tsx

"use client";

"use client";
import React, { useEffect } from 'react';
import { hostGrotesk } from "../fontSetter";
import AOS from 'aos'; // Importer AOS
import 'aos/dist/aos.css'; // Assurez-vous de bien importer le fichier CSS de AOS

interface formSubmitProps {
  action?: () => void;
}

const NewsLetter: React.FC<formSubmitProps> = ({ action }) => {

  const handleSubmit = () => {
    action && action();
  };

  const validField = () => {

  }

  // Initialiser AOS une seule fois après le premier rendu
  useEffect(() => {
    AOS.init({ duration: 500, easing: 'ease-out', offset: 90, }); // Options de durée et d'animation lissée
  },);

  return (
    <section className="w-full bg-tertiary flex items-center justify-center relative">
      <div className="container md:p-16 py-16 px-4 flex flex-col gap-16 items-center md:justify-center justify-center">
        <div className="flex flex-col gap-8 items-center">
            <h1 className={`text-4xl font-extrabold text-center title ${hostGrotesk.className}`}>Ne manquez rien !</h1>
            <p className="text-gray-700">Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles de la banque. </p>
        </div>
        <form action="" onSubmit={handleSubmit} className="max-w-2xl container flex items-center justify-center">
            <div className="w-full flex gap-1 items-stretch justify-center">
                <input type="email" onChange={validField} className="border-2 bg-white border-gray-300 ease-in-out duration-150 py-3 px-4 rounded-xl w-full" placeholder="Adresse mail" />
                <button className="text-white bg-primary hover:bg-secondary ease-in-out duration-150 w-fit py-2 px-4 rounded-xl">S'abonner</button>
            </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;

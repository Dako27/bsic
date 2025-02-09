// app/components/fontSetter/index.tsx

import React from 'react';
import { Host_Grotesk, Poppins, Plus_Jakarta_Sans } from 'next/font/google';

// Utilisation des polices avec des options
export const hostGrotesk = Host_Grotesk({
  weight: ['400', '700'],  // Définir les poids de la police
  subsets: ['latin'],      // Spécifier les sous-ensembles (ex : latin)
  display: 'swap', 
});

export const poppins = Poppins({
  weight: ['400', '600'],  // Définir les poids de la police
  subsets: ['latin'],      // Spécifier les sous-ensembles
  display: 'swap', 
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400', '600'],  // Définir les poids de la police
  subsets: ['latin'],      // Spécifier les sous-ensembles
  display: 'swap', 
});

const FontSetter = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${plusJakartaSans.className}`}>
      {children}
    </div>
  );
};

export default FontSetter;

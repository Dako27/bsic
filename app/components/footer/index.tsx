// app\components\footer\index.tsx

"use client";
import React, { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { hostGrotesk } from "../fontSetter";
import AOS from 'aos'; // Importer AOS
import 'aos/dist/aos.css'; // Assurez-vous de bien importer le fichier CSS de AOS

interface SubMenuProps {
  title: string;
  elements: { type: "link" | "text"; label: string; href?: string }[];
}
  
// Interface pour définir la structure d'un sous-menu complet
interface FooterSubMenu {
  title: string;
  // Nous utilisons le même type que dans SubMenuProps.elements pour assurer la cohérence
  links: { type: "link" | "text"; label: string; href?: string }[];
}

  // const FooterSubMenu = ({ title, elements }: SubMenuProps) => {

  //   return (
  //     <nav className="container md:max-w-64 w-full flex flex-col gap-8 justify-start items-start">
  //       <h3 className={`font-bold text-primary ${hostGrotesk.className}`}>{title}</h3>
  //       <ul className="flex flex-col gap-2">
  //         {elements.map((element, index) => (
  //           <li key={index}>
  //             {element.type === "link" ? (
  //               <Link
  //                 href={element.href || "#"} // Utilisation d'un lien par défaut si `href` est absent
  //                 className="text-gray-700 ease-in-out duration-150 hover:text-primary"
  //               >
  //                 {element.label}
  //               </Link>
  //             ) : (
  //               <span className="text-gray-700">{element.label}</span> // Affichage du texte simple
  //             )}
  //           </li>
  //         ))}
  //       </ul>
  //     </nav>
  //   );
  // };  
  
  
const FooterSubMenu = ({ title, elements }: SubMenuProps) => {
  return (
    <nav className="container md:max-w-64 w-full flex flex-col gap-8 justify-start items-start">
      <h3 className={`font-bold text-primary ${hostGrotesk.className}`}>{title}</h3>
      <ul className="flex flex-col gap-2">
        {elements.map((element, index) => (
          <li key={index}>
            {element.type === "link" ? (
              <Link
                href={element.href || "#"}
                className="text-gray-700 ease-in-out duration-150 hover:text-primary"
              >
                {element.label}
              </Link>
            ) : (
              <span className="text-gray-700">{element.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};


export const Footer = () => {

  // Initialiser AOS une seule fois après le premier rendu
//   useEffect(() => {
//     AOS.init({ duration: 500, easing: 'ease-out', offset: 100, }); // Options de durée et d'animation lissée
//   },);

    const footerSubMenus: FooterSubMenu[] = [
        {
          title: "QUI SOMMES-NOUS",
          links: [
            { type: "link", label: "Notre Banque", href: "#" },
            { type: "link", label: "BSIC News...", href: "#" },
            { type: "link", label: "Pourquoi nous choisir?", href: "#" },
            { type: "link", label: "Publications", href: "#" },
          ],
        },
        {
          title: "NOTRE RESEAU",
          links: [
            { type: "link", label: "Nos agences / GABs", href: "#" },
            { type: "link", label: "Les filiales du groupe", href: "#" },
          ],
        },
        {
          title: "PARTICULIERS",
          links: [
            { type: "link", label: "Les Comptes", href: "#" },
            { type: "link", label: "Les Crédits", href: "#" },
            { type: "link", label: "Les Services", href: "#" },
            { type: "link", label: "Les Packs", href: "#" },
            { type: "link", label: "Bancassurances", href: "#" },
          ],
        },
        {
          title: "ENTREPRISES",
          links: [
            { type: "link", label: "Les Comptes", href: "#" },
            { type: "link", label: "Les Crédits", href: "#" },
            { type: "link", label: "Les Services", href: "#" },
            { type: "link", label: "Les Packs", href: "#" },
            { type: "link", label: "Bancassurances", href: "#" },
          ],
        },
        {
          title: "CONTACTEZ-NOUS",
          links: [
            { type: "text", label: "Siège social : Carrefour 3 Banques" },
            { type: "text", label: "Cotonou, République du Bénin" },
            { type: "text", label: "Tél. : (+229) 51 20 96 68" },
            { type: "text", label: "Fax : (+229) 51 20 96 69" },
            { type: "text", label: "Email : bsic.benin@bsicbank.com" },
          ],
        },
        {
          title: "BESOIN D'AIDE?",
          links: [
            { type: "link", label: "Envoyez un mail", href: "#" },
            { type: "link", label: "FAQs", href: "#" },
            { type: "link", label: "Lexique des termes bancaires", href: "#" },
          ],
        },
        {
            title: "LIENS UTILES",
            links: [
                { type: "link", label: "Politique de confidentialité", href: "#" },
                { type: "link", label: "Mentions légales", href: "#" },
            ]
        }
      ];

    return(
        <footer className="flex relative flex-col gap-8 items-center justify-center bg-white">
            <div className="w-full relative bg-primary p-4 text-sm font-light flex flex-col gap-8 justify-center items-center">
                <div className="text-white items-center justify-center flex gap-2 flex-col">
                    <p>Le 04 Février 1998, après une longue réflexion nourrie de multiples concertations, quelques Leaders et Chefs d'États d'Afrique ont sgné le traité fondateur de la CEN-SAD. </p>
                    <p>Cette organisation est constitué à ce jour de dix-sept (17) Etats Sahélo-sahariens...</p>
                </div>
            </div>
            <div className="flex relative flex-wrap flex-row gap-16 px-4 pb-12 justify-center items-start">
                {/* {footerSubMenus.map((subMenu, index) => (
                    <FooterSubMenu key={index} title={subMenu.title} elements={subMenu.links} />
                ))} */}
                        {footerSubMenus.map((subMenu, index) => (
          <FooterSubMenu key={index} title={subMenu.title} elements={subMenu.links} />
        ))}

                <div className="container md:max-w-80 w-full flex flex-col gap-8 justify-center items-center">
                    <Image src={"/images/logo-bsic-2.png"} alt='Logo BSIC' width={150} height={100} />
                    <p className="text-xs text-gray-500">© BSIC BENIN SA. Tous droits réservés. 2011 - 2025</p>
                </div>
            </div>
        </footer>
    );
}
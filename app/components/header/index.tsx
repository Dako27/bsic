// app\components\header\index.tsx

"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon, MagnifyingGlassIcon , UserIcon } from '@heroicons/react/24/outline';
import { plusJakartaSans } from '../fontSetter';

interface headerProps {
    action?: ()=> void;
}

export const Header: React.FC<headerProps> = ({action}) => {

    const [menuToggle, setMenuToggle] = useState(false);

    const handleMenu = () => {
        setMenuToggle(!menuToggle);
        action && action();
    }

    return(
        <header className={`bg-white flex items-center justify-center fixed top-0 z-30 w-full shadow-md ${plusJakartaSans.className}`}>
            <div className='max-w-7xl p-4 container flex flex-col gap-4 justify-center items-end'>
                <nav className='flex flex-row items-center justify-between w-full'>
                    <ul className='flex flex-row gap-16 items-center justify-between'>
                        <Image src='/images/logo-bsic-2.png' alt='Logo BSIC' width={130} height={90} />
                        <ul id='menu' className={`bg-white maxmd:relative fixed maxmd:bottom-auto bottom-0 maxmd:w-auto w-full z-10 maxmd:top-0 top-[4.4rem] maxmd:left-auto ease-in-out duration-150 flex flex-col maxmd:flex-row maxmd:gap-8 gap-4 maxmd:opacity-100 maxmd:scale-100 maxmd:shadow-none shadow-md maxmd:items-center maxmd:p-0 p-4 ${menuToggle ? "left-0 opacity-100 scale-100 rounded-none" : "left-full opacity-0 scale-0 rounded-full"}`}>
                            <li className="flex w-full maxmd:hidden">
                                <form action="" method="post" className='relative w-full'>
                                    <input type="text" name="search" id="searchInput" placeholder='Rechercher' className="flex w-full border-solid border-1 rounded-full border-gray-500 " />
                                    <button className="absolute right-1 top-2/4 -translate-y-2/4 rounded-full p-2 bg-primary ease-in-out duration-100 hover:bg-secondary text-white">
                                        <MagnifyingGlassIcon className="h-4 w-4"/>
                                    </button>
                                </form>
                            </li>
                            <li className=""><Link href='#' className="text-gray-700 duration-150 ease-in-out hover:text-primary">Accueil</Link></li>
                            <li className="relative hover-parent w-full maxmd:w-auto duration-150 ease-in-out">
                                <Link href='#' className={`flex gap-1 items-center text-gray-700 duration-150 ease-in-out hover:text-primary`}>
                                    <span>Nos clients</span>
                                    <ChevronDownIcon className="h-5 w-5 transform transition-transform group-hover:rotate-180 duration-200 ease-in-out chevron" />
                                </Link>
                                <ul className="bg-white maxmd:absolute relative hover-element left-0 ease-in-out duration-150 maxmd:mt-1 maxmd:space-y-2 rounded-xl p-4 maxmd:shadow-lg maxmd:w-56 w-full container flex-col flex gap-2 items-start justify-center">
                                    <li className="flex w-full">
                                        <Link href="#" className="flex w-full text-gray-700 duration-150 ease-in-out hover:text-primary">Particulier</Link>
                                    </li>
                                    <li className="flex w-full">
                                        <Link href="#" className="flex w-full text-gray-700 duration-150 ease-in-out hover:text-primary">Entreprise</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className=""><Link href='#' className="text-gray-700 duration-150 ease-in-out hover:text-primary">Nos services</Link></li>
                            <li className=""><Link href='#' className="text-gray-700 duration-150 ease-in-out hover:text-primary">Devenir client</Link></li>
                            <li className="relative hover-parent w-full maxmd:w-auto duration-150 ease-in-out">
                                <Link href='#' className={`flex gap-1 items-center text-gray-700 duration-150 ease-in-out hover:text-primary`}>
                                    <span>A propos</span>
                                    <ChevronDownIcon className="h-5 w-5 transform transition-transform group-hover:rotate-180 duration-200 ease-in-out chevron" />
                                </Link>
                                <ul className="bg-white maxmd:absolute relative hover-element left-0 ease-in-out duration-150 maxmd:mt-1 maxmd:space-y-2 rounded-xl p-4 maxmd:shadow-lg maxmd:w-56 w-full container flex-col flex gap-2 items-start justify-center">
                                    <li className="flex w-full">
                                        <Link href="#" className="flex w-full text-gray-700 duration-150 ease-in-out hover:text-primary">Le groupe</Link>
                                    </li>
                                    <li className="flex w-full">
                                        <Link href="#" className="flex w-full text-gray-700 duration-150 ease-in-out hover:text-primary">La BSIC Bénin</Link>
                                    </li>
                                    <li className="flex w-full">
                                        <Link href="#" className="flex w-full text-gray-700 duration-150 ease-in-out hover:text-primary">Les filiales du groupe</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className=""><Link href='#' className="text-gray-700 duration-150 ease-in-out hover:text-primary">Contact</Link></li>
                            {/* account on mobile */}
                            <li className="relative hover-parent w-full maxmd:w-auto duration-150 ease-in-out">
                                <Link href='#' className={`maxmd:hidden flex gap-1 items-center text-gray-700 duration-150 ease-in-out hover:text-primary`}>
                                    <span>Espace client</span>
                                    <ChevronDownIcon className="h-5 w-5 transform transition-transform group-hover:rotate-180 duration-200 ease-in-out chevron" />
                                </Link>
                                <ul className="bg-white maxmd:absolute relative hover-element left-0 ease-in-out duration-150 maxmd:mt-1 maxmd:space-y-2 rounded-xl p-4 maxmd:shadow-lg maxmd:w-56 w-full container flex-col flex gap-2 items-start justify-center">
                                    <li className="flex w-full">
                                        <Link href="#" className="flex w-full text-gray-700 duration-150 ease-in-out hover:text-primary">Particulier</Link>
                                    </li>
                                    <li className="flex w-full">
                                        <Link href="#" className="flex w-full text-gray-700 duration-150 ease-in-out hover:text-primary">Entreprise</Link>
                                    </li>
                                    <li className="flex w-full">
                                        <Link href="#" className="flex w-full text-gray-700 duration-150 ease-in-out hover:text-primary">Digital</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* social networks */}
                            <ul className="flex flex-row gap-4 md:hidden relative left-0 justify-self-end mt-8 bottom-0 w-full items-center justify-center">
                                {/* facebook */}
                                <li className="">
                                    <Link href='#' className='text-primary'>
                                    <svg viewBox="0 0 448 512" fill='currentColor' className="h-6 w-6" >
                                        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/>
                                    </svg>
                                    </Link>
                                </li>
                                {/* linkedIn */}
                                <li className="">
                                    <Link href='#' className='text-primary'>
                                    <svg viewBox="0 0 448 512" fill='currentColor' className="h-6 w-6" style={{height: 1.5 + 'rem', width: 1.5 + 'rem'}} >
                                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                                    </svg>
                                    </Link>
                                </li>
                                {/* youtube */}
                                <li className="">
                                    <Link href='#' className='text-primary'>
                                    <svg viewBox="0 0 576 512" fill='currentColor' className="h-6 w-6" style={{height: 1.5 + 'rem', width: 1.5 + 'rem'}} >
                                        <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                                    </svg>
                                    </Link>
                                </li> 
                            </ul>
                        </ul>
                    </ul>
                    {/* search and accounts */}
                    <ul className="flex flex-row gap-8 items-center z-20">
                        <li className='maxmd:block hidden'>
                            <Link href="#" className="text-gray-700 duration-150 ease-in-out hover:text-primary">
                                <MagnifyingGlassIcon className="h-6 w-6"/>
                            </Link>
                        </li>
                        <li className="relative hover-parent maxmd:block hidden">
                            <Link href="#" className="text-gray-700 duration-150 ease-in-out hover:text-primary">
                                <UserIcon className="h-6 w-6"/>
                            </Link>
                            <ul className="absolute right-0 bg-white hover-element ease-in-out duration-150 mt-1space-y-2 rounded-xl p-4 shadow-lg w-56 container flex-col flex gap-2 items-start justify-center">
                                <li className="flex w-full">
                                    <Link href="#" className="flex w-full text-gray-700 duration-150 ease-in-out hover:text-primary">Particulier</Link>
                                </li>
                                <li className="flex w-full">
                                    <Link href="#" className="flex w-full text-gray-700 duration-150 ease-in-out hover:text-primary">Entreprise</Link>
                                </li>
                                <li className="flex w-full">
                                    <Link href="#" className="flex w-full text-gray-700 duration-150 ease-in-out hover:text-primary">Digital</Link>
                                </li>
                            </ul>
                        </li>
                        {/* langage */}
                        <li className="relative hover-parent-second">
                            <Link href="#" className={`flex items-center gap-1 text-gray-700 hover:text-primary duration-150 ease-in-out rounded-md py-1 px-2`}>
                                <span>FR</span>
                                <Image src="/images/fr.png" className='rounded-sm' height={15} width={20} alt="French flag" />
                                {/* <ChevronDownIcon className="h-5 w-5" /> */}
                            </Link>
                            <ul className="absolute right-0 bg-white hover-element-second ease-in-out duration-150 mt-1space-y-2 rounded-xl p-4 shadow-lg w-44 container flex-col flex gap-2 items-start justify-center">
                                <li className="flex w-full">
                                    <Link href="#" className={`flex w-full items-center gap-2 text-gray-700 hover:text-primary duration-150 ease-in-out rounded-md py-1 px-2`}>
                                        <Image src="/images/uk.png" className='rounded-sm' height={15} width={20} alt="French flag" />
                                        <span>English</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* menuIcon */} 
                        <li id='menuIcon' onClick={handleMenu} className={`maxmd:hidden relative flex flex-col h-6 items-center justify-center group cursor-pointer  ${menuToggle ? '' : ' gap-1'}`}>
                            <span className={`bg-gray-800 group-hover:bg-primary flex duration-150 ease-in-out w-6 h-1 rounded-md content-none relative ${menuToggle ? 'rotate-45 translate-y-[.26rem] bg-primary' : ''}`}></span>
                            <span className={`bg-gray-800 group-hover:bg-primary flex duration-150 ease-in-out w-6 h-1 rounded-md content-none relative ${menuToggle ? 'invisible opacity-0' : 'visible opacity-100'}`}></span>
                            <span className={`bg-gray-800 group-hover:bg-primary flex duration-150 ease-in-out w-6 h-1 rounded-md content-none relative ${menuToggle ? '-rotate-45 -translate-y-[.26rem] bg-primary' : ''}`}></span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import arrow_icon from '../../assets/arrow-icon.png'
import logo from '../../assets/logo.png'
import header_bg from '../../assets/header-bg-color.png'
import moon_icon from '../../assets/moon_icon.png'
import menu_black from '../../assets/icons8-menu-50.png'
import close_black from '../../assets/close-black.png'
import close_white from '../../assets/close-white.png'
import sun_icon from '../../assets/sun_icon.png'
import icon_dark from '../../assets/arrow-icon-dark.png'
import menu_white from '../../assets/menu-white.png'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={header_bg} alt="" className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px xl:px-[8%] py-4
            flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
                <a href="#top">
                    <h1 className='font-bold text-2xl'>SALVADOR</h1>
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full
                px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark border dark:border-white/50 dark:bg-transparent"} `}>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About Me</a></li>
                    <li><a className='font-Ovo' href="#services">Services</a></li>
                    <li><a className='font-Ovo' href="#project">Project</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? sun_icon : moon_icon} alt="" className='w-6' />
                    </button>
                    <a href="contact" className='hidden lg:flex items-center gap-3 px-10 
                    py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>Contact
                        <Image src={isDarkMode ? icon_dark : arrow_icon} alt="" className='w-3' /></a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={isDarkMode ? menu_white : menu_black} alt="" className='w-6' />
                    </button>
                </div>

                {/* ----- mobile menu ----- */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? close_white : close_black} alt='' className='w-5 cursor-pointer' />
                    </div>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#about">About Me</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#project">Project</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar

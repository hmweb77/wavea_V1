"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Logo from "../assets/Logo_Wavea.svg"

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="outline-none mobile-menu-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="17" viewBox="0 0 36 17" fill="none">
                                    <line y1="0.5" x2="36" y2="0.5" stroke="black" />
                                    <line y1="8.5" x2="36" y2="8.5" stroke="black" />
                                    <line y1="16.5" x2="36" y2="16.5" stroke="black" />
                                </svg>
                            </button>
                        </div>
                        {/* Logo */}
                        <div>
                           <Image src={Logo} alt="Logo"  className="w-logo-mobile h-logo-mobile md:w-logo-desktop md:h-logo-desktop"  />
                        </div>
                    <div className="flex space-x-7">
                        {/* Primary Nav Items */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="/" className="py-4 px-8 text-base leading-160 text-black-100 font-montserrat">Home</Link>
                            <Link href="#services" className=" py-4 px-8 text-base leading-160 text-black-100 font-montserrat">Services</Link>
                            <Link href="#projects" className="py-4 px-8 text-base leading-160 text-black-100 font-montserrat">Projects</Link>
                            <Link href="#faq" className="py-4 px-8 text-base leading-160 text-black-100 font-montserrat">FAQ</Link>
                        </div>
                    </div>
                    {/* Contact Us Button */}
                    <div className=" md:block">
                        <Link  href="https://wa.me/+351929345644" className="py-4 px-8 bg-yellow-400 text-yellow-900 rounded-3xl hover:bg-yellow-500">Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <Link href="/" className="block py-2 text-sm text-black-100">Home</Link>
                <Link href="#services" className="block py-2 text-sm text-black-100">Services</Link>
                <Link href="#projects" className="block py-2 text-sm text-black-100">Projects</Link>
                <Link href="#faq" className="block py-2 text-sm text-black-100">FAQ</Link>
            </div>
        </nav>
    );
}

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMenu, IoClose } from 'react-icons/io5';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
    let lastScrollY = 0;


    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (isDropdownOpen || isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isDropdownOpen, isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 20);

            if (currentScrollY > lastScrollY) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 transform ${scrolled ? 'bg-white/10 backdrop-blur-md shadow-md' : 'bg-transparent'
                } ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 relative">
                {/* Logo - leftmost */}
                <div className="flex-shrink-0">
                    <Link href="/" className="block">
                        <Image
                            src="https://eubiq.b-cdn.net/saga/sagatext-caption.png"
                            height={40}
                            width={120}
                            alt="Saga Logo"
                            className="w-auto h-10 object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 text-black font-medium relative items-center">
                    <div
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <span className="cursor-pointer hover:text-gradient transition-colors duration-300">
                            Products
                        </span>

                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-4 bg-white/30 backdrop-blur-xl p-6 rounded-xl shadow-xl flex gap-12 z-40">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Powertracks</h4>
                                    <ul className="space-y-1">
                                        <li><Link href="/products/r-series">R Series</Link></li>
                                        <li><Link href="/products/s-series">S Series</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Adaptors</h4>
                                    <ul className="space-y-1">
                                        <li><Link href="/products/splus-ultra">S+ Ultra</Link></li>
                                        <li><Link href="/products/s-ultra">S Ultra</Link></li>
                                        <li><Link href="/products/smax">S Max</Link></li>
                                        <li><Link href="/products/splus">S Plus</Link></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    {['About', 'Contact'].map((item) => (
                        <Link key={item} href={`/${item.toLowerCase()}`}>
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Buy Now Button */}
                <div className="hidden md:block">
                    <Link
                        href="/buy"
                        className="bg-black text-white px-4 py-2 rounded-full hover:bg-gradient-to-r from-blue-500 to-green-400 hover:text-black transition-all duration-300"
                    >
                        Buy Now
                    </Link>
                </div>

                {/* Hamburger Menu */}
                <div className="md:hidden z-50">
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open Menu"
                    >
                        <IoMenu className="w-7 h-7 text-black" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Fullscreen Dropdown */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-white/80 backdrop-blur-md z-40 p-6 flex flex-col items-start justify-between">
                    <div className="flex justify-between items-center w-full mb-8">
                        <Image
                            src="https://eubiq.b-cdn.net/saga/sagatext-caption.png"
                            height={40}
                            width={120}
                            alt="Saga Logo"
                            className="object-contain"
                        />
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-label="Close Menu"
                        >
                            <IoClose className="w-8 h-8 text-black" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 w-full text-black text-lg">
                        <div>
                            <span className="font-semibold block mb-2">Powertracks</span>
                            <ul className="space-y-1 pl-2">
                                <li><Link href="/products/r-series">R Series</Link></li>
                                <li><Link href="/products/s-series">S Series</Link></li>
                            </ul>
                        </div>
                        <div>
                            <span className="font-semibold block mb-2">Adaptors</span>
                            <ul className="space-y-1 pl-2">
                                <li><Link href="/products/splus-ultra">S+ Ultra</Link></li>
                                <li><Link href="/products/s-ultra">S Ultra</Link></li>
                                <li><Link href="/products/smax">S Max</Link></li>
                                <li><Link href="/products/splus">S Plus</Link></li>
                            </ul>
                        </div>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                        <Link
                            href="/buy"
                            className="mt-6 bg-black text-white px-4 py-2 rounded-full text-center w-full hover:bg-gradient-to-r from-blue-500 to-green-400 hover:text-black"
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

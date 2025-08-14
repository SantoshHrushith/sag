'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMenu, IoClose } from 'react-icons/io5';
import { IoChevronDown, IoChevronUp } from "react-icons/io5";


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [isDesktop, setIsDesktop] = useState(false);
  const [powertrackDropdown, setPowertrackDropdown] = useState(false);
  // const dropdownRef = useRef<HTMLDivElement>(null);

  let lastScrollY = 0;

  const navLinks = [
    { name: 'Why SAGA', href: '/why-saga' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Powertracks', href: '/powertracks' },
    { name: 'Adaptors', href: '/saga-adaptors' },

  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Detect desktop on mount and resize
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Scroll detection for desktop only
  useEffect(() => {
    const handleScroll = () => {
      setPowertrackDropdown(false);
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (isDesktop) {
        if (currentScrollY > lastScrollY) {
          setScrollDirection('down');
        } else {
          setScrollDirection('up');
        }
        lastScrollY = currentScrollY;

      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
        } ${scrollDirection === 'down' && isDesktop
          ? '-translate-y-full'
          : 'translate-y-0'
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex mt-2 items-center justify-between h-16 relative">
        {/* Logo */}
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
        {/* <nav className="hidden md:flex gap-6 font-medium relative items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-yellow transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav> */}
        <nav className="hidden md:flex font-medium items-center w-full justify-between">
          {/* Center: Navigation Links */}
          <div className="flex gap-8 flex-1 justify-center">
            {navLinks.map((link) =>
              link.name === "Powertracks" ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setPowertrackDropdown(true)}
                  onMouseLeave={() => setPowertrackDropdown(false)}
                >
                  <Link href={link.href}>
                  
                  <button
                    className={`flex items-center gap-1 p-4 transition-colors duration-200 cursor-pointer ${powertrackDropdown ? "text-yellow" : "text-white hover:text-yellow"
                      }`}
                    aria-haspopup="true"
                    aria-expanded={powertrackDropdown}
                  >
                    {link.name}
                    {powertrackDropdown ? (
                      <IoChevronUp className="ml-1 w-4 h-4" />
                    ) : (
                      <IoChevronDown className="ml-1 w-4 h-4" />
                    )}
                  </button>
                  </Link>
                  {powertrackDropdown && (
                    <div
                      className="fixed left-0 top-17 w-screen text-white py-8 px-10 flex items-center z-40 bg-black/90 backdrop-blur-md shadow-md"
                      style={{ minHeight: "120px" }}
                    >
                      <div className="flex flex-col ms-10 items-start w-full max-w-md ">
                        <span className="text-gray-400 text-base mb-8">Explore Powertracks</span>
                        <Link
                          href="/powertracks#recess"
                          className="text-2xl font-normal mb-6 hover:underline hover:text-yellow transition-colors duration-200"
                        >
                          Recess Track
                        </Link>
                        <Link
                          href="/powertracks#surface"
                          className="text-2xl font-normal hover:underline hover:text-yellow transition-colors duration-200"
                        >
                          Surface Track
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-yellow p-4 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </nav>

        {/* Buy Now Button */}
        <div className="hidden md:block">
          <Link
            href="/shop"
            className="bg-green text-white px-4 py-3 rounded-full hover:text-yellow transition-all duration-300"
          >
            Shop
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <IoClose className="w-8 h-8 text-black hover:text-yellow-400" />
            ) : (
              <IoMenu className="w-7 h-7 text-white hover:text-yellow-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-blue h-screen z-40 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <Image
              src="https://eubiq.b-cdn.net/saga/sagatext-caption.png"
              height={40}
              width={120}
              alt="Saga Logo"
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-6 text-lg text-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-yellow transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/buy"
              className="mt-6 bg-green text-white px-4 py-2 rounded-full text-center hover:bg-gradient-to-r from-blue-500 to-green-400 hover:text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Buy Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
{/* <nav className="hidden md:flex font-medium items-center w-full justify-between">
          <div className="flex gap-8 flex-1 justify-center">
            {navLinks.map((link) =>
              link.name === "Powertracks" ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setPowertrackDropdown(true)}
                  onMouseLeave={() => setPowertrackDropdown(false)}
                >
                  <button
                    className={`flex items-center gap-1 p-4 transition-colors duration-200 ${powertrackDropdown ? "text-yellow" : "text-white hover:text-yellow"
                      }`}
                    aria-haspopup="true"
                    aria-expanded={powertrackDropdown}
                  >
                    {link.name}
                    {powertrackDropdown ? (
                      <IoChevronUp className="ml-1 w-4 h-4" />
                    ) : (
                      <IoChevronDown className="ml-1 w-4 h-4" />
                    )}
                  </button>
                  {powertrackDropdown && (
                    <div
                      className="fixed left-0 top-17 w-screen text-white py-8 px-10 flex items-center z-40 bg-black/80 backdrop-blur-md shadow-md"
                      style={{ minHeight: "120px" }}
                    >
                      <div className="flex flex-col ms-10 items-start w-full max-w-md ">
                        <span className="text-gray-400 text-base mb-8">Explore Powertracks</span>
                        <Link
                          href="/saga-powertracks#recess"
                          className="text-2xl font-normal mb-6 hover:underline hover:text-yellow transition-colors duration-200"
                        >
                          Recess Track
                        </Link>
                        <Link
                          href="/saga-powertracks#surface"
                          className="text-2xl font-normal hover:underline hover:text-yellow transition-colors duration-200"
                        >
                          Surface Track
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-yellow p-4 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </nav> */}
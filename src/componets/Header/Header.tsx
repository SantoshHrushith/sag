'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMenu, IoClose } from 'react-icons/io5';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [isDesktop, setIsDesktop] = useState(false);
  let lastScrollY = 0;

  const navLinks = [
    { name: 'Why SAGA', href: '/why-saga' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Saga Powertracks', href: '/saga-powertracks' },
    { name: 'Saga Adaptors', href: '/saga-adaptors' },

  ];

  // ✅ Lock scroll when mobile menu is open
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/10 backdrop-blur-md shadow-md' : 'bg-transparent'
      } ${
        scrollDirection === 'down' && isDesktop
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
        <nav className="hidden md:flex gap-6 font-medium relative items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-yellow transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
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

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const brands = [
  { name: 'Hale Groves', href: 'https://halegroves.com', logo: '/images/hale-groves-logo.jpg', blendMode: true },
  { name: 'Pittman & Davis', href: 'https://pittmandavis.com', logo: '/images/pittman-brandbar-logo.webp', blendMode: false },
  { name: 'Sun Harvest', href: 'https://sunharvestcitrus.com', logo: null, blendMode: false },
  { name: 'Everglades Ranch', href: 'https://evergladesranch.com', logo: '/images/everglades-gold-logo.webp', blendMode: false },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/mission', label: 'Our Mission' },
    { href: '/brands', label: 'Our Brands' },
    { href: '/blog', label: 'From the Field' },
  ];

  return (
    <div className={`sticky top-0 z-50 ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Multi-Brand Top Bar */}
      <div className="bg-[#1a2e1a] text-white text-xs">
        <div className="container">
          <div className="flex items-center justify-center py-2">
            <div className="hidden sm:flex items-center gap-6">
              {brands.map((brand, index) => (
                <span key={brand.name} className="flex items-center">
                  <a
                    href={brand.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:opacity-80 transition-opacity"
                  >
                    {brand.logo ? (
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={80}
                        height={24}
                        className={`h-5 w-auto object-contain ${brand.blendMode ? 'mix-blend-screen' : 'brightness-0 invert'}`}
                      />
                    ) : (
                      <span className="text-white/90 font-medium tracking-wide text-[11px] uppercase">
                        {brand.name}
                      </span>
                    )}
                  </a>
                  {index < brands.length - 1 && (
                    <span className="text-white/30 ml-6">|</span>
                  )}
                </span>
              ))}
            </div>
            <span className="sm:hidden text-white/80 font-medium tracking-wide text-[11px] uppercase">
              The Indrio Fields Family of Brands
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-stone-200">
        <div className="container">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/indrio-fields-wordmark.svg"
                alt="Indrio Fields"
                width={150}
                height={60}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-stone-600 hover:text-stone-900 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://halegroves.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm py-2 px-4"
              >
                Shop Now
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-stone-200 pt-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-stone-600 hover:text-stone-900 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-stone-200 pt-4 mt-2">
                  <p className="text-xs text-stone-500 mb-2">Our Brands</p>
                  {brands.map((brand) => (
                    <a
                      key={brand.name}
                      href={brand.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-600 hover:text-stone-900 py-2 block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {brand.name} →
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
}

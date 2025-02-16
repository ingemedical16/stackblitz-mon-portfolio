'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Corrected for App Router

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Hamburger Menu */}
      <button
        className="block md:hidden text-gray-700"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full bg-white md:static md:flex md:space-x-6 md:w-auto`}
      >
        {[
          { href: '/', label: 'Accueil' },
          { href: '/projects', label: 'Projets' },
          { href: '/contact', label: 'Contact' },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`block px-4 py-2 text-gray-700 hover:text-black transition-colors ${
                isActive(href) ? 'font-bold text-black' : ''
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;

"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Waves } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Rooms", href: "/rooms" },
    { name: "Facilities", href: "/facilities" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-primary shadow-lg fixed w-full top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-gold" />
            <span className="text-lg font-bold text-white">
              Sea Dream Beach
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-gold transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Booking Button */}
          <Link href="/booking" className="hidden md:block">
            <button className="bg-gold text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-semibold">
              Booking Now
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-200 hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/booking" onClick={() => setIsOpen(false)}>
              <button className="w-full mt-4 bg-gold text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors font-semibold">
                Booking Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

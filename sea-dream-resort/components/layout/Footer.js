"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Share2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brown-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">
              Sea Dream Beach
            </h3>
            <p className="text-brown-100 leading-relaxed">
              A peaceful and friendly beachfront hotel located in beautiful
              Weligama, Sri Lanka. Your perfect vacation destination.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gold hover:text-white transition-colors"
                title="Facebook"
              >
                <span className="text-lg font-bold">f</span>
              </a>
              <a
                href="#"
                className="text-gold hover:text-white transition-colors"
                title="Twitter"
              >
                <span className="text-lg font-bold">𝕏</span>
              </a>
              <a
                href="#"
                className="text-gold hover:text-white transition-colors"
                title="Instagram"
              >
                <span className="text-lg font-bold">⊚</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">USEFUL LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-brown-100 hover:text-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-brown-100 hover:text-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="text-brown-100 hover:text-gold transition-colors"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-brown-100 hover:text-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">CONTACT INFO</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                <span className="text-brown-100">
                  Sea Dream Beach Resort, Weligama, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold" />
                <span className="text-brown-100">074 012 3790</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gold" />
                <a
                  href="mailto:Shanushvaththage@gmail.com"
                  className="text-brown-100 hover:text-gold transition-colors"
                >
                  Shanushvaththage@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Booking Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">CONTACT TWO</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                <span className="text-brown-100">
                  Sea Dream Beach Resort, Weligama, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold" />
                <span className="text-brown-100">+94 71 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gold" />
                <a
                  href="mailto:booking@seadreambeach.com"
                  className="text-brown-100 hover:text-gold transition-colors"
                >
                  booking@seadreambeach.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brown-700 pt-8 text-center text-brown-100">
          <p>Copyright © 2026 Sea Dream Beach Resort. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

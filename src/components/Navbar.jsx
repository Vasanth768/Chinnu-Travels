import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { TRAVEL_CONFIG } from '../config/travelConfig';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent("Hello Chinnu Travels, I would like to enquire about tourist vehicle booking.");
    window.open(`https://wa.me/${TRAVEL_CONFIG.whatsappRawNumber}?text=${text}`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07111F]/90 backdrop-blur-md border-b border-[#D6AD60]/20 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#07111F]/90 via-[#07111F]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0D1B2E] to-[#040B14] border border-[#D6AD60]/60 flex items-center justify-center shadow-gold-glow group-hover:border-[#D6AD60] transition-colors">
              <span className="font-serif font-black text-lg text-gold-gradient tracking-widest">
                CT
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg tracking-wider text-white group-hover:text-[#D6AD60] transition-colors">
                CHINNU TRAVELS
              </span>
              <span className="text-[10px] tracking-widest text-[#D6AD60] uppercase font-medium">
                Pethappampatti • Tiruppur
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {TRAVEL_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-[#D6AD60] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D6AD60] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleWhatsAppDirect}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/30 text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-sm"
              title="Chat directly on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Booking</span>
            </button>

            <button
              onClick={() => {
                const el = document.querySelector('#booking');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#D6AD60] via-[#ECC880] to-[#B38F3F] text-[#07111F] text-xs sm:text-sm font-bold tracking-wide shadow-gold-glow hover:shadow-gold-glow-lg transition-all hover:scale-105 active:scale-95"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={handleWhatsAppDirect}
              className="sm:hidden p-2 rounded-lg bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/40"
              aria-label="WhatsApp quick link"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-navy-800/80 text-gray-200 hover:text-[#D6AD60] border border-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07111F]/98 backdrop-blur-xl border-b border-[#D6AD60]/20 px-6 py-6 animate-fadeIn shadow-2xl">
          <nav className="flex flex-col gap-4">
            {TRAVEL_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-medium text-gray-200 hover:text-[#D6AD60] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-black font-bold text-sm shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp ({TRAVEL_CONFIG.whatsappNumber})</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.querySelector('#booking');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D6AD60] via-[#ECC880] to-[#B38F3F] text-[#07111F] font-bold text-sm shadow-gold-glow"
              >
                Plan / Enquire Booking
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}


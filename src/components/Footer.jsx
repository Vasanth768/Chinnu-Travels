import React from 'react';
import { MessageCircle, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { TRAVEL_CONFIG } from '../config/travelConfig';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hello Chinnu Travels, I would like to make an enquiry.");
    window.open(`https://wa.me/${TRAVEL_CONFIG.whatsappRawNumber}?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-[#040B14] border-t border-[#D6AD60]/20 pt-16 pb-12 relative overflow-hidden">
      
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#D6AD60]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand & About */}
          <div className="lg:col-span-2">
            
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D1B2E] to-[#040B14] border border-[#D6AD60]/60 flex items-center justify-center shadow-gold-glow">
                <span className="font-serif font-black text-lg text-gold-gradient tracking-widest">
                  CT
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg tracking-wider text-white">
                  CHINNU TRAVELS
                </span>
                <span className="text-[10px] tracking-widest text-[#D6AD60] uppercase font-medium">
                  Tourist Transportation
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Premier tourist transportation based in Pethappampatti, Tiruppur District. 
              Delivering comfortable, safe, and memorable road journeys across Tamil Nadu and beyond.
            </p>

            {/* Quick WhatsApp Action */}
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-bold transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: {TRAVEL_CONFIG.whatsappNumber}</span>
            </button>

          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {TRAVEL_CONFIG.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-[#D6AD60] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-400">
              <li><a href="#services" className="hover:text-[#D6AD60] transition-colors">Tourist Bus Rentals</a></li>
              <li><a href="#services" className="hover:text-[#D6AD60] transition-colors">Luxury Car Hire</a></li>
              <li><a href="#services" className="hover:text-[#D6AD60] transition-colors">Tempo Traveller Groups</a></li>
              <li><a href="#services" className="hover:text-[#D6AD60] transition-colors">Omni Van Services</a></li>
              <li><a href="#services" className="hover:text-[#D6AD60] transition-colors">Wedding Transportation</a></li>
              <li><a href="#services" className="hover:text-[#D6AD60] transition-colors">Airport Transfers</a></li>
            </ul>
          </div>

          {/* Col 5: Location & Contact */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-5">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6AD60] flex-shrink-0 mt-0.5" />
                <span>Pethappampatti, Tiruppur District, Tamil Nadu 642205</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D6AD60] flex-shrink-0" />
                <span>{TRAVEL_CONFIG.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D6AD60] flex-shrink-0" />
                <span className="truncate">{TRAVEL_CONFIG.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Designer Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          
          <p>
            Copyright © 2026 <strong className="text-white font-medium">CHINNU TRAVELS</strong>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-gray-400">
              Designed with care by{' '}
              <a
                href={TRAVEL_CONFIG.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D6AD60] font-semibold hover:text-[#ECC880] hover:underline transition-colors inline-flex items-center gap-1"
                title="Vasanthakumar Portfolio"
              >
                <span>AVX Software</span>
              </a>
            </span>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-navy-800 hover:bg-[#D6AD60] text-gray-300 hover:text-[#07111F] transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}


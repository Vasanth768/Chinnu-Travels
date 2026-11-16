import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  ExternalLink,
  Navigation,
  ShieldCheck
} from 'lucide-react';
import { TRAVEL_CONFIG } from '../config/travelConfig';

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hello Chinnu Travels, I would like to get in touch regarding tourist transportation.");
    window.open(`https://wa.me/${TRAVEL_CONFIG.whatsappRawNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#040B14] relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-[#D6AD60]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1B2E] border border-[#D6AD60]/30 text-[#D6AD60] text-xs font-semibold tracking-wider uppercase mb-4">
            Connect With Us
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-white tracking-tight">
            Contact Chinnu Travels
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Have questions or require an urgent vehicle? Reach our team in Pethappampatti via WhatsApp, phone, or visit our office.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D6AD60] to-transparent mx-auto mt-6" />
        </div>

        {/* Content Grid: Contact Details & Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Primary Business Location Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0D1B2E]/90 to-[#07111F] border border-[#D6AD60]/40 shadow-card-elevated">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#D6AD60]/15 flex items-center justify-center text-[#D6AD60]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">CHINNU TRAVELS</h3>
                  <p className="text-xs text-[#D6AD60] font-semibold tracking-wider uppercase">Head Office</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {TRAVEL_CONFIG.location.fullAddress}
              </p>
              
              <div className="text-xs text-gray-400 mb-6">
                <strong>Landmark:</strong> {TRAVEL_CONFIG.location.landmark}
              </div>

              <a
                href={TRAVEL_CONFIG.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#D6AD60] hover:text-[#ECC880] transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Direct Channels (WhatsApp & Call) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* WhatsApp Card */}
              <div
                onClick={handleWhatsAppClick}
                className="p-6 rounded-2xl bg-[#0D1B2E]/80 border border-[#25D366]/30 hover:border-[#25D366] transition-all cursor-pointer group shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366] mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider">WhatsApp</h4>
                <p className="font-mono text-sm sm:text-base font-bold text-white mt-1 group-hover:text-[#25D366] transition-colors">
                  {TRAVEL_CONFIG.whatsappNumber}
                </p>
                <span className="text-[11px] text-[#25D366] font-medium mt-2 inline-block">
                  Click to chat instantly →
                </span>
              </div>

              {/* Phone Calling Card */}
              <a
                href={`tel:${TRAVEL_CONFIG.whatsappRawNumber}`}
                className="p-6 rounded-2xl bg-[#0D1B2E]/80 border border-white/10 hover:border-[#D6AD60] transition-all group shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D6AD60]/15 flex items-center justify-center text-[#D6AD60] mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider">Direct Call</h4>
                <p className="font-mono text-sm sm:text-base font-bold text-white mt-1 group-hover:text-[#D6AD60] transition-colors">
                  {TRAVEL_CONFIG.phoneDisplay}
                </p>
                <span className="text-[11px] text-[#D6AD60] font-medium mt-2 inline-block">
                  Tap to call operator →
                </span>
              </a>

            </div>

            {/* Operating Availability */}
            <div className="p-5 rounded-2xl bg-[#07111F] border border-white/5 flex items-center gap-4 text-xs text-gray-300">
              <div className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center text-[#D6AD60] flex-shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-white">Travel Enquiries & Reservations</p>
                <p className="text-gray-400 text-[11px] mt-0.5">
                  Available daily for advance bookings and emergency travel coordination.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Placeholder */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[360px] sm:min-h-[450px] rounded-3xl overflow-hidden border border-[#D6AD60]/30 shadow-card-elevated relative bg-navy-950 flex flex-col">
              
              {/* Map Header Bar */}
              <div className="px-6 py-4 bg-[#0D1B2E] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-gray-200 uppercase tracking-wider">
                    Location: Pethappampatti, Tiruppur
                  </span>
                </div>
                <a
                  href={TRAVEL_CONFIG.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#D6AD60] hover:underline flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* The Interactive Google Maps Iframe */}
              <div className="flex-1 w-full relative">
                <iframe
                  title="Chinnu Travels Pethappampatti Map"
                  src={TRAVEL_CONFIG.location.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


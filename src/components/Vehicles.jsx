import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, CheckCircle, MessageCircle, Info, Sparkles } from 'lucide-react';
import { TRAVEL_CONFIG } from '../config/travelConfig';

export default function Vehicles({ onSelectVehicleForBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Tourist Buses', 'Luxury Cars', 'Tempo Traveller', 'Omni'];

  const filteredVehicles = activeCategory === 'All'
    ? TRAVEL_CONFIG.vehicles
    : TRAVEL_CONFIG.vehicles.filter((v) => v.category === activeCategory);

  const handleWhatsAppEnquiry = (vehicle) => {
    const text = encodeURIComponent(
      `Hello Chinnu Travels,\n\nI am interested in enquiring about your *${vehicle.name}* (${vehicle.category}).\n\nPlease let me know the availability and tariff rates.`
    );
    window.open(`https://wa.me/${TRAVEL_CONFIG.whatsappRawNumber}?text=${text}`, '_blank');
  };

  const handleBookWithPreselect = (vehicle) => {
    if (onSelectVehicleForBooking) {
      onSelectVehicleForBooking(vehicle.category);
    }
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="vehicles" className="py-24 sm:py-32 bg-[#07111F] relative">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D6AD60]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0D1B2E] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1B2E] border border-[#D6AD60]/30 text-[#D6AD60] text-xs font-semibold tracking-wider uppercase mb-4">
            Fleet Excellence
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-white tracking-tight">
            Our Luxury Fleet & Vehicles
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Meticulously maintained, fully air-conditioned, and chauffeur-driven for superior safety and comfort across Tamil Nadu and beyond.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D6AD60] to-transparent mx-auto mt-6" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#D6AD60] to-[#B38F3F] text-[#07111F] shadow-gold-glow scale-105'
                  : 'bg-[#0D1B2E]/80 text-gray-300 hover:text-white hover:bg-[#142742] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#0D1B2E]/90 to-[#07111F] border border-[#D6AD60]/20 hover:border-[#D6AD60]/60 shadow-card-elevated hover:shadow-gold-glow transition-all duration-500 flex flex-col"
              >
                
                {/* Vehicle Image Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-navy-950">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 rounded-full bg-[#07111F]/90 backdrop-blur-md border border-[#D6AD60]/50 text-xs font-bold text-[#D6AD60] tracking-wider uppercase shadow-lg">
                      {vehicle.category}
                    </span>
                  </div>

                  {/* Passenger Capacity Badge (Shown only when confirmed by the business) */}
                  {vehicle.capacity && (
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#07111F]/85 backdrop-blur-md border border-white/10 text-xs font-medium text-gray-200">
                        <Users className="w-3.5 h-3.5 text-[#D6AD60]" />
                        <span>{vehicle.capacity}</span>
                      </span>
                    </div>
                  )}

                  {/* Subtle Gradient Shadow on bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E] via-transparent to-transparent opacity-90" />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header: Title and Tagline */}
                    <div className="mb-3">
                      <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold-gradient transition-colors">
                        {vehicle.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#D6AD60] font-medium mt-1">
                        {vehicle.tagline}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-5">
                      {vehicle.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {vehicle.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle className="w-3.5 h-3.5 text-[#D6AD60] flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Ideal For Note */}
                    {vehicle.idealFor && (
                      <div className="p-3 rounded-xl bg-navy-950/60 border border-white/5 mb-6 text-xs text-gray-400">
                        <strong className="text-gray-200 font-semibold">Recommended for:</strong> {vehicle.idealFor}
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                    
                    {/* Primary: Direct WhatsApp Enquiry */}
                    <button
                      onClick={() => handleWhatsAppEnquiry(vehicle)}
                      className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-xs sm:text-sm shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <MessageCircle className="w-4 h-4 fill-black text-black" />
                      <span>WhatsApp Enquiry</span>
                    </button>

                    {/* Secondary: Fill Booking Form */}
                    <button
                      onClick={() => handleBookWithPreselect(vehicle)}
                      className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-semibold text-gray-200 hover:text-white transition-colors"
                    >
                      Plan Trip
                    </button>

                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Fleet Consultation Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0D1B2E] via-[#101820] to-[#0D1B2E] border border-[#D6AD60]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#D6AD60]/15 flex items-center justify-center text-[#D6AD60] flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                Unsure which vehicle fits your group best?
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Tell us your passenger count and destination on WhatsApp. We will suggest the ideal vehicle arrangement.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const text = encodeURIComponent("Hello Chinnu Travels, I need assistance choosing the right vehicle for our upcoming trip.");
              window.open(`https://wa.me/${TRAVEL_CONFIG.whatsappRawNumber}?text=${text}`, '_blank');
            }}
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-[#D6AD60] hover:bg-[#ECC880] text-[#07111F] font-bold text-xs sm:text-sm transition-all"
          >
            Ask Our Travel Advisor
          </button>
        </div>

      </div>
    </section>
  );
}


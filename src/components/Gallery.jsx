import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Camera } from 'lucide-react';
import { TRAVEL_CONFIG } from '../config/travelConfig';
import LightboxModal from './LightboxModal';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const filters = ['All', 'Buses', 'Cars & Travellers', 'Scenic Routes'];

  const filteredItems = selectedFilter === 'All'
    ? TRAVEL_CONFIG.gallery
    : TRAVEL_CONFIG.gallery.filter((item) => item.category === selectedFilter);

  const handleOpenLightbox = (index) => {
    // Find index in master list for smooth previous/next navigation
    const targetItem = filteredItems[index];
    const masterIndex = TRAVEL_CONFIG.gallery.findIndex((i) => i.id === targetItem.id);
    setActiveImageIndex(masterIndex !== -1 ? masterIndex : 0);
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % TRAVEL_CONFIG.gallery.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + TRAVEL_CONFIG.gallery.length) % TRAVEL_CONFIG.gallery.length);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#040B14] relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[300px] bg-[#D6AD60]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1B2E] border border-[#D6AD60]/30 text-[#D6AD60] text-xs font-semibold tracking-wider uppercase mb-4">
            Visual Journeys
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-white tracking-tight">
            Travel Moments & Fleet Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            A glimpse into the tourist buses, cars, serene highway drives, and breathtaking southern travel destinations we journey to.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D6AD60] to-transparent mx-auto mt-6" />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-[#D6AD60] to-[#B38F3F] text-[#07111F] shadow-gold-glow scale-105'
                  : 'bg-[#0D1B2E]/70 text-gray-300 hover:text-white hover:bg-[#142742] border border-white/5'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-navy-950 border border-white/10 hover:border-[#D6AD60] shadow-card-elevated hover:shadow-gold-glow cursor-pointer"
                onClick={() => handleOpenLightbox(idx)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#07111F]/80 backdrop-blur-md border border-[#D6AD60]/40 text-[10px] font-bold text-[#D6AD60] uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#D6AD60] text-[#07111F] flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-serif text-sm font-bold text-white group-hover:text-gold-gradient">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-300 line-clamp-1 mt-0.5 opacity-80 group-hover:opacity-100">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={activeImageIndex !== null}
        image={activeImageIndex !== null ? TRAVEL_CONFIG.gallery[activeImageIndex] : null}
        onClose={() => setActiveImageIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}


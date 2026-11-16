import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, ArrowRight, Compass, Shield, Award } from 'lucide-react';
import { TRAVEL_CONFIG } from '../config/travelConfig';

export default function Hero({ onExploreVehicles, onBookWhatsApp }) {
  const handleWhatsAppBooking = () => {
    if (onBookWhatsApp) {
      onBookWhatsApp();
    } else {
      const text = encodeURIComponent(
        `Hello Chinnu Travels, I would like to book a journey.\n\nCould you please share vehicle availability and quote details?`
      );
      window.open(`https://wa.me/${TRAVEL_CONFIG.whatsappRawNumber}?text=${text}`, '_blank');
    }
  };

  const handleScrollToVehicles = () => {
    if (onExploreVehicles) {
      onExploreVehicles();
    } else {
      const element = document.querySelector('#vehicles');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Video with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={TRAVEL_CONFIG.heroVideo.fallbackPoster}
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-slow"
        >
          <source src={TRAVEL_CONFIG.heroVideo.url} type="video/mp4" />
          {/* Fallback image */}
          <img
            src={TRAVEL_CONFIG.heroVideo.fallbackPoster}
            alt="Scenic Highway Travel"
            className="w-full h-full object-cover object-center"
          />
        </video>

        {/* Cinematic Multi-layered Dark Vignette Overlays */}
        <div className="absolute inset-0 bg-[#07111F]/70 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/50 to-[#07111F]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#07111F]/60 to-[#07111F]" />
        
        {/* Subtle Luxury Gold Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D6AD60]/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center flex flex-col items-center">
        
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D1B2E]/80 border border-[#D6AD60]/40 backdrop-blur-md mb-8 shadow-gold-glow"
        >
          <MapPin className="w-4 h-4 text-[#D6AD60] animate-bounce" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-200">
            {TRAVEL_CONFIG.location.village}, {TRAVEL_CONFIG.location.district}, {TRAVEL_CONFIG.location.state}
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-white max-w-5xl"
        >
          YOUR JOURNEY, <br className="hidden sm:inline" />
          <span className="text-gold-gradient drop-shadow-lg">
            OUR RESPONSIBILITY.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl leading-relaxed"
        >
          {TRAVEL_CONFIG.subtitle}
        </motion.p>

        {/* Quick Highlights Badge Row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-300"
        >
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-800/60 border border-white/5">
            <span className="w-2 h-2 rounded-full bg-[#D6AD60]" />
            Tourist Buses
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-800/60 border border-white/5">
            <span className="w-2 h-2 rounded-full bg-[#D6AD60]" />
            Luxury Cars
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-800/60 border border-white/5">
            <span className="w-2 h-2 rounded-full bg-[#D6AD60]" />
            Omni Van Rentals
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-800/60 border border-white/5">
            <span className="w-2 h-2 rounded-full bg-[#D6AD60]" />
            Tempo Traveller
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <button
            onClick={handleScrollToVehicles}
            className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-transparent hover:bg-white/5 border-2 border-[#D6AD60] text-white hover:text-[#ECC880] text-sm sm:text-base font-bold tracking-wide transition-all duration-300 shadow-card-elevated"
          >
            <span>Explore Our Vehicles</span>
            <ArrowRight className="w-4 h-4 text-[#D6AD60] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleWhatsAppBooking}
            className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D6AD60] via-[#ECC880] to-[#B38F3F] text-[#07111F] text-sm sm:text-base font-extrabold tracking-wide shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 fill-[#07111F] text-[#07111F]" />
            <span>Book Your Journey on WhatsApp</span>
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 text-center"
        >
          <div className="flex flex-col items-center">
            <span className="font-serif font-bold text-xl sm:text-2xl text-[#D6AD60]">100%</span>
            <span className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">Verified Vehicles</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif font-bold text-xl sm:text-2xl text-[#D6AD60]">Experienced</span>
            <span className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">Route Drivers</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center">
            <span className="font-serif font-bold text-xl sm:text-2xl text-[#D6AD60]">Direct</span>
            <span className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">WhatsApp Booking</span>
          </div>
        </motion.div>

      </div>

      {/* Decorative Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07111F] to-transparent pointer-events-none" />
    </section>
  );
}


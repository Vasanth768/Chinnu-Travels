import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MessageSquareQuote, Layers, CalendarRange, HeartHandshake, CheckCircle } from 'lucide-react';
import { TRAVEL_CONFIG } from '../config/travelConfig';

export default function WhyChooseUs() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    MessageSquareQuote: MessageSquareQuote,
    Layers: Layers,
    CalendarRange: CalendarRange,
    HeartHandshake: HeartHandshake
  };

  return (
    <section id="why-choose-us" className="py-24 sm:py-32 bg-[#07111F] relative overflow-hidden">
      
      {/* Decorative radial gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D6AD60]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1B2E] border border-[#D6AD60]/30 text-[#D6AD60] text-xs font-semibold tracking-wider uppercase mb-4">
            The Chinnu Difference
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-white tracking-tight">
            Why Travel With Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Thoughtfully planned transportation anchored in passenger well-being, transparent communication, and genuine hospitality.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D6AD60] to-transparent mx-auto mt-6" />
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAVEL_CONFIG.whyChooseUs.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || ShieldCheck;
            
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#0D1B2E]/70 to-[#07111F]/90 border border-white/10 hover:border-[#D6AD60]/60 transition-all duration-300 shadow-card-elevated hover:shadow-gold-glow flex flex-col justify-between"
              >
                
                {/* Glow dot in corner */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#D6AD60]/40 group-hover:bg-[#D6AD60] transition-colors" />

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#142742] to-[#07111F] border border-[#D6AD60]/40 flex items-center justify-center text-[#D6AD60] mb-6 shadow-md group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#ECC880] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#D6AD60] font-medium mt-1 mb-4">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle border bottom highlight on hover */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                  <CheckCircle className="w-3.5 h-3.5 text-[#D6AD60]" />
                  <span>Verified Standard</span>
                </div>

              </motion.div>
            );
          })}

          {/* Quick Highlight Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#07111F] to-[#0D1B2E] border border-[#D6AD60]/40 flex flex-col justify-center text-center shadow-gold-glow">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D6AD60] mb-2">Direct Booking</span>
            <h4 className="font-serif text-2xl font-bold text-white mb-3">Plan Your Route Today</h4>
            <p className="text-xs sm:text-sm text-gray-300 mb-6">
              Connect directly with our operations team in Pethappampatti to reserve your tourist vehicle.
            </p>
            <a
              href="#booking"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#D6AD60] to-[#B38F3F] text-[#07111F] text-xs sm:text-sm font-bold tracking-wide hover:shadow-gold-glow transition-all"
            >
              Start WhatsApp Enquiry
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}


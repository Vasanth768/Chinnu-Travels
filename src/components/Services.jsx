import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Compass, 
  MapPin, 
  Clock, 
  Sparkles, 
  Briefcase, 
  Plane,
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';
import { TRAVEL_CONFIG } from '../config/travelConfig';

export default function Services() {
  const iconMap = {
    Users: Users,
    Compass: Compass,
    MapPin: MapPin,
    Clock: Clock,
    Sparkles: Sparkles,
    Briefcase: Briefcase,
    Plane: Plane
  };

  const handleServiceEnquiry = (serviceTitle) => {
    const text = encodeURIComponent(
      `Hello Chinnu Travels,\n\nI would like to enquire about your *${serviceTitle}* service.\n\nPlease share details and available packages.`
    );
    window.open(`https://wa.me/${TRAVEL_CONFIG.whatsappRawNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#040B14] relative">
      
      {/* Decorative gradient accents */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#D6AD60]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0D1B2E] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1B2E] border border-[#D6AD60]/30 text-[#D6AD60] text-xs font-semibold tracking-wider uppercase mb-4">
            Tailored Experiences
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-white tracking-tight">
            Our Tourist Transportation Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            From local family functions to long-distance outstation adventures, experience seamless journeys designed around your schedule.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D6AD60] to-transparent mx-auto mt-6" />
        </div>

        {/* Services Grid (7 items displayed in a refined luxury layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAVEL_CONFIG.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Compass;
            const isFeatured = index === 0 || index === 4; // subtle visual accent

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#0D1B2E]/80 to-[#07111F] border ${
                  isFeatured ? 'border-[#D6AD60]/40 shadow-gold-glow' : 'border-white/10'
                } hover:border-[#D6AD60] shadow-card-elevated transition-all duration-500 flex flex-col justify-between`}
              >
                
                {/* Visual Imagery Header */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E] via-[#07111F]/50 to-transparent" />

                  {/* Icon Emblem Badge */}
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-[#07111F]/90 backdrop-blur-md border border-[#D6AD60]/50 flex items-center justify-center text-[#D6AD60] shadow-lg group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-gold-gradient transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#D6AD60] font-medium tracking-wide mt-1 mb-3">
                      {service.tagline}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* WhatsApp Quick Link */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => handleServiceEnquiry(service.title)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#D6AD60] group-hover:text-[#ECC880] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enquire on WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


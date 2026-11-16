import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Users, MapPin, Heart, Shield, CheckCircle2 } from 'lucide-react';
import { TRAVEL_CONFIG } from '../config/travelConfig';

export default function AboutUs() {
  const commitments = [
    {
      icon: Shield,
      title: "Passenger Safety & Comfort",
      desc: "Carefully inspected fleet equipped with modern safety standards and air-conditioned cabins for maximum relaxation."
    },
    {
      icon: Users,
      title: "Attentive Chauffeurs",
      desc: "Licensed, polite drivers possessing rich route familiarity across hill stations, highways, and pilgrimage routes."
    },
    {
      icon: Heart,
      title: "Customer Convenience",
      desc: "Frictionless direct WhatsApp enquiries with prompt vehicle recommendations suited for your specific group size."
    },
    {
      icon: Compass,
      title: "Customized Itineraries",
      desc: "Flexible route planning allowing family stops, sightseeing diversions, and schedules aligned with your celebration."
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#07111F] relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#D6AD60]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#1D3557]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1B2E] border border-[#D6AD60]/30 text-[#D6AD60] text-xs font-semibold tracking-wider uppercase mb-4">
            About Chinnu Travels
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Travel With Comfort. <br />
            <span className="text-gold-gradient">Travel With Confidence.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D6AD60] to-transparent mx-auto mt-6" />
        </div>

        {/* Grid: Story & Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D6AD60]/30 shadow-card-elevated group">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80"
                  alt="Chinnu Travels Tourist Transportation"
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent opacity-80" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0D1B2E]/90 backdrop-blur-md border border-[#D6AD60]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#D6AD60]/20 flex items-center justify-center text-[#D6AD60]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-[#D6AD60] font-semibold uppercase tracking-wider">Base Location</p>
                      <p className="text-sm font-bold text-white">Pethappampatti, Tiruppur District, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Accent Card */}
              <div className="hidden sm:block absolute -top-6 -right-6 p-5 rounded-2xl bg-[#0D1B2E]/95 backdrop-blur-md border border-[#D6AD60]/40 shadow-2xl max-w-xs">
                <p className="font-serif text-lg font-bold text-gold-gradient">Premium Fleet</p>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  Tourist Buses • Luxury Sedans & SUVs • Tempo Travellers • Omni Vans
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Company Story & Features */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6">
              Dedicated to Crafting Exceptional Travel Experiences
            </h3>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              Based in <strong className="text-white font-semibold">Pethappampatti</strong>, in the heart of Tiruppur District, 
              <strong className="text-[#D6AD60] font-semibold"> CHINNU TRAVELS</strong> provides dependable, premium tourist transportation 
              services tailored to the varied travel aspirations of South India.
            </p>

            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Whether you are planning a tranquil family vacation to the Nilgiris, coordinating transit for hundreds of wedding guests, 
              embarking on a sacred pilgrimage circuit, or managing corporate delegate travel, our vehicle fleet and seasoned drivers 
              ensure every mile is characterized by comfort, dignity, and punctuality.
            </p>

            {/* Commitments 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {commitments.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0D1B2E]/60 border border-white/5 hover:border-[#D6AD60]/30 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#D6AD60]/10 flex items-center justify-center text-[#D6AD60] mb-3 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick CTA */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#vehicles"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D6AD60] hover:text-[#ECC880] transition-colors"
              >
                <span>View our available vehicle fleet</span>
                <CheckCircle2 className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { TRAVEL_CONFIG } from '../config/travelConfig';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const text = encodeURIComponent(
      "Hello Chinnu Travels, I am visiting your website and would like to enquire about vehicle booking."
    );
    window.open(`https://wa.me/${TRAVEL_CONFIG.whatsappRawNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative p-3 rounded-2xl bg-[#0D1B2E] border border-[#25D366]/40 shadow-2xl text-xs text-white max-w-[210px] animate-fadeIn hidden sm:flex items-start gap-2">
          <div>
            <p className="font-bold text-[#25D366] text-[11px] uppercase tracking-wider">Online Enquiry</p>
            <p className="text-gray-300 text-[11px] mt-0.5">Need a bus or car quote? Chat with us directly!</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-gray-400 hover:text-white p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Pulsing Floating Action Button */}
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
        aria-label="Chat on WhatsApp with Chinnu Travels"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white text-white drop-shadow-md" />
      </button>

    </div>
  );
}


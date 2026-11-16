import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export default function LightboxModal({ image, isOpen, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !image) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close image viewer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden border border-[#D6AD60]/40 shadow-2xl bg-navy-950">
            <img
              src={image.image}
              alt={image.title}
              className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
            />
            {/* Caption Overlay */}
            <div className="p-4 sm:p-6 bg-[#07111F]/90 backdrop-blur-md border-t border-[#D6AD60]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs uppercase font-bold text-[#D6AD60] tracking-wider">
                  {image.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  {image.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  {image.caption}
                </p>
              </div>
              <span className="text-xs text-gray-400 font-mono">
                Press ESC to close
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </AnimatePresence>
  );
}


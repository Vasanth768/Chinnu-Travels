import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Vehicles from './components/Vehicles';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedVehicleCategory, setSelectedVehicleCategory] = useState(null);

  const handleSelectVehicleForBooking = (category) => {
    setSelectedVehicleCategory(category);
  };

  const handleExploreVehicles = () => {
    const el = document.querySelector('#vehicles');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookWhatsAppFromHero = () => {
    const el = document.querySelector('#booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07111F] text-white selection:bg-[#D6AD60] selection:text-[#07111F] flex flex-col font-sans">
      
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 1. Full-screen Cinematic Hero */}
        <Hero
          onExploreVehicles={handleExploreVehicles}
          onBookWhatsApp={handleBookWhatsAppFromHero}
        />

        {/* 2. Company Introduction (About Us) */}
        <AboutUs />

        {/* 3. Luxury Vehicles Showcase */}
        <Vehicles
          onSelectVehicleForBooking={handleSelectVehicleForBooking}
        />

        {/* 4. Tailored Tourist Transportation Services */}
        <Services />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Travel & Fleet Gallery with Lightbox */}
        <Gallery />

        {/* 7. WhatsApp Booking & Enquiry System (Core) */}
        <BookingSection
          preselectedVehicle={selectedVehicleCategory}
        />

        {/* 8. Contact & Google Maps Section */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

    </div>
  );
}


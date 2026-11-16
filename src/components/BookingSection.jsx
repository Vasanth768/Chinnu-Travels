import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  MessageCircle, 
  User, 
  Phone, 
  MapPin, 
  Calendar, 
  Car, 
  Users, 
  FileText, 
  CheckCircle,
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TRAVEL_CONFIG } from '../config/travelConfig';

export default function BookingSection({ preselectedVehicle }) {
  const [formData, setFormData] = useState({
    customerName: '',
    mobileNumber: '',
    pickupLocation: 'Pethappampatti',
    destination: '',
    travelDate: '',
    returnDate: '',
    isRoundTrip: false,
    vehicleType: 'Tourist Buses',
    passengers: '1',
    requirements: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update vehicleType if a preselected vehicle was passed from the vehicle cards
  useEffect(() => {
    if (preselectedVehicle) {
      setFormData((prev) => ({
        ...prev,
        vehicleType: preselectedVehicle
      }));
    }
  }, [preselectedVehicle]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setErrorMessage('');
  };

  // Generate formatted WhatsApp message text
  const generateWhatsAppMessage = () => {
    const tripType = formData.isRoundTrip && formData.returnDate ? 'Round Trip' : 'One Way / Drop';
    const returnInfo = formData.isRoundTrip && formData.returnDate ? `\n• *Return Date:* ${formData.returnDate}` : '';
    const notesInfo = formData.requirements ? `\n• *Special Notes:* ${formData.requirements}` : '';

    return (
      `*NEW TRAVEL ENQUIRY - CHINNU TRAVELS*\n` +
      `───────────────────────────────\n` +
      `• *Customer Name:* ${formData.customerName || 'Not specified'}\n` +
      `• *Mobile Number:* ${formData.mobileNumber || 'Not specified'}\n` +
      `• *Pickup Location:* ${formData.pickupLocation || 'Not specified'}\n` +
      `• *Destination:* ${formData.destination || 'Not specified'}\n` +
      `• *Trip Type:* ${tripType}\n` +
      `• *Travel Date:* ${formData.travelDate || 'Not specified'}${returnInfo}\n` +
      `• *Vehicle Preferred:* ${formData.vehicleType}\n` +
      `• *Passengers Count:* ${formData.passengers || '1'}` +
      `${notesInfo}\n` +
      `───────────────────────────────\n` +
      `_Sent via Chinnu Travels Website Booking System_`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.customerName.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.mobileNumber.trim()) {
      setErrorMessage('Please enter your contact mobile number.');
      return;
    }
    if (!formData.destination.trim()) {
      setErrorMessage('Please enter your trip destination.');
      return;
    }
    if (!formData.travelDate) {
      setErrorMessage('Please select your planned travel date.');
      return;
    }

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#D6AD60', '#ECC880', '#25D366', '#FFFFFF']
      });
    } catch (err) {
      // Ignore if canvas-confetti is not loaded
    }

    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${TRAVEL_CONFIG.whatsappRawNumber}?text=${encoded}`;

    setSubmitted(true);

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <section id="booking" className="py-24 sm:py-32 bg-[#07111F] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-[#D6AD60]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-[#0D1B2E] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1B2E] border border-[#D6AD60]/30 text-[#D6AD60] text-xs font-semibold tracking-wider uppercase mb-4">
            Direct & Effortless
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-white tracking-tight">
            WhatsApp Travel Enquiry
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Submit your trip details below. Your enquiry will be instantly transferred to our WhatsApp team in Pethappampatti for vehicle availability and prompt pricing.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D6AD60] to-transparent mx-auto mt-6" />
        </div>

        {/* 2-Column Booking Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Live WhatsApp Message Preview & Instructions */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Process Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1B2E]/80 backdrop-blur-md border border-[#D6AD60]/30 shadow-card-elevated">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D6AD60]" />
                <span>How Our Booking Works</span>
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#D6AD60]/20 border border-[#D6AD60] flex items-center justify-center text-xs font-bold text-[#D6AD60] flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Fill Trip Itinerary</h4>
                    <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                      Enter pickup, destination, dates, and vehicle preference in the form.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#D6AD60]/20 border border-[#D6AD60] flex items-center justify-center text-xs font-bold text-[#D6AD60] flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Instant WhatsApp Transfer</h4>
                    <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                      Click the button to automatically open WhatsApp with your formatted enquiry.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#D6AD60]/20 border border-[#D6AD60] flex items-center justify-center text-xs font-bold text-[#D6AD60] flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct Tariff & Confirmation</h4>
                    <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                      Our coordinator verifies bus/car availability and provides the best custom quote.
                    </p>
                  </div>
                </div>
              </div>

              {/* Note on Transparency */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-3 text-xs text-gray-400">
                <HelpCircle className="w-4 h-4 text-[#D6AD60] flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-gray-200">Enquiry Only:</strong> Submitting sends an enquiry to Chinnu Travels. Bookings are confirmed upon mutual agreement on dates and tariff.
                </p>
              </div>
            </div>

            {/* Live Message Preview Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#101820] to-[#07111F] border border-white/10 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#25D366] flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 fill-[#25D366]" />
                  Live WhatsApp Message Preview
                </span>
                <span className="text-[11px] text-gray-400">Updates live</span>
              </div>

              <div className="p-4 rounded-xl bg-[#07111F] border border-white/5 font-mono text-[11px] sm:text-xs text-gray-300 whitespace-pre-wrap leading-relaxed shadow-inner overflow-x-auto max-h-56">
                {generateWhatsAppMessage()}
              </div>

              <p className="text-[11px] text-gray-400 mt-3 text-center">
                Destination number: <strong className="text-[#D6AD60] font-mono">{TRAVEL_CONFIG.whatsappNumber}</strong>
              </p>
            </div>

          </div>

          {/* Right Column: The Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0D1B2E]/90 backdrop-blur-xl border border-[#D6AD60]/40 shadow-card-elevated relative">
              
              <div className="mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Enter Travel Details
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  All fields marked with an asterisk (<span className="text-[#D6AD60]">*</span>) are essential for accurate quotation.
                </p>
              </div>

              {/* Error Alert if any */}
              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-900/40 border border-red-500/50 text-red-200 text-xs sm:text-sm">
                  {errorMessage}
                </div>
              )}

              {/* Success Alert if submitted */}
              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-900/40 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Enquiry generated! Opening WhatsApp with your itinerary details now.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Name and Mobile Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-200 uppercase tracking-wider mb-2">
                      Customer Name <span className="text-[#D6AD60]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950/80 border border-white/10 focus:border-[#D6AD60] focus:ring-1 focus:ring-[#D6AD60] text-sm text-white placeholder-gray-500 outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-200 uppercase tracking-wider mb-2">
                      Mobile Number <span className="text-[#D6AD60]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="e.g. 98765 43210"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950/80 border border-white/10 focus:border-[#D6AD60] focus:ring-1 focus:ring-[#D6AD60] text-sm text-white placeholder-gray-500 outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Pickup and Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-200 uppercase tracking-wider mb-2">
                      Pickup Location <span className="text-[#D6AD60]">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-[#D6AD60] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        placeholder="e.g. Pethappampatti / Udumalpet"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950/80 border border-white/10 focus:border-[#D6AD60] focus:ring-1 focus:ring-[#D6AD60] text-sm text-white placeholder-gray-500 outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-200 uppercase tracking-wider mb-2">
                      Trip Destination <span className="text-[#D6AD60]">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="e.g. Ooty, Kodaikanal, Rameshwaram"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950/80 border border-white/10 focus:border-[#D6AD60] focus:ring-1 focus:ring-[#D6AD60] text-sm text-white placeholder-gray-500 outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Travel Date & Round Trip Checkbox */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-200 uppercase tracking-wider mb-2">
                      Travel Date <span className="text-[#D6AD60]">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950/80 border border-white/10 focus:border-[#D6AD60] focus:ring-1 focus:ring-[#D6AD60] text-sm text-white outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-gray-200 uppercase tracking-wider">
                        Return Date (Optional)
                      </label>
                      <label className="inline-flex items-center gap-1.5 text-xs text-[#D6AD60] cursor-pointer">
                        <input
                          type="checkbox"
                          name="isRoundTrip"
                          checked={formData.isRoundTrip}
                          onChange={handleChange}
                          className="rounded text-[#D6AD60] focus:ring-0 bg-navy-950"
                        />
                        <span>Round Trip</span>
                      </label>
                    </div>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleChange}
                        disabled={!formData.isRoundTrip}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950/80 border text-sm text-white outline-none transition-colors ${
                          formData.isRoundTrip
                            ? 'border-white/10 focus:border-[#D6AD60]'
                            : 'border-white/5 opacity-40 cursor-not-allowed'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Row 4: Vehicle Type & Passenger Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-200 uppercase tracking-wider mb-2">
                      Vehicle Type <span className="text-[#D6AD60]">*</span>
                    </label>
                    <div className="relative">
                      <Car className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950/80 border border-white/10 focus:border-[#D6AD60] focus:ring-1 focus:ring-[#D6AD60] text-sm text-white outline-none transition-colors appearance-none"
                      >
                        <option value="Tourist Buses" className="bg-[#07111F] text-white">Tourist Buses (32 - 54 Seater)</option>
                        <option value="Luxury Cars" className="bg-[#07111F] text-white">Luxury Cars (Sedans / Innova / SUVs)</option>
                        <option value="Tempo Traveller" className="bg-[#07111F] text-white">Tempo Traveller (12 - 20 Seater)</option>
                        <option value="Omni" className="bg-[#07111F] text-white">Omni Van (Local & Group Rental)</option>
                        <option value="Multiple Vehicles" className="bg-[#07111F] text-white">Multiple Fleet (For Wedding / Corporate)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-200 uppercase tracking-wider mb-2">
                      Number of Passengers <span className="text-[#D6AD60]">*</span>
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="number"
                        min="1"
                        max="200"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        placeholder="e.g. 15"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950/80 border border-white/10 focus:border-[#D6AD60] focus:ring-1 focus:ring-[#D6AD60] text-sm text-white outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Row 5: Additional Requirements */}
                <div>
                  <label className="block text-xs font-bold text-gray-200 uppercase tracking-wider mb-2">
                    Additional Requirements (Optional)
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <textarea
                      rows="3"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      placeholder="e.g. Need AC bus with sound system for college trip, 3 days tour, 2 night halts, etc."
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950/80 border border-white/10 focus:border-[#D6AD60] focus:ring-1 focus:ring-[#D6AD60] text-sm text-white placeholder-gray-500 outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-3 py-4 px-8 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-black text-base sm:text-lg tracking-wide shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <MessageCircle className="w-6 h-6 fill-black text-black" />
                  <span>Send Enquiry via WhatsApp</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Footer disclaimer */}
                <p className="text-[11px] text-gray-400 text-center leading-relaxed">
                  🔒 By clicking, you will be redirected to WhatsApp to chat with our Pethappampatti team directly. No upfront payment is required on this website.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


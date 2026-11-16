/**
 * CHINNU TRAVELS - Central Business Configuration
 * 
 * Update your WhatsApp number, contact details, and business settings here.
 * Any change made here updates the entire website automatically.
 */

export const TRAVEL_CONFIG = {
  // Business Identity
  businessName: "CHINNU TRAVELS",
  tagline: "YOUR JOURNEY, OUR RESPONSIBILITY",
  subtitle: "Travel Beyond Boundaries. Experience Comfort with Chinnu Travels.",
  
  // PRIMARY WHATSAPP CONFIGURATION
  // Replace the placeholder below with your 10-digit WhatsApp phone number with country code (e.g. "919876543210")
  // Do not include '+' or spaces inside the whatsappRawNumber for the wa.me URL
  whatsappNumber: "+91 98765 43210", // Display format
  whatsappRawNumber: "919876543210", // Formatted for wa.me link (replace with actual number)
  phoneDisplay: "+91 98765 43210",
  altPhone: "+91 98765 43211",
  email: "chinnutravels.cbe@gmail.com",

  // Location & Address
  location: {
    village: "Pethappampatti",
    taluk: "Udumalpet Taluk",
    district: "Tiruppur District",
    state: "Tamil Nadu",
    country: "India",
    pincode: "642205",
    fullAddress: "Pethappampatti, Udumalpet Taluk, Tiruppur District, Tamil Nadu 642205, India",
    landmark: "Near Bus Stand / Main Road Junction, Pethappampatti",
    // Embed URL for Google Maps
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15682.164344406566!2d77.1687595!3d10.702008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9d05d5b7a0f4b%3A0xa237c15e8b61c161!2sPethappampatti%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Pethappampatti,+Tiruppur,+Tamil+Nadu"
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Vehicles", href: "#vehicles" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-choose-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],

  // Vehicle Categories & Fleet Data
  vehicles: [
    {
      id: "tourist-buses",
      name: "Luxury Tourist Bus",
      category: "Tourist Buses",
      tagline: "Ultimate Comfort for Large Group Journeys & Tours",
      capacity: "32 to 54 Seats (AC / Non-AC available)",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
      description: "Premium high-deck executive tourist buses fitted with plush pushback reclining seats, panoramic tinted windows, high-fidelity audio-video entertainment, dual-blower air conditioning, and massive luggage bays.",
      features: [
        "Reclining Push-Back Seats",
        "Full Air Conditioning (Climate Controlled)",
        "Premium Music & Video Entertainment",
        "Expansive Under-Floor Luggage Space",
        "USB Charging Ports & Reading Lamps"
      ],
      idealFor: "Pilgrimage groups, school/college tours, large wedding parties, corporate annual outings"
    },
    {
      id: "luxury-cars",
      name: "Premium Sedans & SUVs",
      category: "Luxury Cars",
      tagline: "Elegance, Privacy & First-Class Comfort",
      capacity: "4 to 7 Passengers",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      description: "Chauffeur-driven luxury sedans and spacious SUVs (Innova Crysta, Dzire, Ertiga). Impeccably maintained interiors, refined smooth ride, and complete privacy for business delegates, family vacations, and VIP guest transfers.",
      features: [
        "Chilled Dual-Zone Air Conditioning",
        "Plush Leather Upholstery",
        "Ample Boot Space for Luggage",
        "Clean, Sanitized & Smoke-Free Cabin",
        "Courteous, Route-Knowledgeable Drivers"
      ],
      idealFor: "Outstation family trips, business executives, airport pickup/drop, wedding VIP transportation"
    },
    {
      id: "tempo-traveller",
      name: "Luxury Tempo Traveller",
      category: "Tempo Traveller",
      tagline: "The Preferred Choice for Extended Family & Friends Groups",
      capacity: "12 to 20 Seats (Luxury Configuration)",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
      description: "The gold standard for medium-sized group travel. Offers high headroom, spacious gangways, individual armrests, and hill-station optimized power. Exceptional stability across mountain roads like Valparai, Ooty, and Kodaikanal.",
      features: [
        "Individual Recliner Seats with Headrests",
        "Surround Sound Audio System & LED TV",
        "Powerful Air Conditioning with Personal Vents",
        "Wide Curtained Windows for Scenic Views",
        "Dedicated Rear Luggage Trunk"
      ],
      idealFor: "Hill-station trips, family getaways, temple darshans, bachelor trips, photography tours"
    },
    {
      id: "omni-rentals",
      name: "Omni Van Services",
      category: "Omni",
      tagline: "Agile, Economical & Convenient Local Travel",
      capacity: "5 to 7 Passengers",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      description: "Reliable, agile, and practical transportation for short-distance family transit, rural connectivity around Tiruppur, market visits, hospital visits, and economical town commuting.",
      features: [
        "Compact Size for Narrow Village Roads",
        "Quick & Easy Boarding for Seniors",
        "Fuel-Efficient & Highly Cost-Effective",
        "Flexible Local Hourly & Point-to-Point Hires",
        "Spacious Utility Space for Packages/Bags"
      ],
      idealFor: "Local town errands, village ceremonies, hospital visits, quick market travel, daily rentals"
    }
  ],

  // Services Offered
  services: [
    {
      id: "family-tours",
      title: "Family Tours",
      tagline: "Cherished Memories with Complete Peace of Mind",
      description: "Specially tailored holiday travel packages for families. From the cool hills of Ooty and Kodaikanal to historic temples across Tamil Nadu and Kerala, travel safely with your loved ones in total comfort.",
      icon: "Users",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tourist-trips",
      title: "Tourist Trips",
      tagline: "Explore Southern India's Most Spectacular Sights",
      description: "Custom tourism routes covering hill stations, wildlife sanctuaries, scenic waterfalls, and heritage monuments. Drivers familiar with all major tourist sightseeing viewpoints and scenic photography stops.",
      icon: "Compass",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "outstation-travel",
      title: "Outstation Travel",
      tagline: "Seamless Interstate & Intercity Journeys",
      description: "Long-distance travel across Tamil Nadu, Kerala, Karnataka, and beyond. Verified, experienced highway drivers ensuring safety, timeliness, and restful comfort over journeys spanning hundreds of kilometers.",
      icon: "MapPin",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "local-travel",
      title: "Local Travel",
      tagline: "Prompt Transportation in & around Tiruppur District",
      description: "Dependable local transit services across Pethappampatti, Udumalpet, Pollachi, Dharapuram, and Tiruppur. Flexible hourly packages or point-to-point drop-offs whenever you need dependable mobility.",
      icon: "Clock",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "wedding-transportation",
      title: "Wedding & Function Transportation",
      tagline: "Dignified Guest Travel for Celebrations",
      description: "End-to-end guest logistics for auspicious marriages, betrothals, housewarmings, and festive ceremonies. Coordinated fleet arrivals ensuring every relative and guest reaches the venue on time with grace.",
      icon: "Sparkles",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "corporate-transportation",
      title: "Corporate Transportation",
      tagline: "Punctual, Professional Business Mobility",
      description: "Dependable executive travel for corporate team outings, industrial visits to Tiruppur textile hubs, client transfers, and executive conferences with GST-compliant billing and premium chauffeur etiquette.",
      icon: "Briefcase",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "airport-transfers",
      title: "Airport Pickup & Drop",
      tagline: "Zero Stress, On-Time Flight Connections",
      description: "Round-the-clock scheduled transfers to and from Coimbatore International Airport (CJB), Tiruchirappalli Airport (TRZ), and Kochi International Airport (COK). Flight tracking and timely arrivals.",
      icon: "Plane",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Why Choose Us Pillars
  whyChooseUs: [
    {
      title: "Comfortable Travel",
      subtitle: "Relax in pristine, air-conditioned luxury",
      description: "Every bus, car, and traveller in our fleet undergoes stringent maintenance, interior sanitization, and thorough inspection before every journey to ensure a peaceful trip.",
      icon: "ShieldCheck"
    },
    {
      title: "Convenient Booking",
      subtitle: "Instant WhatsApp booking directly with our team",
      description: "No tedious registration forms or waiting periods. Send your travel dates and route directly via WhatsApp to receive prompt vehicle options and transparent quotes.",
      icon: "MessageSquareQuote"
    },
    {
      title: "Multiple Vehicle Options",
      subtitle: "From compact Omni vans to 50+ seater tourist buses",
      description: "Whether you need a swift sedan for an airport run, a Tempo Traveller for extended family, or luxury buses for large marriage groups, we have the right vehicle.",
      icon: "Layers"
    },
    {
      title: "Flexible Travel Enquiries",
      subtitle: "Custom schedules tailored to your itinerary",
      description: "Have a multi-stop itinerary or special sightseeing stops? We craft flexible routes that cater to your pace, meal stops, and special timing preferences.",
      icon: "CalendarRange"
    },
    {
      title: "Customer-Focused Service",
      subtitle: "Your safety and happiness is our core priority",
      description: "Our licensed drivers bring deep route familiarity across Tamil Nadu and neighbouring states, driving with care and treating your guests with warmth and respect.",
      icon: "HeartHandshake"
    }
  ],

  // Travel Gallery Items
  gallery: [
    {
      id: 1,
      title: "Executive Luxury Tourist Coach",
      category: "Buses",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
      caption: "High-deck luxury coach ready for outstation group pilgrimage and tour"
    },
    {
      id: 2,
      title: "Scenic Western Ghats Highway",
      category: "Scenic Routes",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      caption: "Misty mountain roads on the route towards Ooty and Valparai"
    },
    {
      id: 3,
      title: "Premium Family Travel Sedan",
      category: "Cars & Travellers",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      caption: "Spotless chauffeur-driven luxury vehicle for executive trips"
    },
    {
      id: 4,
      title: "Hill-Station Journey Tempo Traveller",
      category: "Cars & Travellers",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
      caption: "Comfortable spacious gangway traveller cruising through winding mountain roads"
    },
    {
      id: 5,
      title: "Coastal Sunset Route in South India",
      category: "Scenic Routes",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      caption: "Unforgettable holiday journeys across South Indian coastal and heritage corridors"
    },
    {
      id: 6,
      title: "Spacious Executive Bus Interiors",
      category: "Buses",
      image: "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?auto=format&fit=crop&w=1200&q=80",
      caption: "Ergonomic reclining seats with individual AC vents and mood lighting"
    },
    {
      id: 7,
      title: "Omni & Multi-Utility Vans",
      category: "Cars & Travellers",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      caption: "Convenient local point-to-point and function transport"
    },
    {
      id: 8,
      title: "Heritage Temple Tour Destinations",
      category: "Scenic Routes",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80",
      caption: "Spiritual pilgrimage expeditions across majestic Tamil Nadu temples"
    }
  ],

  // Cinematic Video Sources
  // High quality driving / highway / scenic video
  heroVideo: {
    // Highly reliable, fast loading CDN video of driving on highway through scenic greenery
    url: "https://assets.mixkit.co/videos/preview/mixkit-car-traveling-on-a-highway-at-sunset-34533-large.mp4",
    fallbackPoster: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=85"
  }
};


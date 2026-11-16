# CHINNU TRAVELS – Premium Cinematic Travel Website

A luxury, cinematic, fully responsive website for **CHINNU TRAVELS**, premier tourist transportation based in **Pethappampatti, Tiruppur District, Tamil Nadu, India**.

![Chinnu Travels Banner](https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Brand Highlights & Design Direction
- **Cinematic Experience**: Autoplay muted video hero with luxury dark gradient vignette overlays.
- **Color Palette**:
  - Deep Midnight Navy: `#07111F`
  - Luxury Gold: `#D6AD60`
  - Dark Charcoal: `#101820`
  - Pure White: `#FFFFFF`
- **Fleet Showcase**: Tourist Buses, Luxury Cars, Tempo Travellers, and Omni Vans.
- **7 Core Services**: Family Tours, Tourist Trips, Outstation Travel, Local Travel, Wedding Transportation, Corporate Travel, and Airport Transfers.
- **Gallery & Lightbox**: Interactive categorized gallery with full-screen lightbox modal.
- **Direct WhatsApp Booking Engine**: Live formatted WhatsApp enquiry message generator that dispatches straight to the business operator via `wa.me`.

---

## 📱 How to Configure WhatsApp Number

All business contact details and WhatsApp numbers are managed from a single central configuration file:
👉 **`src/config/travelConfig.js`**

```javascript
export const TRAVEL_CONFIG = {
  // Replace with your 10-digit number with 91 country code (e.g. 919876543210)
  whatsappNumber: "+91 98765 43210", // Display on screen
  whatsappRawNumber: "919876543210", // wa.me target (no spaces or '+' sign)
  phoneDisplay: "+91 98765 43210",
  // ...
};
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The application will start at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```

---

## 🛠 Tech Stack
- **Framework**: React 18
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Confetti**: Canvas Confetti
- **Typography**: Cinzel, Plus Jakarta Sans, Outfit

---

## 📍 Business Location
**CHINNU TRAVELS**  
Pethappampatti, Udumalpet Taluk,  
Tiruppur District, Tamil Nadu – 642205, India.

---

*Designed with care by AVX Software.*


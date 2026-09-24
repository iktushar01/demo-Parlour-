import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { SALON_DATA } from '../data/salonData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#965F52] font-semibold mb-2">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#242120] tracking-tight mb-4">
            Visit Our Lounge
          </h2>
          <p className="text-base sm:text-lg text-[#615752] leading-relaxed">
            Conveniently situated in Uttara, Dhaka. Walk-ins welcome for consultations, or reach out to reserve your private suite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Contact Cards & WhatsApp Action (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Location Card */}
            <div className="p-6 rounded-xl bg-[#F6EFEB] border border-[#E2D5C9] flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#D5C2B3] flex items-center justify-center text-[#965F52] shrink-0 mt-1">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#8A7C73] mb-1">
                  Visit Us
                </h3>
                <p className="font-serif text-lg font-bold text-[#242120]">
                  House 12, Road 5
                </p>
                <p className="text-sm text-[#5C524C]">
                  Sector 4, Uttara, Dhaka, Bangladesh
                </p>
                <p className="text-xs text-[#8A7D75] mt-1">
                  (Near Rabindra Sarani & Uttara Friends Club)
                </p>
              </div>
            </div>

            {/* Call Card */}
            <div className="p-6 rounded-xl bg-[#F6EFEB] border border-[#E2D5C9] flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#D5C2B3] flex items-center justify-center text-[#965F52] shrink-0 mt-1">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#8A7C73] mb-1">
                  Call For Inquiries
                </h3>
                <a
                  href={`tel:${SALON_DATA.phone}`}
                  className="font-serif text-lg font-bold text-[#242120] hover:text-[#965F52] transition-colors block"
                >
                  {SALON_DATA.phone}
                </a>
                <p className="text-xs text-[#5C524C] mt-1">
                  Dedicated concierge service during salon hours
                </p>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="p-6 rounded-xl bg-[#F6EFEB] border border-[#E2D5C9] flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#D5C2B3] flex items-center justify-center text-[#965F52] shrink-0 mt-1">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#8A7C73] mb-1">
                  Opening Hours
                </h3>
                <div className="text-sm text-[#38312D] space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday – Thursday:</span>
                    <span className="font-bold tabular-nums">10:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between text-[#8A5C50]">
                    <span className="font-medium">Friday:</span>
                    <span className="font-bold tabular-nums">2:00 PM – 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Us CTA Button */}
            <a
              href={`https://wa.me/${SALON_DATA.whatsappNumber}?text=Hello%20LUMÉA%20Beauty%20Lounge%2C%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20bridal%20packages.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 active:scale-98"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>

          {/* Right Column: Google Maps Style Interactive Location Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[380px] rounded-2xl overflow-hidden border border-[#D9CABE] bg-[#EDE4DC] shadow-lg flex flex-col justify-between p-6">
              {/* Styled Map Background Representation of Uttara Dhaka */}
              <div className="absolute inset-0 bg-[#E8E1D9] opacity-90">
                {/* Stylized street grid SVG */}
                <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#BAAAA0" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Diagonal avenues */}
                  <line x1="0" y1="100" x2="800" y2="450" stroke="#FAF8F5" strokeWidth="12" />
                  <line x1="200" y1="0" x2="350" y2="600" stroke="#FAF8F5" strokeWidth="10" />
                  <line x1="100" y1="350" x2="700" y2="150" stroke="#E3D0C2" strokeWidth="6" />
                </svg>
              </div>

              {/* Top Map Card Header */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-md border border-[#E0D2C5] max-w-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#B87D6E] text-white flex items-center justify-center">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#242120]">
                      LUMÉA BEAUTY LOUNGE
                    </h4>
                    <p className="text-[11px] text-[#70645E]">
                      House 12, Road 5, Sector 4, Uttara, Dhaka
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Center Pin */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  className="p-3 bg-[#242120] text-white rounded-full shadow-2xl border-4 border-white flex items-center justify-center"
                >
                  <MapPin className="w-6 h-6 text-[#E8D4C8]" />
                </motion.div>
                <div className="mt-2 bg-[#242120]/90 text-white px-3 py-1 rounded-md text-xs font-semibold tracking-wide shadow-md">
                  LUMÉA Luxury Lounge
                </div>
              </div>

              {/* Bottom Card Controls */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-md border border-[#E0D2C5]">
                <div className="text-xs text-[#574E49] text-center sm:text-left">
                  <span className="font-semibold text-[#242120]">Parking Available:</span> Valet and dedicated guest parking on Road 5.
                </div>
                <a
                  href="https://maps.google.com/?q=Uttara+Sector+4+Dhaka+Bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#242120] hover:bg-[#965F52] text-white text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer shrink-0"
                >
                  <span>Open In Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

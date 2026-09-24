import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle, ArrowUp } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Bridal Packages', href: '#bridal' },
    { label: 'Our Work Gallery', href: '#gallery' },
    { label: 'About LUMÉA', href: '#about' },
    { label: 'Book Appointment', href: '#appointment' },
    { label: 'Contact & Map', href: '#contact' },
  ];

  return (
    <footer className="bg-[#1C1A19] text-[#E8DFD7] pt-16 pb-12 border-t border-[#312C2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#312C2A]">
          {/* Brand & Description (4 cols) */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-block mb-4">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#FAF8F5] uppercase block">
                {SALON_DATA.shortName}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#B87D6E] font-semibold -mt-1 block">
                BEAUTY LOUNGE
              </span>
            </a>

            <p className="text-sm text-[#A89E97] leading-relaxed mb-6 max-w-sm">
              Where Beauty Meets Confidence. Dhaka&apos;s premier destination for bespoke bridal makeup, high-performance hair spa treatments, and radiant skincare.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-9 h-9 rounded-full bg-[#2A2624] hover:bg-[#B87D6E] text-[#D8CCC4] hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-9 h-9 rounded-full bg-[#2A2624] hover:bg-[#B87D6E] text-[#D8CCC4] hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${SALON_DATA.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="w-9 h-9 rounded-full bg-[#2A2624] hover:bg-[#25D366] text-[#D8CCC4] hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A89E97]">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Visit & Contact
            </h4>
            <div className="space-y-3 text-sm text-[#A89E97]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B87D6E] shrink-0 mt-0.5" />
                <span>House 12, Road 5, Sector 4, Uttara, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B87D6E] shrink-0" />
                <a href={`tel:${SALON_DATA.phone}`} className="hover:text-white">
                  {SALON_DATA.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B87D6E] shrink-0 mt-0.5" />
                <div>
                  <p>Sat – Thu: 10:00 AM – 8:00 PM</p>
                  <p className="text-xs text-[#8A7F79]">Fri: 2:00 PM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Notice (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Demo Client Website
            </h4>
            <p className="text-xs text-[#8F847D] leading-relaxed mb-4">
              Designed as a turnkey showcase for beauty parlours and salons in Bangladesh seeking modern digital presence.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#B87D6E] hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A7F79] gap-4">
          <p>© 2026 LUMÉA Beauty Lounge. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Uttara, Dhaka · Where Beauty Meets Confidence
          </p>
        </div>
      </div>
    </footer>
  );
};

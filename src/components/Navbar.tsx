import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'bridal', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Bridal', href: '#bridal', id: 'bridal' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-b border-[#E8DFD7]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87D6E] rounded-sm"
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#242120] uppercase transition-colors group-hover:text-[#B87D6E]">
              {SALON_DATA.shortName}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#7D736D] font-medium -mt-1">
              BEAUTY LOUNGE
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-xs lg:text-sm tracking-wider uppercase transition-colors duration-200 py-1 ${
                  activeSection === link.id
                    ? 'text-[#B87D6E] font-semibold'
                    : 'text-[#5C5552] hover:text-[#242120] font-medium'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B87D6E] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBookClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#242120] hover:bg-[#B87D6E] active:scale-[0.98] transition-all duration-200 rounded-sm shadow-sm cursor-pointer"
            >
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#242120] hover:text-[#B87D6E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87D6E] rounded-sm cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#FAF8F5] border-b border-[#E8DFD7] shadow-xl px-6 py-6 transition-all duration-300 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-base uppercase tracking-wider py-1.5 transition-colors ${
                  activeSection === link.id
                    ? 'text-[#B87D6E] font-semibold pl-2 border-l-2 border-[#B87D6E]'
                    : 'text-[#4A4340] hover:text-[#242120]'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[#E8DFD7] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#B87D6E] hover:bg-[#965F52] transition-colors rounded-sm cursor-pointer shadow-sm"
              >
                Book Appointment
              </button>

              <div className="flex items-center justify-between text-xs text-[#6C635E] pt-2">
                <a
                  href={`tel:${SALON_DATA.phone}`}
                  className="inline-flex items-center gap-1.5 hover:text-[#242120]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B87D6E]" />
                  <span>{SALON_DATA.displayPhone}</span>
                </a>
                <a
                  href={`https://wa.me/${SALON_DATA.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

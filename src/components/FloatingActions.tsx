import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, Calendar } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface FloatingActionsProps {
  onBookClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onBookClick }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-11 h-11 rounded-full bg-white/95 text-[#242120] hover:text-[#965F52] border border-[#DDD0C4] shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Chat Button */}
      <a
        href={`https://wa.me/${SALON_DATA.whatsappNumber}?text=Hello%20LUMÉA%20Beauty%20Lounge%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide uppercase hidden sm:inline-block">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
};

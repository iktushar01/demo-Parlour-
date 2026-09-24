import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/salonData';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Lightbox Container (prevent click propagation) */}
      <div
        className="relative max-w-5xl w-full bg-[#1A1817] text-white rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame */}
        <div className="relative md:w-3/5 bg-black flex items-center justify-center min-h-[350px] md:min-h-[500px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[75vh]"
            referrerPolicy="no-referrer"
          />

          {/* Prev / Next Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Details Sidebar */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#221F1E]">
          <div>
            <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#B87D6E] font-semibold mb-3">
              <span>{item.categoryLabel}</span>
              <span className="text-stone-400 tabular-nums font-mono text-[11px]">
                {currentIndex + 1} / {items.length}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#FAF8F5] mb-4">
              {item.title}
            </h3>

            <p className="text-sm text-stone-300 leading-relaxed font-normal">
              {item.description}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-stone-800 flex items-center justify-between">
            <span className="text-xs text-stone-400">
              LUMÉA Lounge Portfolio · Uttara
            </span>
            <button
              onClick={onClose}
              className="text-xs uppercase tracking-wider text-white hover:text-[#B87D6E] transition-colors font-medium cursor-pointer"
            >
              Close View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

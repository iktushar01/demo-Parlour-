import React, { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SALON_DATA, GalleryItem } from '../data/salonData';
import { LightboxModal } from './LightboxModal';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'bridal' | 'makeup' | 'hair' | 'nails'>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'makeup', label: 'Makeup' },
    { id: 'hair', label: 'Hair' },
    { id: 'nails', label: 'Nails' },
  ] as const;

  const filteredItems = selectedCategory === 'all'
    ? SALON_DATA.gallery
    : SALON_DATA.gallery.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F5EFE9] border-t border-[#E2D6CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#965F52] font-semibold mb-2">
            Visual Portfolio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#242120] tracking-tight mb-4">
            Our Work
          </h2>
          <p className="text-base sm:text-lg text-[#615752] leading-relaxed">
            A glimpse of the looks we&apos;ve created for Bengali brides, celebrations, and radiant transformations.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 inline-flex p-1 bg-[#E8DDD3] rounded-md border border-[#D5C6BA] max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-sm cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-white text-[#242120] shadow-xs'
                    : 'text-[#6C635E] hover:text-[#242120]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry-style Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#EDE4DC] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Aspect Box */}
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Hover Overlay with Editorial Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#D8B4A6] mb-1 font-semibold">
                    <Sparkles className="w-3 h-3" />
                    <span>{item.categoryLabel}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold leading-snug mb-2 text-[#FAF8F5]">
                    {item.title}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs text-white/90 font-medium">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Detail</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <LightboxModal
          item={activeItem}
          items={filteredItems}
          onClose={() => setActiveItem(null)}
          onNavigate={(newItem) => setActiveItem(newItem)}
        />
      </div>
    </section>
  );
};

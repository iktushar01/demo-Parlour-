import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SALON_DATA } from '../data/salonData';

interface BridalProps {
  onExplorePackages: () => void;
}

export const Bridal: React.FC<BridalProps> = ({ onExplorePackages }) => {
  const bridalHighlights = [
    { title: 'Bridal Makeup', detail: 'HD waterproof artistry customized for high-definition photography.' },
    { title: 'Hairstyling', detail: 'Intricate floral buns, traditional chignons, or romantic modern waves.' },
    { title: 'Saree Draping', detail: 'Impeccable pin-perfect Banarasi, Katan, or chiffon draping with veil setting.' },
    { title: 'Skin Preparation', detail: 'Hydrating dermal preparation for a luminous, non-cakey, 12-hour glow.' },
    { title: 'Trial Session', detail: 'Personalized pre-wedding look trial to perfect every shade and finish.' },
  ];

  return (
    <section id="bridal" className="py-20 md:py-28 bg-[#F3EFEA] border-y border-[#E2D7CC] relative overflow-hidden">
      {/* Background ambient accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[#E8DDD2]/60 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#DECFC4] aspect-[4/5] max-w-md mx-auto lg:max-w-none border-2 border-white/60">
                <img
                  src={SALON_DATA.images.bridalShowcase}
                  alt="Traditional South Asian bridal makeup and jewellery at LUMÉA Beauty Lounge"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-[#D8B4A6]" />
                    <span className="text-xs uppercase tracking-widest text-[#E8D4CB] font-semibold">
                      Master Bridal Suite
                    </span>
                  </div>
                  <p className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                    Every Bride Has A Unique Story
                  </p>
                </div>
              </div>

              {/* Decorative subtle border frame */}
              <div
                className="absolute -top-3 -left-3 w-28 h-28 border-t-2 border-l-2 border-[#B87D6E]/50 rounded-tl-xl pointer-events-none hidden sm:block"
                aria-hidden="true"
              />
            </motion.div>
          </div>

          {/* Right Column: Editorial Copy & Pillars (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#965F52] font-semibold mb-2">
                Haute Bridal Artistry
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#242120] tracking-tight mb-4">
                Your Day. Your Glow.
              </h2>
              <p className="text-base sm:text-lg text-[#5E5550] leading-relaxed mb-8 max-w-xl">
                From timeless elegance to modern glam, our bridal team creates a look that feels uniquely yours.
                We understand the heritage and grandeur of Bangladeshi weddings, ensuring you radiate regal confidence from your first photo to the final farewell.
              </p>

              {/* Bridal Pillars Checklist */}
              <div className="space-y-4 mb-10">
                {bridalHighlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EAE0D7] border border-[#D5C4B7] flex items-center justify-center text-[#965F52] shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#242120] tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6C635E]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <button
                  onClick={onExplorePackages}
                  className="px-8 py-4 bg-[#242120] hover:bg-[#965F52] text-white text-xs font-semibold tracking-widest uppercase transition-all duration-200 rounded-sm shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Explore Bridal Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowUpRight, Sparkles, MapPin, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { SALON_DATA } from '../data/salonData';

interface HeroProps {
  onBookClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreServices }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF8F5]">
      {/* Subtle organic decorative background gradients */}
      <div
        className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#F2E5DC]/60 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-[-100px] w-[450px] h-[450px] bg-[#E8DDD4]/50 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Copy & CTAs (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Subtle Location & Brand Trust Line (No pill, unboxed metadata) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C6D62] font-semibold mb-4"
            >
              <MapPin className="w-3.5 h-3.5 text-[#B87D6E]" />
              <span>Uttara, Dhaka</span>
              <span aria-hidden="true" className="text-[#C5B7AF]">·</span>
              <span>Exclusive Ladies Lounge</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-[#242120] leading-[1.08] text-balance mb-6"
            >
              Where Beauty <br />
              <span className="italic font-normal font-serif text-[#965F52]">Meets Confidence</span>
            </motion.h1>

            {/* Supporting Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#5A524D] leading-relaxed max-w-xl mb-8 font-normal"
            >
              Premium beauty, makeup and self-care services designed to make you feel your absolute best.
              Experience Dhaka&apos;s sanctuary for bespoke bridal transformations, hair rejuvenation, and luminous skin.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <button
                onClick={onBookClick}
                className="px-7 py-3.5 bg-[#242120] hover:bg-[#B87D6E] text-white text-xs font-semibold tracking-widest uppercase transition-all duration-200 rounded-sm shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer inline-flex items-center gap-2.5"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-7 py-3.5 border border-[#D5C7BD] hover:border-[#242120] text-[#242120] hover:text-black text-xs font-semibold tracking-widest uppercase transition-all duration-200 rounded-sm bg-white/50 backdrop-blur-xs hover:bg-white active:scale-[0.98] cursor-pointer"
              >
                Explore Services
              </button>
            </motion.div>

            {/* Trust Line with Typographic Separators (Strict Zero-Pill) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-[#EAE1D9] flex items-center flex-wrap gap-x-3 gap-y-2 text-xs sm:text-sm text-[#736862] font-medium"
            >
              <span className="text-[#36302D] font-semibold">Beauty</span>
              <span aria-hidden="true" className="text-[#B8A89E]">•</span>
              <span className="text-[#36302D] font-semibold">Makeup</span>
              <span aria-hidden="true" className="text-[#B8A89E]">•</span>
              <span className="text-[#36302D] font-semibold">Hair</span>
              <span aria-hidden="true" className="text-[#B8A89E]">•</span>
              <span className="text-[#36302D] font-semibold">Self Care</span>
              <span aria-hidden="true" className="text-[#B8A89E]">•</span>
              <span className="text-[#8C6D62]">Sector 4, Uttara</span>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Asset (5 cols on desktop) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Decorative Frame Outline */}
              <div
                className="absolute -inset-3 rounded-2xl border border-[#DECFC4] -rotate-1 pointer-events-none hidden sm:block"
                aria-hidden="true"
              />

              {/* Main Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#EDE4DC] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
                <img
                  src={SALON_DATA.images.hero}
                  alt="Bengali bride with radiant glowing makeup at LUMÉA Beauty Lounge"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle scrim for photography depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating In-Image Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-white/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-[#8C6D62]">
                        Signature Bridal Artistry
                      </p>
                      <p className="font-serif text-base font-semibold text-[#242120]">
                        Timeless Bangladeshi Elegance
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-amber-600 bg-[#FAF4ED] px-2 py-1 rounded">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-xs font-bold text-[#242120]">4.9</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle floating badge at top right */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 bg-[#FAF8F5] border border-[#DDCFC4] px-4 py-2 rounded-lg shadow-md"
              >
                <Sparkles className="w-4 h-4 text-[#B87D6E]" />
                <span className="text-xs font-semibold text-[#242120] tracking-wide">
                  Now Booking for Weddings
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

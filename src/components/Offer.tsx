import React from 'react';
import { Sparkles, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { SALON_DATA } from '../data/salonData';

interface OfferProps {
  onClaimOffer: (offerName: string) => void;
}

export const Offer: React.FC<OfferProps> = ({ onClaimOffer }) => {
  const { specialOffer } = SALON_DATA;

  return (
    <section className="py-16 md:py-20 bg-[#F4EDE6] border-y border-[#DFD1C4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl bg-[#FAF8F5] border-2 border-[#D5C2B3] p-8 sm:p-12 shadow-xl overflow-hidden"
        >
          {/* Subtle background decorative ornament */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-[#EFE3D8]/50 rounded-full blur-2xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#965F52] font-bold">
                  {specialOffer.badge}
                </span>
                <span aria-hidden="true" className="text-[#C2B2A7]">·</span>
                <span className="text-xs text-[#7A706A] flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#B87D6E]" />
                  <span>Limited-time offer</span>
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242120] tracking-tight mb-3">
                {specialOffer.title}
              </h3>

              <p className="text-sm sm:text-base text-[#5E5550] leading-relaxed mb-6 max-w-xl">
                {specialOffer.subtitle} Includes our signature enzyme radiant glow facial combined with intensive botanical steam hair therapy and scalp massage.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#4A433F] font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#965F52]" />
                  110 Mins Total Therapy
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#965F52]" />
                  Save ৳501
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#965F52]" />
                  Complimentary Herbal Tea
                </span>
              </div>
            </div>

            {/* Right Price & CTA Box (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center lg:border-l lg:border-[#E8DDD2] lg:pl-8">
              <div className="mb-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-base sm:text-lg text-[#8C8079] line-through font-semibold tabular-nums">
                    {specialOffer.oldPrice}
                  </span>
                  <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242120] tabular-nums tracking-tight">
                    {specialOffer.newPrice}
                  </span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#965F52] font-bold block mt-1">
                  Exclusive Package Rate
                </span>
              </div>

              <button
                onClick={() => onClaimOffer(specialOffer.serviceKey)}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#965F52] hover:bg-[#7D4D42] text-white text-xs font-semibold tracking-widest uppercase transition-all duration-200 rounded-sm shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Claim Offer</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-[#80756F] mt-2.5 text-center lg:text-right">
                {specialOffer.validity}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

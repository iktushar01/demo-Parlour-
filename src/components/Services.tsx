import React, { useState } from 'react';
import { Scissors, Sparkles, Wand2, Heart, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SALON_DATA, ServiceItem } from '../data/salonData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hair' | 'skin' | 'makeup' | 'nails'>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair' },
    { id: 'skin', label: 'Skin & Facial' },
    { id: 'makeup', label: 'Makeup' },
    { id: 'nails', label: 'Nails' },
  ] as const;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hair':
        return Scissors;
      case 'skin':
        return Sparkles;
      case 'makeup':
        return Wand2;
      case 'nails':
        return Heart;
      default:
        return Sparkles;
    }
  };

  const filteredServices = activeCategory === 'all'
    ? SALON_DATA.services
    : SALON_DATA.services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#965F52] font-semibold mb-2">
            Curated Menu
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#242120] tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-[#615752] leading-relaxed">
            Everything you need to look and feel your best. Performed by master artists with premium dermatologist-tested formulations.
          </p>

          {/* Interactive Category Filter Tabs (Zero-pill segmented buttons) */}
          <div className="mt-8 inline-flex p-1.5 bg-[#EDE6DF] rounded-md border border-[#DECFC4] max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-sm whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-[#242120] shadow-xs'
                    : 'text-[#6C635E] hover:text-[#242120]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service: ServiceItem) => {
            const Icon = getCategoryIcon(service.category);
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="group relative bg-[#FAF8F5] border border-[#E5DAD0] hover:border-[#B87D6E] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Top: Icon & Duration */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-[#F2E9E2] group-hover:bg-[#B87D6E] transition-colors duration-300 flex items-center justify-center text-[#965F52] group-hover:text-white">
                      <Icon className="w-5 h-5 stroke-[1.7]" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#7A706A]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#242120] mb-2 tracking-tight group-hover:text-[#965F52] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#5E5550] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Bottom: Price and Book Button */}
                <div className="pt-4 border-t border-[#EFE7E0] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8A7E77] block font-medium">
                      Starting from
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-[#242120] tabular-nums font-sans">
                      {service.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.name)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-transparent hover:bg-[#242120] text-[#242120] hover:text-white border border-[#D5C7BD] hover:border-[#242120] text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded-sm cursor-pointer active:scale-95"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Need bespoke bridal inquiry banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F4EDE7] rounded-xl border border-[#DFD1C4] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-serif text-xl font-semibold text-[#242120]">
              Planning a Wedding or Special Event in Dhaka?
            </h4>
            <p className="text-sm text-[#615752] mt-1">
              We offer exclusive private lounge booking, home visits, and tailored multi-event bridal consultations.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Custom Event / Bridal Inquiry')}
            className="px-6 py-3 bg-[#965F52] hover:bg-[#7D4D42] text-white text-xs font-semibold tracking-widest uppercase transition-colors rounded-sm shadow-sm whitespace-nowrap cursor-pointer shrink-0"
          >
            Inquire for Events
          </button>
        </div>
      </div>
    </section>
  );
};

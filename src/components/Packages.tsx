import React from 'react';
import { Check, Star, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SALON_DATA, BridalPackage } from '../data/salonData';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#965F52] font-semibold mb-2">
            Wedding Collections
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#242120] tracking-tight mb-4">
            Bridal Packages
          </h2>
          <p className="text-base sm:text-lg text-[#615752] leading-relaxed">
            Thoughtfully curated bridal packages designed for your special day. All packages include pre-consultation and premium setting techniques.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SALON_DATA.bridalPackages.map((pkg: BridalPackage) => {
            const isPopular = pkg.popular;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col justify-between rounded-2xl p-7 sm:p-9 transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#F9F4EE] border-2 border-[#B87D6E] shadow-xl lg:-translate-y-2'
                    : 'bg-[#FAF8F5] border border-[#E5DAD0] hover:border-[#CBB8AA] shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Highlight Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B87D6E] text-white px-4 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-sm flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Package Title & Subtitle */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242120] tracking-tight">
                      {pkg.name}
                    </h3>
                    {pkg.tag && !isPopular && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#965F52]">
                        {pkg.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#6C635E] mb-6">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="pb-6 mb-6 border-b border-[#EAE0D7]">
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-4xl sm:text-5xl font-bold text-[#242120] tabular-nums tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-[#80756F] uppercase tracking-wider">
                        / complete package
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#8A7E77]">
                      Package Inclusions:
                    </p>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          isPopular
                            ? 'bg-[#B87D6E] text-white'
                            : 'bg-[#EDE4DC] text-[#7A5B53]'
                        }`}>
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-[#453E3B] font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Package CTA */}
                <div>
                  <button
                    onClick={() => onSelectPackage(`${pkg.name} (${pkg.price})`)}
                    className={`w-full py-3.5 text-xs font-semibold tracking-widest uppercase transition-all duration-200 rounded-sm cursor-pointer flex items-center justify-center gap-2 active:scale-95 ${
                      isPopular
                        ? 'bg-[#B87D6E] hover:bg-[#965F52] text-white shadow-md'
                        : 'bg-[#242120] hover:bg-[#3D3734] text-white'
                    }`}
                  >
                    <span>Book Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom bridal squad note */}
        <p className="text-center text-xs sm:text-sm text-[#7A7069] mt-10">
          Bridal party packages for mother of the bride, bridesmaids, and sisters available upon custom inquiry.
        </p>
      </div>
    </section>
  );
};

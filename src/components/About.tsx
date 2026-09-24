import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { SALON_DATA } from '../data/salonData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Experienced beauty professionals',
      description: 'Our senior artists bring years of specialized bridal and salon artistry, continually trained in modern techniques.',
    },
    {
      icon: Sparkles,
      title: 'Premium products',
      description: 'Exclusively stocking original international beauty, hair, and dermatological lines to protect and nurture your skin.',
    },
    {
      icon: ShieldCheck,
      title: 'Hygienic environment',
      description: 'Sterilized tools, fresh single-use disposables, and pristine air-conditioned suites ensuring safe, tranquil luxury.',
    },
    {
      icon: HeartHandshake,
      title: 'Personalized service',
      description: 'Every appointment begins with attentive consultation tailored to your unique skin tones, hair textures, and personal taste.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Salon Interior Image (6 cols) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#EDE4DC] aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={SALON_DATA.images.interior}
                  alt="LUMÉA Beauty Lounge luxury interior in Uttara, Dhaka"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating caption badge */}
                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-lg shadow-md border border-white/80">
                  <p className="text-[11px] uppercase tracking-wider text-[#965F52] font-semibold">
                    The Lounge
                  </p>
                  <p className="text-sm font-serif font-bold text-[#242120]">
                    House 12, Road 5 · Sector 4, Uttara
                  </p>
                </div>
              </div>

              {/* Decorative accent frame */}
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-[#B87D6E]/40 rounded-br-2xl pointer-events-none hidden sm:block"
                aria-hidden="true"
              />
            </motion.div>
          </div>

          {/* Right Column: Text & Pillars (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#965F52] font-semibold mb-2">
                Our Philosophy
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#242120] tracking-tight mb-6">
                Beauty, With a Personal Touch
              </h2>
              <p className="text-base sm:text-lg text-[#5E5550] leading-relaxed mb-8">
                LUMÉA Beauty Lounge is a modern beauty destination focused on personalized care, premium products and effortless beauty experiences. We built this space in Uttara as a calming sanctuary where women can unwind, rejuvenate, and celebrate their individuality with confidence.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={idx} className="p-4 rounded-lg bg-[#F5EFE9] border border-[#E8DDD2]">
                      <div className="w-8 h-8 rounded-md bg-[#FAF8F5] border border-[#DECFC2] flex items-center justify-center text-[#965F52] mb-2.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-[#242120] mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[#6C635E] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Signature element */}
              <div className="pt-4 border-t border-[#EAE0D7] flex items-center justify-between">
                <div>
                  <p className="font-serif italic text-lg sm:text-xl text-[#965F52]">
                    “Made with care for every client.”
                  </p>
                  <p className="text-xs uppercase tracking-widest text-[#857973] font-medium mt-0.5">
                    — The LUMÉA Artistry Team
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

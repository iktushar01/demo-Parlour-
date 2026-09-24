import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { SALON_DATA } from '../data/salonData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#965F52] font-semibold mb-2">
            Real Experiences
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#242120] tracking-tight mb-4">
            Loved By Our Clients
          </h2>
          <p className="text-base sm:text-lg text-[#615752] leading-relaxed">
            From bridal milestones to monthly pampering rituals, read what ladies across Dhaka cherish about LUMÉA.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SALON_DATA.testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F6EFEB] border border-[#E2D5C9] rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
            >
              <div>
                {/* Top: 5 Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-600">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#C9B8AB] stroke-[1.5]" />
                </div>

                {/* Review Text */}
                <blockquote className="text-[#36302C] text-base leading-relaxed mb-6 font-normal">
                  &ldquo;{item.text}&rdquo;
                </blockquote>
              </div>

              {/* Author & Service Meta */}
              <div className="pt-4 border-t border-[#E5D7CC]">
                <h4 className="font-serif text-lg font-bold text-[#242120]">
                  — {item.name}
                </h4>
                <div className="flex items-center justify-between text-xs text-[#736862] mt-1">
                  <span>{item.role}</span>
                  <span className="text-[#965F52] font-medium">{item.serviceReceived}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust summary note */}
        <div className="mt-12 text-center text-xs uppercase tracking-wider text-[#8A7E77]">
          4.9 Average Rating across 1,500+ Happy Women in Bangladesh
        </div>
      </div>
    </section>
  );
};

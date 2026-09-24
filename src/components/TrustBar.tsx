import React from 'react';
import { Award, Users, Sparkles, HeartHandshake } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: Award,
      title: '5+ Years Experience',
      subtitle: 'Expert certified stylists',
    },
    {
      icon: Users,
      title: '1,500+ Happy Clients',
      subtitle: 'Across Uttara & Dhaka',
    },
    {
      icon: Sparkles,
      title: 'Premium Products',
      subtitle: 'International derm-tested brands',
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Care',
      subtitle: 'Private suites & consultations',
    },
  ];

  return (
    <section className="bg-[#F4EFEB] border-y border-[#E5DAD0] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#DFD4C8]">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center ${
                  index > 1 ? 'pt-6 md:pt-0' : ''
                } ${index > 0 ? 'md:pl-6' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-white/80 border border-[#E0D3C7] flex items-center justify-center text-[#965F52] mb-3 shadow-xs">
                  <Icon className="w-5 h-5 stroke-[1.6]" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#242120] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6C635E] mt-1 font-normal">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

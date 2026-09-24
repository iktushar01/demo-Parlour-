import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Bridal } from './components/Bridal';
import { Packages } from './components/Packages';
import { Offer } from './components/Offer';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Appointment } from './components/Appointment';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const scrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollTo('appointment');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#242120] font-sans flex flex-col selection:bg-[#E8D7CF] selection:text-[#33221C]">
      {/* Sticky Premium Navigation */}
      <Navbar onBookClick={() => scrollTo('appointment')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookClick={() => scrollTo('appointment')}
          onExploreServices={() => scrollTo('services')}
        />

        {/* Minimal Information Strip */}
        <TrustBar />

        {/* Services Menu with BDT Pricing */}
        <Services onSelectService={handleBookService} />

        {/* Featured Bridal Section */}
        <Bridal onExplorePackages={() => scrollTo('packages')} />

        {/* Bridal Packages */}
        <Packages onSelectPackage={handleBookService} />

        {/* Promotional Special Offer */}
        <Offer onClaimOffer={handleBookService} />

        {/* Masonry Portfolio Gallery with Lightbox */}
        <Gallery />

        {/* About Lounge & Quality Philosophy */}
        <About />

        {/* Authentic Client Testimonials */}
        <Testimonials />

        {/* Frontend-only Appointment Booking with Success Modal */}
        <Appointment
          selectedServicePreset={selectedService}
          onClearPreset={() => setSelectedService('')}
        />

        {/* Visit, Map, Hours & Contact */}
        <Contact />
      </main>

      {/* Minimal Luxury Footer */}
      <Footer />

      {/* Floating WhatsApp and Scroll to Top */}
      <FloatingActions onBookClick={() => scrollTo('appointment')} />
    </div>
  );
}

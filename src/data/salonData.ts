// Image imports
import heroBridalImg from '@/src/assets/images/hero_bridal_beauty_1790256787457.jpg';
import bridalShowcaseImg from '@/src/assets/images/bridal_showcase_1790256807099.jpg';
import salonInteriorImg from '@/src/assets/images/salon_interior_lounge_1790256823369.jpg';
import hairSpaImg from '@/src/assets/images/hair_spa_treatment_1790256839280.jpg';
import manicureImg from '@/src/assets/images/manicure_nail_art_1790256853436.jpg';
import partyMakeupImg from '@/src/assets/images/gallery_party_makeup_1790256872011.jpg';
import facialGlowImg from '@/src/assets/images/gallery_facial_glow_1790256890535.jpg';
import hairBunImg from '@/src/assets/images/gallery_hair_bun_1790256907772.jpg';
import pedicureSpaImg from '@/src/assets/images/gallery_pedicure_spa_1790256923518.jpg';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'makeup' | 'nails';
  price: string;
  duration: string;
  description: string;
  popular?: boolean;
}

export interface BridalPackage {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  description: string;
  features: string[];
  popular?: boolean;
  tag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bridal' | 'makeup' | 'hair' | 'nails';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  serviceReceived: string;
}

export const SALON_DATA = {
  name: 'LUMÉA BEAUTY LOUNGE',
  shortName: 'LUMÉA',
  tagline: 'Where Beauty Meets Confidence',
  phone: '+880 1712-345678',
  displayPhone: '+880 1XXX-XXXXXX',
  whatsappNumber: '+8801712345678',
  address: 'House 12, Road 5, Sector 4, Uttara, Dhaka, Bangladesh',
  landmark: 'Adjacent to Rabindra Sarani, Uttara',
  hours: {
    regular: 'Saturday – Thursday: 10:00 AM – 8:00 PM',
    friday: 'Friday: 2:00 PM – 8:00 PM',
  },
  images: {
    hero: heroBridalImg,
    bridalShowcase: bridalShowcaseImg,
    interior: salonInteriorImg,
    hairSpa: hairSpaImg,
    manicure: manicureImg,
    partyMakeup: partyMakeupImg,
    facialGlow: facialGlowImg,
    hairBun: hairBunImg,
    pedicureSpa: pedicureSpaImg,
  },
  trustStats: [
    { value: '5+ Years', label: 'Experience & Artistry' },
    { value: '1,500+', label: 'Happy Clients in Dhaka' },
    { value: '100% Premium', label: 'Derm-Tested Products' },
    { value: 'Personalized', label: 'Private Suite Care' },
  ],
  services: [
    // Hair
    {
      id: 'hair-1',
      name: 'Hair Cut & Styling',
      category: 'hair',
      price: '৳800',
      duration: '45 mins',
      description: 'Custom face-framing cut, nourishing scalp wash, and professional voluminous blowout.',
      popular: true,
    },
    {
      id: 'hair-2',
      name: 'Hair Spa',
      category: 'hair',
      price: '৳1,500',
      duration: '60 mins',
      description: 'Intensive botanical steam infusion, stress-relieving acupressure scalp massage, and gloss mask.',
    },
    {
      id: 'hair-3',
      name: 'Hair Treatment',
      category: 'hair',
      price: '৳2,000',
      duration: '75 mins',
      description: 'Advanced keratin repair & protein infusion designed to combat Dhaka humidity and restore shine.',
    },
    // Skin & Facial
    {
      id: 'skin-1',
      name: 'Glow Facial',
      category: 'skin',
      price: '৳1,200',
      duration: '50 mins',
      description: 'Instant radiance facial using gentle fruit enzymes, vitamin C serum, and cold jade roller treatment.',
      popular: true,
    },
    {
      id: 'skin-2',
      name: 'Deep Cleansing Facial',
      category: 'skin',
      price: '৳1,500',
      duration: '60 mins',
      description: 'Ultrasonic pore purification, painless extractions, balancing clay mask, and hydrating barrier serum.',
    },
    {
      id: 'skin-3',
      name: 'Premium Skin Treatment',
      category: 'skin',
      price: '৳2,500',
      duration: '75 mins',
      description: '24K gold foil hydration therapy, peptide firming, and therapeutic lymphatic facial sculpting.',
    },
    // Makeup
    {
      id: 'makeup-1',
      name: 'Party Makeup',
      category: 'makeup',
      price: '৳2,500',
      duration: '60 mins',
      description: 'Luminous HD soft glam with custom faux mink lashes, setting mist, and elegant hair styling.',
      popular: true,
    },
    {
      id: 'makeup-2',
      name: 'Engagement Makeup',
      category: 'makeup',
      price: '৳5,000',
      duration: '90 mins',
      description: 'Sculpted romantic glam, intricate floral hairstyle, delicate bindi artistry, and dupatta draping.',
    },
    {
      id: 'makeup-3',
      name: 'Bridal Makeup',
      category: 'makeup',
      price: '৳8,000',
      duration: '120 mins',
      description: 'Timeless full bridal transformation with waterproof sweat-proof base, kohl eyes, and royal finish.',
    },
    // Nails
    {
      id: 'nails-1',
      name: 'Manicure',
      category: 'nails',
      price: '৳700',
      duration: '40 mins',
      description: 'Gentle cuticle grooming, apricot kernel exfoliation, warm lavender towel wrap, and high-shine buff.',
    },
    {
      id: 'nails-2',
      name: 'Pedicure',
      category: 'nails',
      price: '৳900',
      duration: '50 mins',
      description: 'Rose petal herbal foot soak, callus buffing, relaxing leg massage, and breathable nail lacquer.',
    },
    {
      id: 'nails-3',
      name: 'Nail Art',
      category: 'nails',
      price: '৳1,000',
      duration: '60 mins',
      description: 'Delicate hand-painted patterns, chrome glazes, champagne foils, or minimalist French tips.',
      popular: true,
    },
  ] as ServiceItem[],
  bridalPackages: [
    {
      id: 'pkg-essential',
      name: 'Essential Bride',
      price: '৳8,000',
      numericPrice: 8000,
      description: 'Essential luxury for intimate weddings, Gaye Holud, or Nikkah celebrations.',
      features: [
        'Bridal Makeup',
        'Hair Styling',
        'Eye Makeup',
        'Saree Draping',
        'High-Definition Base',
      ],
      tag: 'Classic',
    },
    {
      id: 'pkg-signature',
      name: 'Signature Bride',
      price: '৳12,000',
      numericPrice: 12000,
      description: 'Our most requested complete package crafted for grand wedding receptions.',
      features: [
        'Bridal Makeup',
        'Hair Styling',
        'Saree Draping',
        'Skin Preparation',
        'Lashes',
        'Makeup Trial',
        'Jewelry & Veil Setting',
      ],
      popular: true,
      tag: 'Most Popular',
    },
    {
      id: 'pkg-luxe',
      name: 'Luxe Bride',
      price: '৳18,000',
      numericPrice: 18000,
      description: 'The pinnacle VIP bridal journey with private lounge access and touch-up privileges.',
      features: [
        'Complete Bridal Makeup',
        'Premium Hairstyling',
        'Skin Preparation',
        'Saree Draping',
        'Lashes',
        'Makeup Trial',
        'Touch-up Kit',
        'Private Suite & High Tea',
      ],
      tag: 'VIP Experience',
    },
  ] as BridalPackage[],
  gallery: [
    {
      id: 'gal-1',
      title: 'Traditional Crimson Bridal Glam',
      category: 'bridal',
      categoryLabel: 'Bridal',
      image: bridalShowcaseImg,
      description: 'Handcrafted bridal artistry featuring subtle smokey eye, luminous skin, and classic Bengali kohl definition.',
    },
    {
      id: 'gal-2',
      title: 'Soft Radiance Reception Look',
      category: 'makeup',
      categoryLabel: 'Makeup',
      image: partyMakeupImg,
      description: 'Dewy skin with soft rose undertones and sculpted contour designed for Dhaka reception lighting.',
    },
    {
      id: 'gal-3',
      title: 'Botanical Hair Bun with Jasmine',
      category: 'hair',
      categoryLabel: 'Hair',
      image: hairBunImg,
      description: 'Traditional chignon adorned with fresh fragrant flowers and secure all-evening pin hold.',
    },
    {
      id: 'gal-4',
      title: 'Minimalist Champagne Gel Nails',
      category: 'nails',
      categoryLabel: 'Nails',
      image: manicureImg,
      description: 'Tasteful nude-blush manicure with delicate micro-gold foils for modern brides and festive wear.',
    },
    {
      id: 'gal-5',
      title: 'Signature Royal Bridal Portrait',
      category: 'bridal',
      categoryLabel: 'Bridal',
      image: heroBridalImg,
      description: 'Bespoke bridal styling combining ornate traditional ornaments with contemporary soft matte glam.',
    },
    {
      id: 'gal-6',
      title: 'Nourishing Steam Scalp Therapy',
      category: 'hair',
      categoryLabel: 'Hair',
      image: hairSpaImg,
      description: 'Deep conditioning steam treatment replenishing moisture and natural bounce to dry hair.',
    },
    {
      id: 'gal-7',
      title: 'Antioxidant Glow Facial Care',
      category: 'bridal',
      categoryLabel: 'Bridal & Skin',
      image: facialGlowImg,
      description: 'Pre-wedding facial treatment smoothing skin texture and restoring youthful natural luminescence.',
    },
    {
      id: 'gal-8',
      title: 'Rose Petal Foot Spa Treatment',
      category: 'nails',
      categoryLabel: 'Nails & Spa',
      image: pedicureSpaImg,
      description: 'Aromatic therapeutic foot soak and massage relieving wedding fatigue in our luxury suite.',
    },
  ] as GalleryItem[],
  testimonials: [
    {
      id: 'test-1',
      name: 'Nusrat A.',
      role: 'Bride · Uttara Sector 7',
      rating: 5,
      text: 'The bridal makeup was exactly what I wanted. Everything felt so professional and comfortable. My look stayed flawless all through our 8-hour ceremony!',
      serviceReceived: 'Signature Bride Package',
    },
    {
      id: 'test-2',
      name: 'Sadia R.',
      role: 'Regular Client · Banani',
      rating: 5,
      text: 'Beautiful environment, friendly staff and amazing service. The hair spa and glow facial have become my sacred monthly reset. Incredibly clean and peaceful.',
      serviceReceived: 'Glow Facial & Hair Spa',
    },
    {
      id: 'test-3',
      name: 'Mim K.',
      role: 'Wedding Guest · Dhanmondi',
      rating: 5,
      text: 'Finally found a place where they actually listen to what you want. The party makeup was elegant, modern, and not overdone. Truly Uttara’s hidden gem.',
      serviceReceived: 'Party Makeup & Hair Styling',
    },
  ] as TestimonialItem[],
  specialOffer: {
    badge: 'GLOW SEASON',
    title: 'Facial + Hair Spa',
    subtitle: 'Recharge your natural glow with our signature dual treatment package.',
    oldPrice: '৳2,500',
    newPrice: '৳1,999',
    savings: '৳501',
    validity: 'Limited-time offer · Valid for reservations this month',
    serviceKey: 'Glow Season (Facial + Hair Spa - ৳1,999)',
  },
  aboutPillars: [
    {
      title: 'Experienced Artists',
      description: 'Certified professionals specializing in modern South Asian bridal and editorial trends.',
    },
    {
      title: 'Premium Products',
      description: 'Dermatologist-approved, international luxury brands ensuring skin health and longevity.',
    },
    {
      title: 'Hygienic Environment',
      description: 'Hospital-grade tool sterilization, single-use disposables, and private sanitized stations.',
    },
    {
      title: 'Personalized Service',
      description: 'In-depth pre-service consultation listening attentively to your individual desires and skin type.',
    },
  ],
};

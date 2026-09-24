import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles, CheckCircle2, AlertCircle, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SALON_DATA } from '../data/salonData';

interface AppointmentProps {
  selectedServicePreset?: string;
  onClearPreset?: () => void;
}

export const Appointment: React.FC<AppointmentProps> = ({
  selectedServicePreset = '',
  onClearPreset,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Synchronize preset service when selected from elsewhere
  useEffect(() => {
    if (selectedServicePreset) {
      setService(selectedServicePreset);
    }
  }, [selectedServicePreset]);

  // Set default minimum date to today
  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Frontend validation
    if (!fullName.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setValidationError('Please provide a valid contact number (e.g. +880 1712-345678).');
      return;
    }
    if (!service) {
      setValidationError('Please select a service or bridal package.');
      return;
    }
    if (!date) {
      setValidationError('Please select your preferred date.');
      return;
    }
    if (!time) {
      setValidationError('Please select a preferred time slot.');
      return;
    }

    setValidationError('');
    // Frontend-only demo behavior: Do not send to any server
    setFormSubmitted(true);
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    setFullName('');
    setPhone('');
    setService('');
    setDate('');
    setTime('');
    setMessage('');
    if (onClearPreset) onClearPreset();
  };

  const openWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `Hello LUMÉA Beauty Lounge!\n\nI just requested an appointment on your website:\n• Name: ${fullName}\n• Phone: ${phone}\n• Service: ${service}\n• Date: ${date}\n• Time: ${time}\n${message ? `• Note: ${message}\n` : ''}\nCould you please confirm availability? Thank you!`
    );
    window.open(`https://wa.me/${SALON_DATA.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="appointment" className="py-20 md:py-28 bg-[#F4EDE7] border-t border-[#DFD1C5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#965F52] font-semibold mb-2">
            Reservations
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#242120] tracking-tight mb-4">
            Ready for Your Glow?
          </h2>
          <p className="text-base sm:text-lg text-[#615752] leading-relaxed">
            Reserve your private appointment or bridal consultation. We treat each visit as an exclusive pampering experience.
          </p>
        </div>

        {/* Demo Notice Banner */}
        <div className="mb-8 p-3.5 bg-white/80 border border-[#D9C9BC] rounded-lg flex items-center justify-between text-xs text-[#6C5E57]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-[#242120]">Interactive Parlour Demo:</span>
            <span>Test the booking workflow without real payment or account setup.</span>
          </div>
          <span className="hidden sm:inline-block text-[11px] uppercase tracking-wider text-[#965F52] font-semibold">
            Uttara Lounge
          </span>
        </div>

        {/* Appointment Card */}
        <div className="bg-[#FAF8F5] rounded-2xl border border-[#DFD1C4] p-8 sm:p-12 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {validationError && (
              <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#4A423E] mb-2"
                >
                  Full Name <span className="text-[#965F52]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Nusrat Jahan"
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#F8F4F0] border border-[#DDD0C4] text-[#242120] placeholder-[#9E928B] text-sm focus:outline-none focus:ring-2 focus:ring-[#B87D6E] focus:bg-white transition-all"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#4A423E] mb-2"
                >
                  Phone Number <span className="text-[#965F52]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +880 1712-345678"
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#F8F4F0] border border-[#DDD0C4] text-[#242120] placeholder-[#9E928B] text-sm focus:outline-none focus:ring-2 focus:ring-[#B87D6E] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Select Service */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="service"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#4A423E]"
                >
                  Select Service or Package <span className="text-[#965F52]">*</span>
                </label>
                {service && (
                  <span className="text-[11px] text-[#965F52] font-semibold">
                    Selected: {service}
                  </span>
                )}
              </div>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-md bg-[#F8F4F0] border border-[#DDD0C4] text-[#242120] text-sm focus:outline-none focus:ring-2 focus:ring-[#B87D6E] focus:bg-white transition-all cursor-pointer"
              >
                <option value="">-- Choose a Service or Package --</option>
                <optgroup label="Special Offers">
                  <option value={SALON_DATA.specialOffer.serviceKey}>
                    🌟 {SALON_DATA.specialOffer.title} ({SALON_DATA.specialOffer.newPrice})
                  </option>
                </optgroup>
                <optgroup label="Bridal Packages">
                  {SALON_DATA.bridalPackages.map((pkg) => (
                    <option key={pkg.id} value={`${pkg.name} (${pkg.price})`}>
                      👑 {pkg.name} — {pkg.price}
                    </option>
                  ))}
                  <option value="Custom Bridal / Group Event Inquiry">
                    👑 Custom Bridal Consultation
                  </option>
                </optgroup>
                <optgroup label="Hair Care">
                  <option value="Hair Cut & Styling (From ৳800)">Hair Cut & Styling — From ৳800</option>
                  <option value="Hair Spa (From ৳1,500)">Hair Spa — From ৳1,500</option>
                  <option value="Hair Treatment (From ৳2,000)">Hair Treatment — From ৳2,000</option>
                </optgroup>
                <optgroup label="Skin & Facial">
                  <option value="Glow Facial (From ৳1,200)">Glow Facial — From ৳1,200</option>
                  <option value="Deep Cleansing Facial (From ৳1,500)">Deep Cleansing Facial — From ৳1,500</option>
                  <option value="Premium Skin Treatment (From ৳2,500)">Premium Skin Treatment — From ৳2,500</option>
                </optgroup>
                <optgroup label="Makeup Services">
                  <option value="Party Makeup (From ৳2,500)">Party Makeup — From ৳2,500</option>
                  <option value="Engagement Makeup (From ৳5,000)">Engagement Makeup — From ৳5,000</option>
                  <option value="Bridal Makeup (From ৳8,000)">Bridal Makeup — From ৳8,000</option>
                </optgroup>
                <optgroup label="Nail Care">
                  <option value="Manicure (From ৳700)">Manicure — From ৳700</option>
                  <option value="Pedicure (From ৳900)">Pedicure — From ৳900</option>
                  <option value="Nail Art (From ৳1,000)">Nail Art — From ৳1,000</option>
                </optgroup>
              </select>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="date"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#4A423E] mb-2"
                >
                  Preferred Date <span className="text-[#965F52]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="date"
                    min={todayStr}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-md bg-[#F8F4F0] border border-[#DDD0C4] text-[#242120] text-sm focus:outline-none focus:ring-2 focus:ring-[#B87D6E] focus:bg-white transition-all cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#4A423E] mb-2"
                >
                  Preferred Time Slot <span className="text-[#965F52]">*</span>
                </label>
                <select
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#F8F4F0] border border-[#DDD0C4] text-[#242120] text-sm focus:outline-none focus:ring-2 focus:ring-[#B87D6E] focus:bg-white transition-all cursor-pointer"
                >
                  <option value="">-- Select Time Slot --</option>
                  <option value="10:30 AM (Morning Slot)">10:30 AM (Morning Slot)</option>
                  <option value="12:00 PM (Noon Slot)">12:00 PM (Noon Slot)</option>
                  <option value="02:30 PM (Afternoon Slot)">02:30 PM (Afternoon Slot)</option>
                  <option value="04:00 PM (Evening Glow)">04:00 PM (Evening Glow)</option>
                  <option value="06:00 PM (Sunset Slot)">06:00 PM (Sunset Slot)</option>
                  <option value="07:00 PM (Late Evening)">07:00 PM (Late Evening)</option>
                </select>
              </div>
            </div>

            {/* Message / Special Requests */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-wider font-semibold text-[#4A423E] mb-2"
              >
                Special Requests or Notes (Optional)
              </label>
              <textarea
                id="message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Let us know if you have specific skin sensitivities, wedding dates, or group inquiries..."
                className="w-full px-4 py-3 rounded-md bg-[#F8F4F0] border border-[#DDD0C4] text-[#242120] placeholder-[#9E928B] text-sm focus:outline-none focus:ring-2 focus:ring-[#B87D6E] focus:bg-white transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[#242120] hover:bg-[#965F52] text-white text-xs font-semibold tracking-widest uppercase transition-all duration-200 rounded-sm shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Request Appointment</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>

            <p className="text-center text-xs text-[#786E68]">
              No advance payment required online. We will call you within 15 minutes during operating hours to confirm your suite.
            </p>
          </form>
        </div>
      </div>

      {/* Beautiful Success Modal on Frontend Submission */}
      <AnimatePresence>
        {formSubmitted && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FAF8F5] rounded-2xl border border-[#DECFC4] shadow-2xl max-w-lg w-full p-6 sm:p-8 relative text-center"
            >
              <button
                onClick={handleResetForm}
                className="absolute top-4 right-4 p-2 text-[#7A706A] hover:text-[#242120] rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242120] tracking-tight mb-2">
                Appointment Requested!
              </h3>

              <p className="text-sm sm:text-base text-[#554C47] leading-relaxed mb-6">
                Thank you! Your appointment request has been received. We&apos;ll contact you shortly to confirm your time.
              </p>

              {/* Booking Summary Box */}
              <div className="bg-[#F4ECE5] rounded-xl p-4 text-left text-xs sm:text-sm text-[#423A36] space-y-2 mb-6 border border-[#E0D1C4]">
                <div className="flex justify-between">
                  <span className="text-[#786B64] font-medium">Guest:</span>
                  <span className="font-semibold text-[#242120]">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#786B64] font-medium">Phone:</span>
                  <span className="font-semibold text-[#242120]">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#786B64] font-medium">Service:</span>
                  <span className="font-semibold text-[#965F52] text-right">{service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#786B64] font-medium">Date & Time:</span>
                  <span className="font-semibold text-[#242120]">{date} at {time}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={openWhatsAppConfirmation}
                  className="flex-1 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  onClick={handleResetForm}
                  className="flex-1 py-3 px-4 bg-[#242120] hover:bg-[#3D3734] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>

              <p className="text-[11px] text-[#8C8078] mt-4">
                Note: This is a frontend demo for LUMÉA Beauty Lounge (Uttara, Dhaka).
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

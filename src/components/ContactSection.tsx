import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    productInterest: 'Essential Oils',
    quantity: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const productOptions = [
    'Essential Oils',
    'Carrier Oils',
    'Natural Extracts',
    'Private Label',
    'Custom Packaging',
    'Contract Manufacturing',
    'Bulk Supply',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const whatsappMessage = `*New Inquiry - Vindhyachal Botanicals*\n` +
      `• Name: ${formData.name}\n` +
      `• Company: ${formData.companyName || 'Not specified'}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone/WhatsApp: ${formData.phone}\n` +
      `• Product Interest: ${formData.productInterest}\n` +
      `• Quantity: ${formData.quantity || 'Not specified'}\n` +
      `• Message: ${formData.message}`;

    const waUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp in new tab for direct response
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E9E2D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Side: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-[#E9E2D3] shadow-sm">
            <div className="mb-8">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
                START A CONVERSATION
              </span>
              <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#183C32] mt-1.5 tracking-tight">
                Start Your Natural Wellness Journey
              </h2>
              <div className="w-12 h-0.5 bg-[#B79A62] mt-3" />
              <p className="mt-3 text-sm sm:text-base text-[#202723]/75 font-light leading-relaxed">
                Tell us what you're looking for and our team will help you find the right botanical solution.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#183C32]/5 border border-[#496B52]/20 rounded-2xl p-8 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#183C32] text-[#B79A62] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif-brand font-bold text-2xl text-[#183C32]">
                  Enquiry Submitted Successfully
                </h3>
                <p className="text-xs sm:text-sm text-[#202723]/80 font-light max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Vindhyachal Botanicals. Our commercial export team has received your details and will get back to you with specification sheets and pricing within 24 business hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#183C32] text-[#F7F4EC] hover:bg-[#204e41] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1.5">
                      Your Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F7F4EC] border border-[#E9E2D3] rounded-xl text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1.5">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Solace Skincare Lab"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F7F4EC] border border-[#E9E2D3] rounded-xl text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1.5">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F7F4EC] border border-[#E9E2D3] rounded-xl text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1.5">
                      Phone / WhatsApp <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F7F4EC] border border-[#E9E2D3] rounded-xl text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1.5">
                      Product Interest
                    </label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F7F4EC] border border-[#E9E2D3] rounded-xl text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32] transition-colors"
                    >
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1.5">
                      Quantity / Requirement
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 50kg Drum or 1,000 retail bottles"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F7F4EC] border border-[#E9E2D3] rounded-xl text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1.5">
                    Your Message / Target Specifications
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details about your desired botanical ingredients, certifications required, packaging preferences, or delivery location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F7F4EC] border border-[#E9E2D3] rounded-xl text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#183C32] hover:bg-[#204e41] text-[#F7F4EC] font-semibold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#B79A62]" />
                  <span>Send Enquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Side: Company Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
                DIRECT CONTACT CHANNELS
              </span>
              <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#183C32] mt-1.5 tracking-tight">
                Vindhyachal Botanicals Facility
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#202723]/70 font-light leading-relaxed">
                Connect directly with our manufacturing directors, laboratory technical heads, and international export desks.
              </p>

              <div className="space-y-6 mt-8">
                
                {/* Email Channels */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E9E2D3] flex items-center justify-center text-[#183C32] shrink-0">
                    <Mail className="w-4 h-4 text-[#B79A62]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#496B52] font-semibold block">
                      Email Inquiries
                    </span>
                    {COMPANY_DETAILS.emails.map((em, idx) => (
                      <a
                        key={idx}
                        href={`mailto:${em}`}
                        className="block text-sm text-[#183C32] font-medium hover:text-[#B79A62] transition-colors"
                      >
                        {em}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Telephone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E9E2D3] flex items-center justify-center text-[#183C32] shrink-0">
                    <Phone className="w-4 h-4 text-[#B79A62]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#496B52] font-semibold block">
                      Phone &amp; WhatsApp Direct
                    </span>
                    <a
                      href={`tel:${COMPANY_DETAILS.phone}`}
                      className="text-sm text-[#183C32] font-medium hover:text-[#B79A62] transition-colors block"
                    >
                      {COMPANY_DETAILS.phoneFormatted}
                    </a>
                    <a
                      href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#496B52] hover:text-[#183C32] font-medium mt-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Chat on WhatsApp Commercial Desk</span>
                    </a>
                  </div>
                </div>

                {/* Plant Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E9E2D3] flex items-center justify-center text-[#183C32] shrink-0">
                    <MapPin className="w-4 h-4 text-[#B79A62]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#496B52] font-semibold block">
                      Extraction Facility &amp; Registered Office
                    </span>
                    <p className="text-sm text-[#183C32] font-medium leading-relaxed">
                      {COMPANY_DETAILS.address}
                    </p>
                    <span className="text-[11px] text-[#202723]/60 block mt-0.5">
                      {COMPANY_DETAILS.legalEntity}
                    </span>
                  </div>
                </div>

                {/* Business Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E9E2D3] flex items-center justify-center text-[#183C32] shrink-0">
                    <Clock className="w-4 h-4 text-[#B79A62]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#496B52] font-semibold block">
                      Plant &amp; Office Hours
                    </span>
                    <p className="text-sm text-[#183C32] font-medium">
                      Monday – Saturday: 9:00 AM – 6:30 PM (IST)
                    </p>
                    <span className="text-[11px] text-[#202723]/60 block">
                      Sunday: Closed (Emergency dispatch available by request)
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Trust Assurance Badge */}
            <div className="bg-white rounded-2xl p-6 border border-[#E9E2D3] space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#B79A62]">
                Commercial Assurance
              </span>
              <p className="text-xs text-[#202723]/80 font-light leading-relaxed">
                NDAs signed promptly for proprietary formulation R&amp;D. Custom batches sampled with GC-MS and Certificate of Analysis prior to bulk production run.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

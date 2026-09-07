import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    inquiryPurpose: 'Bulk Essential Oils',
    estimatedVolume: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const inquiryOptions = [
    'Bulk Essential Oils Purchase',
    'Carrier Oils & Lipids',
    'Private Label / OEM Project',
    'Custom Packaging Consultation',
    'Contract Distillation',
    'Sample & COA Request',
    'General B2B Inquiry',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*B2B Inquiry via Contact Page - Vindhyachal Botanicals*\n` +
      `• Name: ${formData.name}\n` +
      `• Company: ${formData.company || 'N/A'}\n` +
      `• Country: ${formData.country || 'N/A'}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone/WhatsApp: ${formData.phone}\n` +
      `• Purpose: ${formData.inquiryPurpose}\n` +
      `• Est. Volume: ${formData.estimatedVolume || 'N/A'}\n` +
      `• Details: ${formData.message}`;

    const waUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  };

  return (
    <div className="bg-[#FFFFFF] text-[#202723]">
      
      {/* Header Banner */}
      <section className="relative py-24 md:py-32 bg-[#183C32] text-[#F7F4EC] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B79A62_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#B79A62]">
            GLOBAL COMMERCIAL LIAISON
          </span>
          <h1 className="font-serif-brand text-4xl sm:text-5xl md:text-6xl font-bold mt-2 tracking-tight">
            Connect With Our Extraction Works
          </h1>
          <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-6" />
          <p className="mt-6 text-base sm:text-lg text-[#F7F4EC]/80 max-w-2xl mx-auto font-light leading-relaxed">
            Direct communication with factory directors, laboratory quality auditors, and international export dispatch managers.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-[#E9E2D3] shadow-sm">
              <div className="mb-8">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
                  COMMERCIAL ENQUIRY
                </span>
                <h2 className="font-serif-brand text-3xl font-bold text-[#183C32] mt-1">
                  Start Your Consultation
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[#202723]/75 font-light leading-relaxed">
                  Fill out your procurement specifications below and our commercial export desk will respond with technical dossiers and tariff rates within 24 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#183C32] text-[#B79A62] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif-brand font-bold text-2xl text-[#183C32]">
                    Enquiry Logged With Our Team
                  </h3>
                  <p className="text-xs sm:text-sm text-[#202723]/75 max-w-md mx-auto font-light leading-relaxed">
                    Thank you. We have received your inquiry. A formal response along with Certificate of Analysis (COA) will be dispatched to your email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#183C32] text-[#F7F4EC] rounded-full text-xs font-semibold uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Helena Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-3 bg-[#F7F4EC] border border-[#E9E2D3] rounded-xl text-xs sm:text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Botanica Formulations"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-3 bg-[#F7F4EC] border border-[#E9E2D3] rounded-xl text-xs sm:text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                        Corporate Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="info@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-3 bg-[#F7F4EC] border border-[#E9E2D3] rounded-xl text-xs sm:text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                        Phone / WhatsApp <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-3 bg-[#F7F4EC] border border-[#E9E2D3] rounded-xl text-xs sm:text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. United Kingdom"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3.5 py-3 bg-[#F7F4EC] border border-[#E9E2D3] rounded-xl text-xs sm:text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                        Purpose of Inquiry
                      </label>
                      <select
                        value={formData.inquiryPurpose}
                        onChange={(e) => setFormData({ ...formData, inquiryPurpose: e.target.value })}
                        className="w-full px-3.5 py-3 bg-[#F7F4EC] border border-[#E9E2D3] rounded-xl text-xs sm:text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32]"
                      >
                        {inquiryOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                        Estimated Order Volume
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2 x 25kg Drums or 1,000 units"
                        value={formData.estimatedVolume}
                        onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                        className="w-full px-3.5 py-3 bg-[#F7F4EC] border border-[#E9E2D3] rounded-xl text-xs sm:text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                      Project Specifications / Product Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Detail specific oil varieties, desired pharmacopoeia grade (IP/BP/USP), packaging formats, or target delivery dates..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-3 bg-[#F7F4EC] border border-[#E9E2D3] rounded-xl text-xs sm:text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#183C32] hover:bg-[#204e41] text-[#F7F4EC] rounded-xl text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4 text-[#B79A62]" />
                    <span>Send Commercial Inquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Direct Information Channels */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
                  COMMUNICATION HUB
                </span>
                <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#183C32] mt-1">
                  Corporate &amp; Factory Office
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#202723]/70 font-light leading-relaxed">
                  Connect through our verified commercial channels for immediate price quotes and export assistance.
                </p>

                <div className="space-y-6 mt-8">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#E9E2D3] flex items-center justify-center text-[#183C32] shrink-0">
                      <Mail className="w-4 h-4 text-[#B79A62]" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#496B52] font-semibold block">
                        Official Emails
                      </span>
                      {COMPANY_DETAILS.emails.map((em, i) => (
                        <a
                          key={i}
                          href={`mailto:${em}`}
                          className="block text-sm text-[#183C32] font-medium hover:text-[#B79A62]"
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
                        Direct Phone / Factory Hotline
                      </span>
                      <a
                        href={`tel:${COMPANY_DETAILS.phone}`}
                        className="text-sm text-[#183C32] font-medium hover:text-[#B79A62] block"
                      >
                        {COMPANY_DETAILS.phoneFormatted}
                      </a>
                      <a
                        href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-800 font-semibold mt-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-white" />
                        <span>Instant WhatsApp Chat</span>
                      </a>
                    </div>
                  </div>

                  {/* Registered Extraction Facility */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#E9E2D3] flex items-center justify-center text-[#183C32] shrink-0">
                      <MapPin className="w-4 h-4 text-[#B79A62]" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#496B52] font-semibold block">
                        Registered Plant Location
                      </span>
                      <p className="text-sm text-[#183C32] font-medium leading-relaxed">
                        {COMPANY_DETAILS.address}
                      </p>
                      <span className="text-[11px] text-[#202723]/60 block mt-0.5">
                        Madhya Pradesh, India - PIN 475661
                      </span>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#E9E2D3] flex items-center justify-center text-[#183C32] shrink-0">
                      <Clock className="w-4 h-4 text-[#B79A62]" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#496B52] font-semibold block">
                        Working Hours
                      </span>
                      <p className="text-sm text-[#183C32] font-medium">
                        Mon – Sat: 9:00 AM – 6:30 PM (IST)
                      </p>
                      <span className="text-[11px] text-[#202723]/60 block">
                        UTC +5:30 (India Standard Time)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-6 bg-emerald-900/10 border border-emerald-600/30 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="font-serif-brand font-bold text-base text-[#183C32]">
                    Need Immediate Clarification?
                  </h4>
                  <p className="text-xs text-[#202723]/70 font-light mt-0.5">
                    Our commercial lead is active on WhatsApp for swift answers.
                  </p>
                </div>
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Vindhyachal Botanicals, I would like to inquire about essential oil bulk pricing.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shrink-0"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

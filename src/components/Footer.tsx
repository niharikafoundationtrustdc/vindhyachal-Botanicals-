import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Globe, 
  Award,
  ArrowRight
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenQuote }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSent(true);

    const text = `*New Contact Message - Vindhyachal Botanicals Website*\n` +
      `• Name: ${contactName}\n` +
      `• Phone: ${contactPhone}\n` +
      `• Email: ${contactEmail}\n` +
      `• Message: ${contactMessage}`;

    const waUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact-section" className="bg-[#151833] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Contact & Inquiries Banner */}
        <div className="bg-gradient-to-r from-[#1c224a] to-[#252c5c] rounded-3xl p-6 sm:p-10 border border-stone-700/80 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                <Globe className="w-3.5 h-3.5" />
                <span>Global Inquiries Welcome</span>
              </div>
              <h3 className="font-brand-serif font-bold text-2xl sm:text-3xl text-white">
                Connect Directly with Our Extraction Works
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Whether you need bulk 25kg / 200kg drums, custom private label formulations, or Certificate of Analysis (COA) documentation, our botanical specialists are at your service.
              </p>

              <div className="space-y-2.5 pt-2 text-xs">
                <a 
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="flex items-center gap-2.5 text-stone-200 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{COMPANY_DETAILS.phone} (Call / WhatsApp)</span>
                </a>

                <div className="flex items-start gap-2.5 text-stone-200">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    {COMPANY_DETAILS.emails.map((email, idx) => (
                      <a 
                        key={idx}
                        href={`mailto:${email}`}
                        className="hover:text-emerald-400 transition-colors block"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-stone-200">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{COMPANY_DETAILS.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="lg:col-span-7 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <h4 className="font-brand-serif font-bold text-lg text-white mb-3">
                Send Direct Message
              </h4>

              {messageSent ? (
                <div className="p-4 bg-emerald-900/60 border border-emerald-400 rounded-xl text-xs text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Your message has been initiated. WhatsApp will open now to send directly to our team.</span>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-900/80 border border-stone-700 rounded-lg text-white placeholder-stone-400 focus:outline-hidden focus:border-emerald-400"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp Number"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-900/80 border border-stone-700 rounded-lg text-white placeholder-stone-400 focus:outline-hidden focus:border-emerald-400"
                    />
                  </div>

                  <input
                    type="email"
                    required
                    placeholder="Business Email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-900/80 border border-stone-700 rounded-lg text-white placeholder-stone-400 focus:outline-hidden focus:border-emerald-400"
                  />

                  <textarea
                    rows={2}
                    required
                    placeholder="Tell us about the oils, quantities, or private labeling specifications you require..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-900/80 border border-stone-700 rounded-lg text-white placeholder-stone-400 focus:outline-hidden focus:border-emerald-400"
                  />

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand Info & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/95 p-3 rounded-2xl inline-block">
              <Logo variant="horizontal" size="md" />
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Passionate manufacturers, suppliers, and exporters of pure natural extracts, dedicated to preserving the inherent vitality of the soul, body, and spirit. Based in Datia, MPC, India.
            </p>
            <div className="flex items-center gap-3 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified GC-MS Batch Testing</span>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-brand-serif font-bold text-sm text-white uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('hydrosols');
                    scrollTo('products-section');
                  }}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-emerald-500" />
                  <span>Hydrosols (Floral Waters)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('essential_oils');
                    scrollTo('products-section');
                  }}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-emerald-500" />
                  <span>Pure Essential Oils</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('carrier_oils');
                    scrollTo('products-section');
                  }}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-emerald-500" />
                  <span>Cold Pressed Carrier Oils</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('special_ingredients');
                    scrollTo('products-section');
                  }}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-emerald-500" />
                  <span>Special Active Ingredients</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('pharma_grade');
                    scrollTo('products-section');
                  }}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-emerald-500" />
                  <span>Pharma Grade (IP / BP Tested)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & OEM */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-brand-serif font-bold text-sm text-white uppercase tracking-wider">
              Contract Manufacturing
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>
                <button 
                  onClick={() => scrollTo('private-labeling')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Private Labeling &amp; Bottle Filling
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('private-labeling')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Custom Label Artwork &amp; Printing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('private-labeling')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Amber &amp; Cobalt Blue Glass Bottles
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenQuote}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Bulk Industrial Drums (25kg - 200kg)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('certifications')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1 font-semibold text-emerald-400/90"
                >
                  <span>Our Certification (ISO &amp; GMP)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('why-us')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Why Choose Vindhyachal Botanicals
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quality & Export */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-brand-serif font-bold text-sm text-white uppercase tracking-wider">
              Manufacturing Base
            </h4>
            <div className="text-xs text-stone-400 space-y-2">
              <p>
                <strong>Factory Works:</strong><br />
                Vindhyachal Botanicals<br />
                Datia, Madhya Pradesh<br />
                India
              </p>
              <div className="pt-2">
                <span className="text-[11px] text-amber-400 block font-semibold">
                  Operating Hours:
                </span>
                <span className="text-[11px] text-stone-400">
                  Mon – Sat: 9:00 AM – 7:00 PM IST
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Vindhyachal Botanicals. All rights reserved. Direct Manufacturers &amp; Exporters.</p>
            <span className="hidden sm:inline text-stone-600">•</span>
            <p className="text-stone-400">
              Developed by <span className="text-stone-300 font-medium">Digital communique private limited</span>
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>100% Pure Extracts</span>
            <span>•</span>
            <span>Sustainable Agriculture</span>
            <span>•</span>
            <span>Global Port Dispatch</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { 
  Package, 
  Layers, 
  Palette, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

export const PrivateLabeling: React.FC = () => {
  const [selectedOil, setSelectedOil] = useState('Lavender Oil');
  const [selectedBottle, setSelectedBottle] = useState('Amber Glass Dropper (30ml)');
  const [selectedLabelMethod, setSelectedLabelMethod] = useState('We design and print your custom labels');
  const [estimatedQuantity, setEstimatedQuantity] = useState('500 Units');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientBrand, setClientBrand] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handlePrivateLabelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);

    // Format WhatsApp message
    const msg = `*New Private Label Inquiry - Vindhyachal Botanicals*
• Brand Name: ${clientBrand || 'New Startup'}
• Client Name: ${clientName}
• Contact: ${clientPhone}
• Requested Oil: ${selectedOil}
• Packaging: ${selectedBottle}
• Labeling Service: ${selectedLabelMethod}
• Estimated Run: ${estimatedQuantity}`;

    const waUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="private-labeling" className="py-16 md:py-24 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title & Badge matching Screenshot 6 */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="font-brand-serif text-3xl sm:text-4xl md:text-5xl text-[#78350f] font-bold">
            Services <span className="font-normal text-stone-800">We offer</span>
          </h2>
          
          <div>
            <span className="inline-block px-6 py-2 rounded-xl border-2 border-[#78350f] text-[#78350f] font-bold text-base tracking-wide bg-stone-50 shadow-2xs">
              Private Labeling
            </span>
          </div>
        </div>

        {/* Section Main Content Row matching Screenshots 6 & 8 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Packaging & Bottles Showcase Visual matching Screenshot 6 */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-stone-50 p-6 rounded-3xl border border-stone-200 shadow-sm">
              <div className="aspect-4/3 rounded-2xl overflow-hidden bg-white border border-stone-100 flex items-center justify-center p-4 relative">
                <img
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
                  alt="Custom Cosmetic Packaging Bottles & Pouches"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-900/30 backdrop-blur-[1px] rounded-xl flex items-center justify-center">
                  <div className="border-2 border-dashed border-white/90 px-6 py-4 rounded-xl text-center bg-black/40 backdrop-blur-xs">
                    <span className="text-white font-black tracking-widest text-base sm:text-lg uppercase block font-sans">
                      YOUR LABEL HERE
                    </span>
                    <span className="text-stone-200 text-xs mt-1 block">
                      Custom Logo & Label Design Included
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Specs Pill under Image */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2.5 bg-white rounded-xl border border-stone-200">
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Standard Glass</span>
                  <span className="font-bold text-stone-800">5ml – 100ml</span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-stone-200">
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Plastic & Drums</span>
                  <span className="font-bold text-stone-800">15ml – 200kg</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Description from Screenshot 6 */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Experience personalized excellence with our Customized Packaging Design, encompassing logo creation and packaging labels in our Contract Manufacturing services. Vindhyachal Botanicals excels in the production and private labeling of premium-grade Natural Essential Oils &amp; Carrier Oils. Renowned for our expertise in private labeling, we tailor our services to meet your specific product requirements. Whether on a contract basis or for third-party collaborations, our commitment to organic excellence ensures your brand stands out in the market.
            </p>

            {/* Amber & Blue Glass Information matching Screenshot 8 */}
            <div className="bg-[#faf9f6] p-5 rounded-2xl border border-stone-200 space-y-2.5">
              <h3 className="font-brand-serif font-bold text-stone-900 text-base flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>Bottles & Packaging Integrity</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Essential Oils should almost always be stored in dark coloured glass bottles as they are photosensitive (reactive to light) and also because they can react with plastic. We have standard glass bottle options available for essential oils and plastic bottles for carrier oils. But we can also provide custom options if your quantities are higher.
              </p>
              
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="bg-white p-3 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block text-xs">Round Blue / Amber Glass Bottles:</strong>
                  <span className="text-stone-600">5ml, 10ml, 15ml, 30ml, 50ml, 100ml</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block text-xs">Plastic Bottles of Varying Sizes:</strong>
                  <span className="text-stone-600">15ml, 30ml, 50ml, 100ml, 200ml</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Labels Design Methods matching Screenshot 7 */}
        <div className="mb-16 bg-[#faf9f6] p-6 sm:p-10 rounded-3xl border border-stone-200">
          <div className="max-w-2xl mb-8">
            <h3 className="font-brand-serif font-bold text-2xl text-stone-900">
              Labels & Branding Options
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              There are few different ways to handle label design and printing with Vindhyachal Botanicals:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Method 1 */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs hover:border-emerald-500 transition-all flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#0e632b] font-bold text-xs flex items-center justify-center mb-3">
                  1
                </span>
                <h4 className="font-bold text-sm text-stone-900 mb-2">
                  Client Prints & Ships
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  You get the labels designed and printed, and sent to us. We will apply the labels on your bottles during batch filling.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-emerald-800 mt-4 block">
                Best for established brands
              </span>
            </div>

            {/* Method 2 */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs hover:border-emerald-500 transition-all flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#0e632b] font-bold text-xs flex items-center justify-center mb-3">
                  2
                </span>
                <h4 className="font-bold text-sm text-stone-900 mb-2">
                  You Send Artwork, We Print
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  You get the labels designed and send us the artwork. We will get the labels printed with waterproof inks and apply to your bottles.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-emerald-800 mt-4 block">
                Waterproof & Metallic Foils
              </span>
            </div>

            {/* Method 3 */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs hover:border-emerald-500 transition-all flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#0e632b] font-bold text-xs flex items-center justify-center mb-3">
                  3
                </span>
                <h4 className="font-bold text-sm text-stone-900 mb-2">
                  Complete End-to-End Design & Print
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  We design your logo, packaging labels, and print everything in-house with full compliance details and regulatory barcoding.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-emerald-800 mt-4 block">
                Turnkey Launch Solution
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Private Label Request Form */}
        <div className="bg-gradient-to-br from-[#151833] to-[#1e2348] text-white p-6 sm:p-10 rounded-3xl shadow-xl">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Instant Contract Bottling Quotation
            </div>
            <h3 className="font-brand-serif font-bold text-2xl sm:text-3xl">
              Start Your Own Oil Brand Today
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm mt-1">
              Select your specifications below to receive an instant sample kit and wholesale manufacturing quote.
            </p>
          </div>

          <form onSubmit={handlePrivateLabelSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                Brand / Business Name
              </label>
              <input
                type="text"
                required
                value={clientBrand}
                onChange={(e) => setClientBrand(e.target.value)}
                placeholder="e.g. PureBotanica Organic"
                className="w-full px-3.5 py-2 text-xs bg-stone-900/60 border border-stone-700 rounded-xl text-white placeholder-stone-500 focus:outline-hidden focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                Your Contact Name
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-3.5 py-2 text-xs bg-stone-900/60 border border-stone-700 rounded-xl text-white placeholder-stone-500 focus:outline-hidden focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                Phone / WhatsApp No.
              </label>
              <input
                type="tel"
                required
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="+91 / Country Code + Phone"
                className="w-full px-3.5 py-2 text-xs bg-stone-900/60 border border-stone-700 rounded-xl text-white placeholder-stone-500 focus:outline-hidden focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                Oil Formulation Required
              </label>
              <select
                value={selectedOil}
                onChange={(e) => setSelectedOil(e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-stone-900/90 border border-stone-700 rounded-xl text-white focus:outline-hidden focus:border-emerald-400"
              >
                <option value="Lavender Essential Oil">Lavender Essential Oil</option>
                <option value="Tea Tree Oil BP">Tea Tree Oil BP</option>
                <option value="Rosemary Oil BP">Rosemary Oil BP (Hair Growth)</option>
                <option value="Sweet Almond Oil">Sweet Almond Oil</option>
                <option value="Black Cumin Seed (Kalonji) Oil">Black Cumin Seed (Kalonji) Oil</option>
                <option value="Damask Rose Hydrosol">Damask Rose Hydrosol</option>
                <option value="Peppermint Hydrosol">Peppermint Hydrosol</option>
                <option value="Frankincense Serrata Oil">Frankincense Serrata Oil</option>
                <option value="Pure Virgin Argan Oil">Pure Virgin Argan Oil</option>
                <option value="Custom Herbal Blend">Custom Custom Herbal Blend</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                Bottle Type &amp; Size
              </label>
              <select
                value={selectedBottle}
                onChange={(e) => setSelectedBottle(e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-stone-900/90 border border-stone-700 rounded-xl text-white focus:outline-hidden focus:border-emerald-400"
              >
                <option value="Round Amber Glass Dropper (30ml)">Round Amber Glass Dropper (30ml)</option>
                <option value="Round Amber Glass Dropper (15ml)">Round Amber Glass Dropper (15ml)</option>
                <option value="Cobalt Blue Glass Bottle (30ml)">Cobalt Blue Glass Bottle (30ml)</option>
                <option value="Round Amber Glass (50ml)">Round Amber Glass (50ml)</option>
                <option value="Round Amber Glass (100ml)">Round Amber Glass (100ml)</option>
                <option value="Fine Mist Spray Bottle (100ml)">Fine Mist Spray Bottle (100ml for Hydrosols)</option>
                <option value="Plastic Lotion / Pump Bottle (100ml/200ml)">Plastic Lotion / Pump Bottle (100ml/200ml)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                Estimated Batch Volume
              </label>
              <select
                value={estimatedQuantity}
                onChange={(e) => setEstimatedQuantity(e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-stone-900/90 border border-stone-700 rounded-xl text-white focus:outline-hidden focus:border-emerald-400"
              >
                <option value="Sample Run (50 - 100 Units)">Sample Run (50 - 100 Units)</option>
                <option value="Startup Batch (250 - 500 Units)">Startup Batch (250 - 500 Units)</option>
                <option value="Commercial Run (1,000 - 2,500 Units)">Commercial Run (1,000 - 2,500 Units)</option>
                <option value="Bulk Industrial Export (5,000+ Units)">Bulk Industrial Export (5,000+ Units)</option>
              </select>
            </div>

            <div className="sm:col-span-2 lg:col-span-3 pt-3">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-[#0e632b] hover:bg-[#09471e] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Private Label Inquiry via WhatsApp</span>
              </button>
            </div>
          </form>

          {inquirySubmitted && (
            <div className="mt-4 p-3.5 bg-emerald-900/60 border border-emerald-500/40 rounded-xl text-xs text-emerald-200 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Thank you! Your private label specification is prepared. Our manufacturing team will connect with you promptly.</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

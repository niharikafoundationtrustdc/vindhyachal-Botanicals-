import React from 'react';
import { Package, Droplets, Check, ArrowRight, ShieldCheck, Box, Sparkles } from 'lucide-react';

interface CustomPackagingPageProps {
  onRequestQuote: () => void;
}

export const CustomPackagingPage: React.FC<CustomPackagingPageProps> = ({ onRequestQuote }) => {
  const bottleTypes = [
    {
      name: 'Pharmaceutical Amber Glass',
      sizes: '5ml, 10ml, 15ml, 30ml, 50ml, 100ml',
      desc: 'UV-blocking Type III soda-lime amber glass providing optimal photochemical protection for volatile terpenes and light-sensitive botanical extracts.',
      img: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Precision Treatment Droppers',
      sizes: '15ml, 30ml, 50ml Dropper Pipettes',
      desc: 'Graduated or plain glass pipettes with matte black, shiny gold, brushed silver, or eco-natural bamboo collars and silicone bulbs.',
      img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Epoxy-Lined Aluminum Canisters',
      sizes: '100ml, 250ml, 500ml, 1000ml, 5000ml',
      desc: 'Seamless brushed aluminum containers with food-grade epoxy inner coating to prevent oxidation and ensure safe international air courier shipment.',
      img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Cobalt Blue & Frosted Glass',
      sizes: '10ml, 15ml, 30ml, 50ml',
      desc: 'High-contrast colored glass for modern cosmetic lines and sensory wellness collections that desire an elevated aesthetic appeal.',
      img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=700&q=80',
    },
  ];

  const closureOptions = [
    { title: 'Euro Dropper Caps', desc: 'Tamper-evident rings with calibrated plastic orifice reducers (0.6mm - 1.2mm flow rates).' },
    { title: 'Fine Mist Sprayers', desc: 'Even 0.12cc per stroke atomization for floral hydrosols, face mists, and body toners.' },
    { title: 'Cosmetic Treatment Pumps', desc: 'Precision viscous dispensing pumps for thicker carrier oils and antioxidant serums.' },
    { title: 'Stainless Rollerballs', desc: 'Smooth cooling metal rollerball inserts for pulse-point aromatherapy and perfume oils.' },
  ];

  const bulkOptions = [
    { name: '1 kg & 5 kg Aluminum / HDPE Bottles', desc: 'Small-batch manufacturing and compounding pilot runs.' },
    { name: '25 kg UN-Approved HDPE Carboys', desc: 'Intermediate bulk storage with heavy-duty recessed handles and vented bung caps.' },
    { name: '180 kg – 200 kg Epoxy-Lined Steel Drums', desc: 'Industrial container loads for multinational cosmetic and flavor manufacturers.' },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#202723]">
      
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 bg-[#183C32] text-[#F7F4EC] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B79A62_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#B79A62] text-xs font-semibold uppercase tracking-widest mb-4">
            <Package className="w-3.5 h-3.5" />
            <span>BESPOKE PACKAGING ARCHITECTURE</span>
          </div>
          <h1 className="font-serif-brand text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Custom Packaging &amp; Bottling Solutions
          </h1>
          <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-6" />
          <p className="mt-6 text-base sm:text-lg text-[#F7F4EC]/80 max-w-2xl mx-auto font-light leading-relaxed">
            Protect the purity of botanical oils while captivating retail shelves. Comprehensive container selection, oil-proof label printing, and protective outer cartons.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onRequestQuote}
              className="px-8 py-4 bg-[#B79A62] hover:bg-[#a68953] text-[#183C32] font-semibold text-xs uppercase tracking-widest rounded-full transition-colors inline-flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Discuss Custom Packaging</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Primary Bottle Formats */}
      <section className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
              CONTAINER SELECTION
            </span>
            <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#183C32] mt-2">
              Primary Bottle Types &amp; Finishes
            </h2>
            <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bottleTypes.map((bottle, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#E9E2D3] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-4/3 overflow-hidden bg-[#E9E2D3]">
                    <img
                      src={bottle.img}
                      alt={bottle.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif-brand font-bold text-lg text-[#183C32]">
                      {bottle.name}
                    </h3>
                    <span className="text-xs font-semibold text-[#B79A62] block mt-1">
                      {bottle.sizes}
                    </span>
                    <p className="text-xs text-[#202723]/75 font-light mt-2.5 leading-relaxed">
                      {bottle.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-[#E9E2D3] flex items-center gap-1 text-[11px] text-[#496B52]">
                    <Check className="w-3.5 h-3.5 text-[#B79A62]" />
                    <span>UV Protection Certified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closures, Caps & Dispensers */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
              CLOSURE INTEGRATION
            </span>
            <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#183C32] mt-2">
              Dispensers, Droppers &amp; Atomizers
            </h2>
            <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {closureOptions.map((opt, i) => (
              <div
                key={i}
                className="bg-[#F7F4EC] p-6 rounded-2xl border border-[#E9E2D3] text-center"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-[#B79A62]/40 flex items-center justify-center text-[#183C32] mx-auto mb-4 font-serif-brand font-bold text-sm">
                  0{i + 1}
                </div>
                <h4 className="font-serif-brand font-bold text-base text-[#183C32] mb-1">
                  {opt.title}
                </h4>
                <p className="text-xs text-[#202723]/70 font-light leading-relaxed">
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Label Printing & Unit Cartons */}
      <section className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
                BRANDING &amp; LABELS
              </span>
              <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#183C32]">
                Oil-Resistant Label Printing &amp; Custom Cartons
              </h2>
              <div className="w-12 h-0.5 bg-[#B79A62]" />

              <p className="text-sm text-[#202723]/80 font-light leading-relaxed">
                Essential oils contain concentrated terpenes that degrade ordinary paper labels. We print on chemical-resistant synthetic polypropylene film with matte thermal laminations, gold foil stamping, and waterproof adhesives to maintain immaculate branding throughout the product lifecycle.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-[#183C32]">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#B79A62] shrink-0 mt-0.5" />
                  <span>Metallic hot foil stamping (Gold, Rose Gold, Silver, Bronze).</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#B79A62] shrink-0 mt-0.5" />
                  <span>Soft-touch matte lamination and UV spot varnish highlights.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#B79A62] shrink-0 mt-0.5" />
                  <span>Custom FSC-certified paperboard outer cartons with die-cut inserts.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E9E2D3]">
                <img
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80"
                  alt="Custom botanical cosmetic packaging with foil labels"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Industrial Bulk Packaging */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
              INDUSTRIAL SCALE
            </span>
            <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#183C32] mt-2">
              Bulk Export Drums &amp; Containers
            </h2>
            <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bulkOptions.map((bulk, idx) => (
              <div
                key={idx}
                className="bg-[#F7F4EC] rounded-2xl p-8 border border-[#E9E2D3] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E9E2D3] flex items-center justify-center text-[#183C32] mb-4">
                    <Box className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-brand font-bold text-xl text-[#183C32] mb-2">
                    {bulk.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#202723]/75 font-light leading-relaxed">
                    {bulk.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E9E2D3] text-xs text-[#496B52] font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#B79A62]" />
                  <span>UN Export Transport Certified</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={onRequestQuote}
              className="px-8 py-4 bg-[#183C32] hover:bg-[#204e41] text-[#F7F4EC] rounded-full text-xs font-semibold uppercase tracking-widest transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Request Custom Packaging Sample &amp; Pricing</span>
              <ArrowRight className="w-4 h-4 text-[#B79A62]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

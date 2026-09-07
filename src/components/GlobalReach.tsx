import React from 'react';
import { Globe, Plane, Ship, MapPin, CheckCircle2, Shield } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

export const GlobalReach: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E9E2D3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
            INTERNATIONAL EXPORT CAPABILITIES
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#183C32] mt-2 tracking-tight">
            From India to the World
          </h2>
          <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-4" />
          <p className="mt-4 text-base sm:text-lg text-[#202723]/80 font-light leading-relaxed">
            As exporters, our reach extends globally while our commitment remains personal. We work with businesses seeking dependable natural ingredient supply and customized botanical solutions.
          </p>
        </div>

        {/* 3 Core Pillars: Manufacturing, Supply, Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          
          <div className="bg-white rounded-2xl p-8 border border-[#E9E2D3] shadow-xs text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#F7F4EC] border border-[#B79A62]/30 flex items-center justify-center text-[#183C32] mb-4">
              <MapPin className="w-6 h-6 text-[#183C32]" />
            </div>
            <span className="text-[11px] uppercase tracking-widest text-[#B79A62] font-semibold block mb-1">
              Direct Extraction
            </span>
            <h3 className="font-serif-brand font-bold text-2xl text-[#183C32]">
              Manufacturing
            </h3>
            <p className="font-medium text-sm text-[#496B52] mt-1">
              Datia, Madhya Pradesh, India
            </p>
            <p className="text-xs text-[#202723]/70 font-light mt-3 leading-relaxed">
              Located within heartland botanical harvesting tracks, ensuring fresh distillation runs and zero degradation during post-harvest transit.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-[#E9E2D3] shadow-xs text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#F7F4EC] border border-[#B79A62]/30 flex items-center justify-center text-[#183C32] mb-4">
              <Globe className="w-6 h-6 text-[#183C32]" />
            </div>
            <span className="text-[11px] uppercase tracking-widest text-[#B79A62] font-semibold block mb-1">
              Fulfillment Network
            </span>
            <h3 className="font-serif-brand font-bold text-2xl text-[#183C32]">
              Supply
            </h3>
            <p className="font-medium text-sm text-[#496B52] mt-1">
              Domestic + International
            </p>
            <p className="text-xs text-[#202723]/70 font-light mt-3 leading-relaxed">
              Standardized courier, air cargo and full container loads (FCL/LCL) through major air hubs and ocean export ports.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-[#E9E2D3] shadow-xs text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#F7F4EC] border border-[#B79A62]/30 flex items-center justify-center text-[#183C32] mb-4">
              <Shield className="w-6 h-6 text-[#183C32]" />
            </div>
            <span className="text-[11px] uppercase tracking-widest text-[#B79A62] font-semibold block mb-1">
              Flexible Engagement
            </span>
            <h3 className="font-serif-brand font-bold text-2xl text-[#183C32]">
              Solutions
            </h3>
            <p className="font-medium text-sm text-[#496B52] mt-1">
              Bulk + Private Label
            </p>
            <p className="text-xs text-[#202723]/70 font-light mt-3 leading-relaxed">
              Supplying bulk drums for cosmetic manufacturing facilities and turnkey packaged solutions for global retail beauty houses.
            </p>
          </div>

        </div>

        {/* Minimalist World Export Illustration Map Container */}
        <div className="bg-[#183C32] text-[#F7F4EC] rounded-2xl p-8 sm:p-12 relative overflow-hidden border border-[#B79A62]/30 shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B79A62]/20 text-[#B79A62] text-xs font-semibold uppercase tracking-widest">
                <Plane className="w-3.5 h-3.5" />
                <span>Export Logistics &amp; Compliance</span>
              </div>
              <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#F7F4EC]">
                Seamless Customs Clearance &amp; Documentation
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F4EC]/80 font-light leading-relaxed">
                Every overseas consignment is accompanied by comprehensive export dossiers: Certificate of Analysis (COA), Safety Data Sheets (MSDS), Certificate of Origin, Phytosanitary certification, and Non-Dangerous Goods declarations where applicable.
              </p>
              
              <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-[#A8B7A1]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B79A62]" />
                  <span>Door-to-Door Air Freight</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B79A62]" />
                  <span>Sea Cargo Drum Shipments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B79A62]" />
                  <span>UN-Approved Packaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B79A62]" />
                  <span>Multi-Currency B2B Invoicing</span>
                </div>
              </div>
            </div>

            {/* Stylized World Map Visual with India Origin Marker */}
            <div className="lg:col-span-6 relative flex items-center justify-center p-4">
              <div className="w-full max-w-md aspect-16/9 rounded-xl bg-white/5 border border-white/10 p-6 flex flex-col items-center justify-center text-center relative">
                {/* World Map SVG minimal dots */}
                <svg className="w-full h-full text-[#B79A62]/20" viewBox="0 0 400 200" fill="currentColor">
                  {/* Stylized continents */}
                  <circle cx="100" cy="70" r="14" />
                  <circle cx="120" cy="80" r="18" />
                  <circle cx="140" cy="90" r="12" />
                  <circle cx="110" cy="130" r="16" />
                  <circle cx="125" cy="150" r="12" />
                  <circle cx="200" cy="65" r="20" />
                  <circle cx="220" cy="75" r="16" />
                  <circle cx="210" cy="110" r="22" />
                  <circle cx="225" cy="135" r="14" />
                  {/* India coordinate highlighted */}
                  <circle cx="270" cy="95" r="8" className="text-[#B79A62]" />
                  <circle cx="270" cy="95" r="18" className="text-[#B79A62] animate-ping opacity-30" />
                  {/* East Asia & Australia */}
                  <circle cx="320" cy="85" r="16" />
                  <circle cx="340" cy="140" r="18" />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-radial from-[#183C32]/60 to-transparent pointer-events-none">
                  <div className="bg-[#B79A62] text-[#183C32] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Origin: India (Datia Extraction Facility)</span>
                  </div>
                  <span className="text-[11px] text-white/80 mt-2 font-medium">
                    Worldwide Dispatch • Global B2B Supply Chain
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

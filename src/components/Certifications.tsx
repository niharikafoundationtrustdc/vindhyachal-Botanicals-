import React from 'react';
import { ShieldCheck, CheckCircle2, Award, FileCheck, ExternalLink, Download } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading matching User Screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-brand-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-[#78350f]">Our</span>{' '}
            <span className="text-[#151833]">Certification</span>
          </h2>
          <div className="w-20 h-1 bg-[#78350f]/30 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Vindhyachal Botanicals adheres to globally recognized quality and safety protocols. Our manufacturing, processing, and export facilities are certified to meet rigorous international pharmacopoeia standards.
          </p>
        </div>

        {/* Two Main Certification Badges Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto items-stretch">
          
          {/* Badge 1: ISO 9001:2015 Certified Company */}
          <div className="bg-[#faf9f6] rounded-3xl p-8 border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center relative overflow-hidden group">
            {/* Top subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

            {/* Circular Vector Badge */}
            <div className="w-48 h-48 sm:w-52 sm:h-52 relative mb-6 drop-shadow-md">
              <svg viewBox="0 0 200 200" className="w-full h-full select-none">
                <defs>
                  {/* Top arc for CERTIFIED */}
                  <path
                    id="isoTopArc"
                    d="M 30,100 A 70,70 0 0,1 170,100"
                    fill="none"
                  />
                  {/* Bottom arc for COMPANY */}
                  <path
                    id="isoBottomArc"
                    d="M 35,100 A 65,65 0 0,0 165,100"
                    fill="none"
                  />
                </defs>

                {/* Outer concentric rings */}
                <circle cx="100" cy="100" r="96" fill="#ffffff" stroke="#0060b6" strokeWidth="2.5" />
                <circle cx="100" cy="100" r="91" fill="none" stroke="#0060b6" strokeWidth="1" />
                <circle cx="100" cy="100" r="63" fill="none" stroke="#0060b6" strokeWidth="1.5" />

                {/* Top Arched Text: CERTIFIED */}
                <text fill="#0060b6" fontSize="13.5" fontWeight="800" letterSpacing="3.5" textAnchor="middle">
                  <textPath href="#isoTopArc" xlinkHref="#isoTopArc" startOffset="50%">
                    CERTIFIED
                  </textPath>
                </text>

                {/* Bottom Arched Text: COMPANY */}
                <text fill="#0060b6" fontSize="13" fontWeight="800" letterSpacing="4" textAnchor="middle">
                  <textPath href="#isoBottomArc" xlinkHref="#isoBottomArc" startOffset="50%">
                    COMPANY
                  </textPath>
                </text>

                {/* Inner Solid Blue Circle */}
                <circle cx="100" cy="100" r="58" fill="#0060b6" />

                {/* Stylized Globe Latitude / Longitude lines inside inner circle */}
                <g stroke="#ffffff" strokeWidth="0.8" opacity="0.35" fill="none">
                  {/* Equator & Parallels */}
                  <line x1="42" y1="100" x2="158" y2="100" />
                  <ellipse cx="100" cy="100" rx="58" ry="24" />
                  <ellipse cx="100" cy="100" rx="58" ry="42" />
                  {/* Meridian Ellipses */}
                  <ellipse cx="100" cy="100" rx="24" ry="58" />
                  <ellipse cx="100" cy="100" rx="42" ry="58" />
                  <line x1="100" y1="42" x2="100" y2="158" />
                </g>

                {/* Center Bold ISO text */}
                <text
                  x="100"
                  y="96"
                  fill="#ffffff"
                  fontSize="27"
                  fontWeight="900"
                  letterSpacing="1"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  ISO
                </text>

                {/* Center 9001:2015 text */}
                <text
                  x="100"
                  y="120"
                  fill="#ffffff"
                  fontSize="12.5"
                  fontWeight="700"
                  letterSpacing="0.8"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  9001:2015
                </text>
              </svg>
            </div>

            {/* Badge Details */}
            <h3 className="font-brand-serif font-bold text-xl text-stone-900 mb-2">
              ISO 9001:2015 Certified
            </h3>
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold rounded-full border border-blue-200 mb-3">
              Quality Management System (QMS)
            </span>
            <p className="text-xs text-stone-600 leading-relaxed mb-5">
              Certifies our rigorous manufacturing framework, full batch traceability, standardized botanical extraction processes, and continuous quality audits across all production lines.
            </p>

            <ul className="text-left w-full space-y-2 text-xs text-stone-700 pt-4 border-t border-stone-200 mt-auto">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Standardized Quality Control Protocols</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Complete Batch Traceability from Field to Drum</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Audited for International Export Compliance</span>
              </li>
            </ul>
          </div>

          {/* Badge 2: GMP Certified Practice */}
          <div className="bg-[#faf9f6] rounded-3xl p-8 border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center relative overflow-hidden group">
            {/* Top subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

            {/* Circular Vector Badge */}
            <div className="w-48 h-48 sm:w-52 sm:h-52 relative mb-6 drop-shadow-md">
              <svg viewBox="0 0 200 200" className="w-full h-full select-none">
                <defs>
                  {/* Top arc for GOOD MANUFACTURING */}
                  <path
                    id="gmpTopArc"
                    d="M 28,100 A 72,72 0 0,1 172,100"
                    fill="none"
                  />
                  {/* Bottom arc for PRACTICE */}
                  <path
                    id="gmpBottomArc"
                    d="M 38,100 A 62,62 0 0,0 162,100"
                    fill="none"
                  />
                </defs>

                {/* Outer concentric rings */}
                <circle cx="100" cy="100" r="96" fill="#ffffff" stroke="#009639" strokeWidth="2.5" />
                <circle cx="100" cy="100" r="91" fill="none" stroke="#009639" strokeWidth="1" />
                <circle cx="100" cy="100" r="63" fill="none" stroke="#009639" strokeWidth="1.5" />

                {/* Top Arched Text: GOOD MANUFACTURING */}
                <text fill="#009639" fontSize="10.8" fontWeight="800" letterSpacing="1.2" textAnchor="middle">
                  <textPath href="#gmpTopArc" xlinkHref="#gmpTopArc" startOffset="50%">
                    GOOD MANUFACTURING
                  </textPath>
                </text>

                {/* Left Star */}
                <text x="36" y="105" fill="#009639" fontSize="13" textAnchor="middle">
                  ★
                </text>

                {/* Right Star */}
                <text x="164" y="105" fill="#009639" fontSize="13" textAnchor="middle">
                  ★
                </text>

                {/* Bottom Arched Text: PRACTICE */}
                <text fill="#009639" fontSize="12" fontWeight="800" letterSpacing="3.5" textAnchor="middle">
                  <textPath href="#gmpBottomArc" xlinkHref="#gmpBottomArc" startOffset="50%">
                    PRACTICE
                  </textPath>
                </text>

                {/* Inner Solid Green Circle */}
                <circle cx="100" cy="100" r="58" fill="#009639" />

                {/* Center Bold GMP text */}
                <text
                  x="100"
                  y="92"
                  fill="#ffffff"
                  fontSize="28"
                  fontWeight="900"
                  letterSpacing="1"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  GMP
                </text>

                {/* Horizontal CERTIFIED badge inside inner circle */}
                <rect
                  x="56"
                  y="106"
                  width="88"
                  height="20"
                  rx="3"
                  fill="#ffffff"
                />
                <text
                  x="100"
                  y="120"
                  fill="#009639"
                  fontSize="11"
                  fontWeight="900"
                  letterSpacing="1.8"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  CERTIFIED
                </text>
              </svg>
            </div>

            {/* Badge Details */}
            <h3 className="font-brand-serif font-bold text-xl text-stone-900 mb-2">
              GMP Certified Practice
            </h3>
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-full border border-emerald-200 mb-3">
              Good Manufacturing Practice
            </span>
            <p className="text-xs text-stone-600 leading-relaxed mb-5">
              Guarantees strict hygiene, environmental contamination control, cleanroom stainless steel distillation, and validated standard operating procedures for pharmaceuticals and cosmetics.
            </p>

            <ul className="text-left w-full space-y-2 text-xs text-stone-700 pt-4 border-t border-stone-200 mt-auto">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hygienic Cleanroom Distillation Units</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Contamination & Solvent-Free Extraction</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Compliant with IP / BP / USP Pharmacopoeia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Quality Assurance Strip */}
        <div className="mt-12 bg-stone-50 rounded-2xl p-6 border border-stone-200 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">Certificate of Analysis (COA) & GC-MS Available</h4>
              <p className="text-xs text-stone-500">Every commercial batch is accompanied by comprehensive testing documentation.</p>
            </div>
          </div>

          <a
            href="https://wa.me/918881301033?text=Hello%20Vindhyachal%20Botanicals%2C%20please%20share%20your%20ISO%20and%20GMP%20Certifications%20and%20batch%20COA."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#151833] hover:bg-[#0e632b] text-white text-xs font-semibold tracking-wide transition-colors shrink-0 shadow-xs flex items-center gap-1.5"
          >
            <FileCheck className="w-4 h-4" />
            <span>Request Certificate Copies</span>
          </a>
        </div>

      </div>
    </section>
  );
};

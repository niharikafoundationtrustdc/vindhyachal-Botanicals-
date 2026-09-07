import React from 'react';
import { ShieldCheck, FileCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-14 md:py-20 bg-stone-50/60 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-brand-serif text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="text-[#8B4513]">Our</span>{' '}
            <span className="text-[#151833]">Certification</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#8B4513]/40 mx-auto mt-2.5 rounded-full" />
          <p className="mt-3 text-stone-600 text-sm leading-relaxed">
            Our extraction, distillation, and packaging facilities operate under strict international quality and purity standards.
          </p>
        </div>

        {/* The Two Authentic Certification Seals Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto items-center">
          
          {/* ISO 9001:2015 Certified */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-xs flex flex-col items-center text-center">
            <div className="w-40 h-40 sm:w-44 sm:h-44 relative mb-4 drop-shadow-sm">
              <svg viewBox="0 0 200 200" className="w-full h-full select-none">
                <defs>
                  <path id="isoTopArc" d="M 30,100 A 70,70 0 0,1 170,100" fill="none" />
                  <path id="isoBottomArc" d="M 35,100 A 65,65 0 0,0 165,100" fill="none" />
                </defs>

                <circle cx="100" cy="100" r="96" fill="#ffffff" stroke="#0060b6" strokeWidth="2.5" />
                <circle cx="100" cy="100" r="91" fill="none" stroke="#0060b6" strokeWidth="1" />
                <circle cx="100" cy="100" r="63" fill="none" stroke="#0060b6" strokeWidth="1.5" />

                <text fill="#0060b6" fontSize="13.5" fontWeight="800" letterSpacing="3.5" textAnchor="middle">
                  <textPath href="#isoTopArc" xlinkHref="#isoTopArc" startOffset="50%">
                    CERTIFIED
                  </textPath>
                </text>

                <text fill="#0060b6" fontSize="13" fontWeight="800" letterSpacing="4" textAnchor="middle">
                  <textPath href="#isoBottomArc" xlinkHref="#isoBottomArc" startOffset="50%">
                    COMPANY
                  </textPath>
                </text>

                <circle cx="100" cy="100" r="58" fill="#0060b6" />

                <g stroke="#ffffff" strokeWidth="0.8" opacity="0.35" fill="none">
                  <line x1="42" y1="100" x2="158" y2="100" />
                  <ellipse cx="100" cy="100" rx="58" ry="24" />
                  <ellipse cx="100" cy="100" rx="58" ry="42" />
                  <ellipse cx="100" cy="100" rx="24" ry="58" />
                  <ellipse cx="100" cy="100" rx="42" ry="58" />
                  <line x1="100" y1="42" x2="100" y2="158" />
                </g>

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

            <h3 className="font-brand-serif font-bold text-lg text-stone-900">
              ISO 9001:2015 Certified
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Quality Management System &amp; Full Batch Traceability
            </p>
          </div>

          {/* GMP Certified */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-xs flex flex-col items-center text-center">
            <div className="w-40 h-40 sm:w-44 sm:h-44 relative mb-4 drop-shadow-sm">
              <svg viewBox="0 0 200 200" className="w-full h-full select-none">
                <defs>
                  <path id="gmpTopArc" d="M 28,100 A 72,72 0 0,1 172,100" fill="none" />
                  <path id="gmpBottomArc" d="M 38,100 A 62,62 0 0,0 162,100" fill="none" />
                </defs>

                <circle cx="100" cy="100" r="96" fill="#ffffff" stroke="#009639" strokeWidth="2.5" />
                <circle cx="100" cy="100" r="91" fill="none" stroke="#009639" strokeWidth="1" />
                <circle cx="100" cy="100" r="63" fill="none" stroke="#009639" strokeWidth="1.5" />

                <text fill="#009639" fontSize="10.8" fontWeight="800" letterSpacing="1.2" textAnchor="middle">
                  <textPath href="#gmpTopArc" xlinkHref="#gmpTopArc" startOffset="50%">
                    GOOD MANUFACTURING
                  </textPath>
                </text>

                <text x="36" y="105" fill="#009639" fontSize="13" textAnchor="middle">★</text>
                <text x="164" y="105" fill="#009639" fontSize="13" textAnchor="middle">★</text>

                <text fill="#009639" fontSize="12" fontWeight="800" letterSpacing="3.5" textAnchor="middle">
                  <textPath href="#gmpBottomArc" xlinkHref="#gmpBottomArc" startOffset="50%">
                    PRACTICE
                  </textPath>
                </text>

                <circle cx="100" cy="100" r="58" fill="#009639" />

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

                <rect x="56" y="106" width="88" height="20" rx="3" fill="#ffffff" />
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

            <h3 className="font-brand-serif font-bold text-lg text-stone-900">
              GMP Certified Practice
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Good Manufacturing Practice &amp; Cleanroom Distillation
            </p>
          </div>

        </div>

        {/* Minimal Certificate Action */}
        <div className="mt-8 text-center">
          <a
            href="https://wa.me/918881301033?text=Hello%20Vindhyachal%20Botanicals%2C%20please%20share%20your%20ISO%20and%20GMP%20Certificates%20and%20COA."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-[#0e632b] hover:text-[#09471e] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-full transition-colors"
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>Need official certificate copies or COA? Request here</span>
          </a>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ShieldCheck, Check, Clock, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { HEALTH_PACKAGES } from '../data/hospitalData';

interface HealthPackagesProps {
  onBookPackage: (packageTitle: string) => void;
}

export const HealthPackages: React.FC<HealthPackagesProps> = ({ onBookPackage }) => {
  const [expandedPkg, setExpandedPkg] = useState<string | null>(HEALTH_PACKAGES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedPkg(expandedPkg === id ? null : id);
  };

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16A6A1]/10 text-[#16A6A1] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Preventative Health Screening</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12345A] font-heading tracking-tight">
            HAVYAS HOSPITAL Health Checkup Packages
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Early detection transforms lives. Our comprehensive health checkups are curated by senior clinicians 
            to uncover hidden risk factors with same-day reports and specialist consultations.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HEALTH_PACKAGES.map((pkg) => {
            const isExpanded = expandedPkg === pkg.id;

            return (
              <div
                key={pkg.id}
                className={`bg-white rounded-3xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  pkg.isPopular
                    ? 'border-[#16A6A1] shadow-premium ring-2 ring-[#16A6A1]/20'
                    : 'border-slate-200 shadow-soft hover:shadow-premium'
                }`}
              >
                {/* Popular Pill */}
                {pkg.isPopular && (
                  <div className="bg-[#16A6A1] text-white text-[10px] font-extrabold uppercase tracking-widest text-center py-1 px-3">
                    Most Popular Choice
                  </div>
                )}

                <div className="p-6">
                  {/* Category */}
                  <span className="text-[11px] font-bold text-[#16A6A1] uppercase tracking-wider">
                    {pkg.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#12345A] font-heading mt-1 min-h-[50px]">
                    {pkg.title}
                  </h3>

                  {/* Tests Count & Turnaround */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                    <span className="font-semibold text-slate-700 bg-[#F2F7FA] px-2 py-0.5 rounded-md">
                      {pkg.testsCount}+ Vital Tests
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3 text-[#16A6A1]" />
                      <span>{pkg.tatTime}</span>
                    </span>
                  </div>

                  {/* Pricing Placeholder */}
                  <div className="mt-4 p-3 bg-[#F2F7FA] rounded-xl border border-slate-200/60">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                      Package Price (Placeholder)
                    </div>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-xl font-extrabold text-[#12345A] font-heading">
                        {pkg.pricePlaceholder}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        {pkg.originalPricePlaceholder}
                      </span>
                    </div>
                  </div>

                  {/* Recommended For */}
                  <div className="mt-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <strong className="text-slate-800">Ideal for: </strong>
                    <span>{pkg.recommendedFor}</span>
                  </div>

                  {/* Key Included Tests */}
                  <div className="mt-5 space-y-2">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Includes:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {pkg.features.slice(0, isExpanded ? pkg.features.length : 4).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#16A6A1] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {pkg.features.length > 4 && (
                      <button
                        onClick={() => toggleExpand(pkg.id)}
                        className="text-xs font-semibold text-[#16A6A1] hover:underline flex items-center gap-1 pt-1 cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            <span>Show fewer tests</span>
                            <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <span>+{pkg.features.length - 4} more investigations</span>
                            <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onBookPackage(pkg.title)}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#12345A] hover:bg-[#1a4778] active:bg-[#0c223c] transition-all flex items-center justify-center gap-2 shadow-soft cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#16A6A1]" />
                    <span>Book Health Checkup</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Preparation Guidelines */}
        <div className="mt-12 bg-[#F2F7FA] rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#12345A] text-white flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#5EEAD9]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#12345A]">
                Checkup Preparation Guidelines
              </div>
              <div className="text-xs text-slate-600">
                10-12 hours overnight fasting required. Water is permitted. Wear comfortable clothing.
              </div>
            </div>
          </div>
          <div className="text-xs text-slate-500 font-medium">
            Dedicated Wellness Concierge Lounge available for priority checkup patients.
          </div>
        </div>

      </div>
    </section>
  );
};

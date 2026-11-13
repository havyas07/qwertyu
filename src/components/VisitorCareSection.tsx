import React from 'react';
import { Clock, ShieldCheck, CreditCard, HeartHandshake, FileCheck } from 'lucide-react';
import { VISITOR_GUIDELINES, INSURANCE_PARTNERS_PLACEHOLDER, HOSPITAL_INFO } from '../data/hospitalData';

export const VisitorCareSection: React.FC = () => {
  return (
    <section id="visitor-care" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16A6A1]/10 text-[#16A6A1] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Patient-Centered Healthcare Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12345A] font-heading tracking-tight">
            Patient & Visitor Care Guidelines
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            At HAVYAS HOSPITAL, we strive to make your hospital journey smooth, dignified, and comfortable. 
            Review our visiting schedules, cashless insurance desk assistance, and admission protocols.
          </p>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {VISITOR_GUIDELINES.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F2F7FA] rounded-2xl p-6 border border-slate-200/80 shadow-soft hover:shadow-premium transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#12345A] text-[#5EEAD9] flex items-center justify-center mb-4">
                {idx === 0 && <Clock className="w-5 h-5" />}
                {idx === 1 && <HeartHandshake className="w-5 h-5" />}
                {idx === 2 && <ShieldCheck className="w-5 h-5" />}
                {idx === 3 && <CreditCard className="w-5 h-5" />}
              </div>
              <h3 className="text-base font-bold text-[#12345A] font-heading mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.details}
              </p>
            </div>
          ))}
        </div>

        {/* Cashless TPA & Insurance Desk Box */}
        <div className="bg-gradient-to-r from-[#12345A] to-[#1e4875] text-white rounded-3xl p-8 sm:p-10 shadow-premium relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#5EEAD9] text-xs font-bold uppercase tracking-wider">
                <CreditCard className="w-3.5 h-3.5" />
                <span>24/7 Cashless Hospitalization Support</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                HAVYAS HOSPITAL Cashless Insurance & TPA Desk
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                We facilitate hassle-free, zero-cash hospitalization for planned admissions and emergency procedures. 
                Our specialized TPA desk assists with policy pre-authorization, query resolution, and quick approvals.
              </p>

              {/* Required Documents Checklist */}
              <div className="pt-2">
                <div className="text-xs font-bold text-[#5EEAD9] uppercase tracking-wider mb-2">
                  Documents Needed for Cashless Pre-Authorization:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#16A6A1] flex-shrink-0" />
                    <span>Health Insurance Policy Card / TPA E-Card</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#16A6A1] flex-shrink-0" />
                    <span>Government Photo ID (Aadhaar / Voter ID / Passport)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#16A6A1] flex-shrink-0" />
                    <span>Doctor Admission Advice & Diagnosis Slip</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#16A6A1] flex-shrink-0" />
                    <span>Previous Relevant Investigation Reports & Prescriptions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Insurance Partners Placeholder Grid */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3 text-center">
                Empaneled Insurers & TPAs (Editable Placeholders)
              </div>
              <div className="grid grid-cols-2 gap-2">
                {INSURANCE_PARTNERS_PLACEHOLDER.map((partner, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 hover:bg-white/20 transition-colors p-2.5 rounded-lg text-center text-xs font-semibold text-slate-100 border border-white/10"
                  >
                    {partner}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-white/15 text-center text-[11px] text-slate-300">
                Contact TPA Desk Direct: <strong className="text-white">{HOSPITAL_INFO.phonePlaceholder}</strong>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { HospitalLogo } from './HospitalLogo';
import { HOSPITAL_INFO, DEPARTMENTS } from '../data/hospitalData';
import { Mail, MapPin, AlertTriangle, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenAppointmentModal: () => void;
  onOpenPatientPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAppointmentModal,
  onOpenPatientPortal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0c223c] text-slate-300 pt-16 pb-8 border-t-4 border-[#16A6A1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Quick Emergency Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center">
          <div className="lg:col-span-6">
            <HospitalLogo variant="white" size="lg" showTagline={true} />
            <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              HAVYAS HOSPITAL is a premier tertiary care healthcare institution dedicated to clinical excellence, 
              advanced biomedical technology, and compassionate patient healing across specialized super-specialties.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-3 lg:justify-end">
            <div className="bg-red-950/80 border border-red-500/40 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-red-300 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span>24/7 Emergency Line</span>
              </div>
              <div className="text-sm sm:text-base font-extrabold text-white mt-1">
                {HOSPITAL_INFO.emergencyPhonePlaceholder}
              </div>
            </div>

            <div className="bg-[#12345A] border border-teal-500/40 p-4 rounded-xl">
              <div className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                General Hospital Helpdesk
              </div>
              <div className="text-sm sm:text-base font-bold text-white mt-1">
                {HOSPITAL_INFO.phonePlaceholder}
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-12 border-b border-white/10 text-xs">
          
          {/* Col 1: Centers of Excellence */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Centers of Excellence
            </h4>
            <ul className="space-y-2">
              {DEPARTMENTS.slice(0, 6).map((dept) => (
                <li key={dept.id}>
                  <a
                    href="#departments"
                    className="hover:text-[#5EEAD9] transition-colors"
                  >
                    {dept.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Patient & Visitor Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Patient Care & Services
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenAppointmentModal}
                  className="hover:text-[#5EEAD9] transition-colors text-left"
                >
                  Book Doctor Consultation
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPatientPortal}
                  className="hover:text-[#5EEAD9] transition-colors text-left"
                >
                  Download Diagnostic Lab Reports
                </button>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#5EEAD9] transition-colors">
                  Preventive Health Checkup Packages
                </a>
              </li>
              <li>
                <a href="#visitor-care" className="hover:text-[#5EEAD9] transition-colors">
                  Cashless Insurance & TPA Desk
                </a>
              </li>
              <li>
                <a href="#visitor-care" className="hover:text-[#5EEAD9] transition-colors">
                  Visitor Timings & Guidelines
                </a>
              </li>
              <li>
                <a href="#emergency" className="hover:text-[#5EEAD9] transition-colors">
                  24/7 Ambulance & Trauma Protocol
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory & Quality Accreditations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Quality & Accreditations
            </h4>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-2 text-[11px] text-slate-300">
              <div className="flex items-start gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#5EEAD9] flex-shrink-0 mt-0.5" />
                <span>{HOSPITAL_INFO.accreditationsPlaceholder}</span>
              </div>
              <div className="pt-1 border-t border-white/10 text-slate-400">
                Reg: <span className="text-slate-200">{HOSPITAL_INFO.registrationPlaceholder}</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-400">
              Annual Bio-Medical Waste Compliance Report & Infection Control Audits maintained as per statutory healthcare norms [Placeholder].
            </div>
          </div>

          {/* Col 4: Campus Contact Placeholder */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Campus Location
            </h4>
            <div className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-[#16A6A1] flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">{HOSPITAL_INFO.addressPlaceholder}</p>
            </div>
            <div className="flex items-center gap-2 text-slate-300 pt-1">
              <Mail className="w-4 h-4 text-[#16A6A1] flex-shrink-0" />
              <span>{HOSPITAL_INFO.emailPlaceholder}</span>
            </div>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#5EEAD9] hover:underline cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} <strong>HAVYAS HOSPITAL</strong>. All Rights Reserved. &ldquo;Compassion. Care. Commitment.&rdquo;
          </div>

          <div className="flex flex-wrap gap-4 text-slate-400">
            <span className="hover:text-white cursor-pointer">Patient Rights & Responsibilities</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Clinical Ethics Committee</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

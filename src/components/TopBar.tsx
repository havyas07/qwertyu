import React from 'react';
import { Phone, Clock, FileText, AlertTriangle, ShieldCheck } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface TopBarProps {
  onOpenPatientPortal: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenPatientPortal }) => {
  return (
    <div className="bg-[#0c223c] text-slate-200 text-xs py-2 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Emergency & Ambulance Quick Access */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-red-300 font-medium animate-pulse">
            <AlertTriangle className="w-3.5 h-3.5 mr-1.5 text-red-400" />
            <span>24/7 Emergency:</span>
            <span className="ml-1 text-white font-semibold underline underline-offset-2">
              {HOSPITAL_INFO.emergencyPhonePlaceholder}
            </span>
          </div>

          <div className="flex items-center text-slate-300">
            <Phone className="w-3.5 h-3.5 mr-1.5 text-[#16A6A1]" />
            <span>Ambulance:</span>
            <span className="ml-1 text-white font-medium">
              {HOSPITAL_INFO.ambulancePhonePlaceholder}
            </span>
          </div>

          <div className="flex items-center text-slate-300 hidden xl:flex">
            <Clock className="w-3.5 h-3.5 mr-1.5 text-[#16A6A1]" />
            <span>OPD: 08:30 AM - 08:00 PM</span>
          </div>
        </div>

        {/* Right: Accreditations badge & Patient Portal */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-emerald-400 text-[11px] font-medium bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
            <ShieldCheck className="w-3 h-3 mr-1" />
            <span>NABH Accredited & NABL Certified [Placeholder]</span>
          </div>

          <button
            onClick={onOpenPatientPortal}
            className="flex items-center text-teal-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded border border-white/10 font-medium cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 mr-1 text-[#16A6A1]" />
            <span>Patient Portal / Lab Reports</span>
          </button>
        </div>
      </div>
    </div>
  );
};


import React from 'react';
import { Ambulance, PhoneCall, CheckCircle } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const EmergencyBanner: React.FC = () => {
  return (
    <section id="emergency" className="py-8 bg-gradient-to-r from-red-950 via-[#12345A] to-red-950 text-white relative overflow-hidden">
      {/* Background glowing radar rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Emergency Alert Header */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-red-300 bg-red-950/70 border border-red-500/40 px-3 py-1 rounded-full">
                  Level-1 Emergency & Golden Hour Trauma Care
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Zero-Delay Emergency Medical Triage
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                At HAVYAS HOSPITAL, acute cardiac emergencies, strokes, head trauma, and critical poisoning cases are 
                treated immediately by emergency medicine specialists without waiting for admissions paperwork or financial clearance.
              </p>

              {/* Real-time readiness pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
                <div className="bg-black/30 rounded-lg p-2 border border-white/10 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">STEMI PPCI 24/7</span>
                </div>
                <div className="bg-black/30 rounded-lg p-2 border border-white/10 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">Stroke Thrombolysis</span>
                </div>
                <div className="bg-black/30 rounded-lg p-2 border border-white/10 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">Trauma OT Ready</span>
                </div>
                <div className="bg-black/30 rounded-lg p-2 border border-white/10 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">24/7 Blood Bank</span>
                </div>
              </div>
            </div>

            {/* Right: Emergency Contact Callout Boxes */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
              
              {/* Emergency Hotline Box */}
              <div className="bg-red-600/90 hover:bg-red-600 transition-colors rounded-xl p-4 sm:p-5 shadow-lg border border-red-400/40 text-center flex-1">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-red-100 uppercase tracking-wider mb-1">
                  <PhoneCall className="w-4 h-4 animate-bounce" />
                  <span>24/7 Emergency Triage Hotline</span>
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-white tracking-wide font-heading">
                  {HOSPITAL_INFO.emergencyPhonePlaceholder}
                </div>
                <div className="text-[11px] text-red-200 mt-1">
                  Immediate triage doctor consultation & ER bed reservation
                </div>
              </div>

              {/* Ambulance Dispatch Box */}
              <div className="bg-[#12345A]/90 hover:bg-[#12345A] transition-colors rounded-xl p-4 sm:p-5 shadow-lg border border-teal-400/40 text-center flex-1">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-teal-300 uppercase tracking-wider mb-1">
                  <Ambulance className="w-4 h-4" />
                  <span>GPS Advanced Life Support (ALS) Ambulance</span>
                </div>
                <div className="text-base sm:text-lg font-bold text-white tracking-wide font-heading">
                  {HOSPITAL_INFO.ambulancePhonePlaceholder}
                </div>
                <div className="text-[11px] text-teal-200 mt-1">
                  Ventilator, defibrillator & paramedic onboard
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

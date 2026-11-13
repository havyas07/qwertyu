import React, { useState } from 'react';
import { ShieldCheck, Calendar, ArrowRight, Ambulance, Search, HeartPulse, Sparkles, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_INFO, DEPARTMENTS } from '../data/hospitalData';

interface HeroProps {
  onOpenAppointmentModal: (doctorId?: string, deptId?: string) => void;
  onOpenPatientPortal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAppointmentModal,
}) => {
  const [selectedDept, setSelectedDept] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenAppointmentModal(undefined, selectedDept || undefined);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F2F7FA] via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#16A6A1]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-[#12345A]/5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hospital Messaging */}
          <div className="lg:col-span-7 space-y-6">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12345A]/5 border border-[#12345A]/15 text-[#12345A] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#16A6A1] animate-ping" />
              <ShieldCheck className="w-4 h-4 text-[#16A6A1]" />
              <span>NABH & NABL Accredited Tertiary Healthcare [Placeholder]</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#12345A] tracking-tight leading-[1.15]">
              World-Class Clinical Care. <br />
              <span className="text-[#16A6A1]">Human Compassion.</span>
            </h1>

            {/* Tagline Pill */}
            <div className="inline-block bg-[#12345A] text-white px-4 py-1.5 rounded-lg text-sm font-semibold tracking-wide shadow-sm">
              <span className="text-[#5EEAD9] font-bold">HAVYAS HOSPITAL</span> — &ldquo;{HOSPITAL_INFO.tagline}&rdquo;
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              At HAVYAS HOSPITAL, we combine cutting-edge medical technologies, 
              super-specialized clinical acumen, and deeply empathetic patient care to deliver 
              exceptional health outcomes across every stage of your recovery.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-700 bg-white/80 p-2.5 rounded-lg border border-slate-200/60 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#16A6A1] flex-shrink-0" />
                <span>24/7 Rapid Trauma & STEMI</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-700 bg-white/80 p-2.5 rounded-lg border border-slate-200/60 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#16A6A1] flex-shrink-0" />
                <span>Robotic & Micro Surgeries</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-700 bg-white/80 p-2.5 rounded-lg border border-slate-200/60 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#16A6A1] flex-shrink-0" />
                <span>Zero Hidden Costs Protocol</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenAppointmentModal()}
                className="inline-flex items-center px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-[#12345A] hover:bg-[#1a4778] shadow-soft hover:shadow-premium transition-all duration-200 group cursor-pointer"
              >
                <Calendar className="w-5 h-5 mr-2.5 text-[#16A6A1] group-hover:rotate-12 transition-transform" />
                <span>Book Doctor Appointment</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#departments"
                className="inline-flex items-center px-5 py-3.5 rounded-xl text-base font-semibold text-[#12345A] bg-[#F2F7FA] hover:bg-slate-200/70 border border-slate-200 transition-colors"
              >
                <span>Explore Specialties</span>
              </a>

              <a
                href="#emergency"
                className="inline-flex items-center text-xs font-bold text-red-600 hover:text-red-700 px-3 py-2 rounded-lg bg-red-50 border border-red-100"
              >
                <Ambulance className="w-4 h-4 mr-1.5 animate-bounce" />
                <span>Emergency: 1066 / 24x7</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Hospital Doctor Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-white aspect-[4/5] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
                  alt="HAVYAS HOSPITAL Senior Medical Faculty"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12345A]/90 via-transparent to-transparent" />
                
                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-soft">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-[#16A6A1]/15 text-[#16A6A1] flex items-center justify-center font-bold">
                        <HeartPulse className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#12345A] uppercase tracking-wider">
                          HAVYAS HOSPITAL
                        </div>
                        <div className="text-sm font-bold text-slate-800">
                          Comprehensive Critical Care Units
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
                      Active 24/7
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-premium border border-slate-100 flex items-center space-x-3 max-w-[220px]">
                <div className="w-10 h-10 rounded-xl bg-[#12345A] text-white flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-[#5EEAD9]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#12345A]">50+ Specialties</div>
                  <div className="text-[11px] text-slate-500">Super-Specialized Care</div>
                </div>
              </div>

              {/* Floating Right Badge */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white p-3.5 rounded-2xl shadow-premium border border-slate-100 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center flex-shrink-0 font-extrabold text-sm">
                  99%
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Patient Trust</div>
                  <div className="text-[11px] text-slate-500">Compassionate Recovery</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Booking & Doctor Finder Strip */}
        <div className="mt-12 bg-white rounded-2xl shadow-premium border border-slate-100 p-4 sm:p-6 lg:p-7">
          <div className="text-xs font-bold uppercase tracking-wider text-[#16A6A1] mb-2 flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5" />
            <span>Fast-Track Appointment Booking — HAVYAS HOSPITAL</span>
          </div>

          <form onSubmit={handleQuickBook} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {/* Department Select */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Select Specialty / Department
              </label>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16A6A1] focus:border-[#16A6A1] bg-slate-50/50"
              >
                <option value="">All Centers of Excellence</option>
                {DEPARTMENTS.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Doctor Search Keyword */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Search Doctor or Health Condition
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Heart, Knee, Brain, Dr. [Name]..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16A6A1] focus:border-[#16A6A1] bg-slate-50/50"
                />
              </div>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Preferred Consultation Date
              </label>
              <input
                type="date"
                defaultValue={new Date().toISOString().split('T')[0]}
                className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16A6A1] focus:border-[#16A6A1] bg-slate-50/50"
              />
            </div>

            {/* Action CTA */}
            <div className="sm:col-span-2 lg:col-span-1 pt-1 sm:pt-4 lg:pt-5">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#12345A] hover:bg-[#1a4778] active:bg-[#0c223c] shadow-soft transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#16A6A1]" />
                <span>Find Slot & Book</span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};


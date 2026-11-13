import React, { useState } from 'react';
import { 
  HeartPulse, 
  Brain, 
  Bone, 
  Ribbon, 
  Ambulance, 
  Activity, 
  Stethoscope, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Bed, 
  Calendar 
} from 'lucide-react';
import { DEPARTMENTS } from '../data/hospitalData';

interface DepartmentsSectionProps {
  onSelectDepartment: (deptId: string) => void;
  onBookAppointment: (deptId?: string) => void;
}

export const DepartmentsSection: React.FC<DepartmentsSectionProps> = ({
  onSelectDepartment,
  onBookAppointment,
}) => {
  const [activeDeptId, setActiveDeptId] = useState<string>(DEPARTMENTS[0].id);

  const activeDept = DEPARTMENTS.find((d) => d.id === activeDeptId) || DEPARTMENTS[0];

  const getDeptIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'Bone': return <Bone className="w-5 h-5" />;
      case 'Ribbon': return <Ribbon className="w-5 h-5" />;
      case 'Ambulance': return <Ambulance className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      default: return <HeartPulse className="w-5 h-5" />;
    }
  };

  return (
    <section id="departments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16A6A1]/10 text-[#16A6A1] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Specialized Clinical Institutes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12345A] font-heading tracking-tight">
            HAVYAS HOSPITAL Centers of Excellence
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Multi-disciplinary clinical institutes delivering comprehensive, 
            evidence-based tertiary healthcare with high clinical precision and dedicated post-operative care.
          </p>
        </div>

        {/* Department Switcher Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 no-scrollbar gap-2 sm:justify-center">
          {DEPARTMENTS.map((dept) => {
            const isActive = dept.id === activeDeptId;
            return (
              <button
                key={dept.id}
                onClick={() => setActiveDeptId(dept.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#12345A] text-white shadow-soft scale-105'
                    : 'bg-[#F2F7FA] text-slate-700 hover:bg-slate-200/70 border border-slate-200/60'
                }`}
              >
                <span className={isActive ? 'text-[#16A6A1]' : 'text-slate-500'}>
                  {getDeptIcon(dept.icon)}
                </span>
                <span>{dept.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Department Detailed Showcase */}
        <div className="bg-[#F2F7FA] rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-premium transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#16A6A1] mb-1">
                  Center of Excellence
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#12345A] font-heading">
                  {activeDept.name}
                </h3>
                <p className="text-sm font-semibold text-[#16A6A1] mt-1">
                  {activeDept.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeDept.fullDesc}
              </p>

              {/* Key Procedures */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A6A1]" />
                  <span>Key Clinical Procedures & Surgeries</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeDept.keyProcedures.map((proc, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A6A1] mt-1.5 flex-shrink-0" />
                      <span>{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Infrastructure */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/70 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-[#12345A]" />
                  <span>Advanced Technology & Equipment</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeDept.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-[#F2F7FA] text-slate-800 px-2.5 py-1 rounded-md border border-slate-200 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#12345A] pt-1">
                  <Bed className="w-4 h-4 text-[#16A6A1]" />
                  <span>Dedicated Capacity: {activeDept.bedCount}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onBookAppointment(activeDept.id)}
                  className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#12345A] hover:bg-[#1a4778] shadow-sm transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 mr-2 text-[#16A6A1]" />
                  <span>Book {activeDept.name} OPD</span>
                </button>

                <button
                  onClick={() => {
                    onSelectDepartment(activeDept.id);
                    const el = document.getElementById('doctors');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold text-[#12345A] bg-white hover:bg-slate-50 border border-slate-200 transition-colors cursor-pointer"
                >
                  <span>Meet Department Specialists</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 text-[#16A6A1]" />
                </button>
              </div>

            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-premium aspect-[4/3] bg-slate-200">
                <img
                  src={activeDept.image}
                  alt={`${activeDept.name} at HAVYAS HOSPITAL`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12345A]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold text-[#5EEAD9] uppercase tracking-wider">
                    HAVYAS HOSPITAL
                  </div>
                  <div className="text-base font-bold font-heading">
                    {activeDept.name} High-Dependency Unit
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

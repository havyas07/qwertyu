import React, { useState } from 'react';
import { Search, Filter, Calendar, Clock, Award, User } from 'lucide-react';
import { DOCTORS, DEPARTMENTS } from '../data/hospitalData';
import type { Doctor } from '../types';

interface DoctorDirectoryProps {
  selectedDeptFilter?: string;
  onBookAppointment: (doctorId?: string, deptId?: string) => void;
}

export const DoctorDirectory: React.FC<DoctorDirectoryProps> = ({
  selectedDeptFilter = '',
  onBookAppointment,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [deptFilter, setDeptFilter] = useState(selectedDeptFilter);
  const [selectedDoctorModal, setSelectedDoctorModal] = useState<Doctor | null>(null);

  // Sync external filter change
  React.useEffect(() => {
    if (selectedDeptFilter) {
      setDeptFilter(selectedDeptFilter);
    }
  }, [selectedDeptFilter]);

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialization.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDept = !deptFilter || doc.departmentId === deptFilter;

    return matchesSearch && matchesDept;
  });

  return (
    <section id="doctors" className="py-20 bg-[#F2F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12345A]/10 text-[#12345A] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Distinguished Clinical Faculty</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12345A] font-heading tracking-tight">
            Meet HAVYAS HOSPITAL Specialists
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Our medical team comprises nationally and internationally trained senior consultants, 
            super-specialists, and surgical leaders committed to clinical precision and patient healing.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-soft border border-slate-200/80 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-7 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by doctor name, specialty, or condition (e.g., Angioplasty, Spine, TAVR)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16A6A1] focus:border-transparent bg-slate-50/50"
              />
            </div>

            {/* Department Filter Dropdown */}
            <div className="md:col-span-5 flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-500 hidden sm:block" />
              <select
                value={deptFilter}
                onChange={(e) => setDeptFilter(e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16A6A1] bg-slate-50/50"
              >
                <option value="">All Departments & Centers</option>
                {DEPARTMENTS.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Active Filter Tags */}
          {(searchQuery || deptFilter) && (
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100 text-xs">
              <span className="text-slate-500 font-medium">Active Filters:</span>
              {searchQuery && (
                <span className="bg-[#12345A]/10 text-[#12345A] px-2.5 py-0.5 rounded-full font-semibold">
                  Keyword: &quot;{searchQuery}&quot;
                </span>
              )}
              {deptFilter && (
                <span className="bg-[#16A6A1]/15 text-[#0E6E6B] px-2.5 py-0.5 rounded-full font-semibold">
                  Dept: {DEPARTMENTS.find((d) => d.id === deptFilter)?.name}
                </span>
              )}
              <button
                onClick={() => {
                  setSearchQuery('');
                  setDeptFilter('');
                }}
                className="text-xs text-red-600 hover:underline ml-auto font-medium"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col group"
            >
              {/* Doctor Image & Department Pill */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-[#12345A]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/20">
                  {doc.department}
                </div>
                <div className="absolute bottom-2 right-3 text-white text-xs font-medium flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#5EEAD9]" />
                  <span>{doc.experienceYears}+ Yrs Exp.</span>
                </div>
              </div>

              {/* Doctor Info Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-[#12345A] font-heading line-clamp-1">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#16A6A1] mt-0.5 line-clamp-1">
                    {doc.title}
                  </p>
                  
                  {/* Qualifications Placeholder */}
                  <div className="mt-2 text-[11px] text-slate-500 bg-[#F2F7FA] p-2 rounded-lg border border-slate-200/50">
                    <span className="font-semibold text-slate-700">Credentials: </span>
                    <span>{doc.qualifications}</span>
                  </div>

                  {/* Visiting Hours & OPD */}
                  <div className="mt-3 flex items-center text-xs text-slate-600 gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#16A6A1] flex-shrink-0" />
                    <span>OPD Hours: {doc.visitingHours}</span>
                  </div>

                  {/* Consultation Fee Placeholder */}
                  <div className="mt-1 flex items-center text-xs text-slate-600 gap-1.5">
                    <span className="font-medium text-slate-500">Consultation Fee:</span>
                    <span className="font-bold text-slate-800">{doc.opdFeePlaceholder}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => onBookAppointment(doc.id, doc.departmentId)}
                    className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#12345A] hover:bg-[#1a4778] active:bg-[#0c223c] transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#16A6A1]" />
                    <span>Book Appointment Slot</span>
                  </button>

                  <button
                    onClick={() => setSelectedDoctorModal(doc)}
                    className="w-full py-1.5 text-xs font-medium text-slate-600 hover:text-[#12345A] hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    View Full Clinical Profile &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <User className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No Specialists Match Your Search</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
              Please adjust your search keyword or department filter to view our clinical specialists.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDeptFilter('');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#12345A]"
            >
              Show All Specialists
            </button>
          </div>
        )}

        {/* Doctor Profile Modal */}
        {selectedDoctorModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-elevated border border-slate-100 relative">
              <button
                onClick={() => setSelectedDoctorModal(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 text-sm font-bold"
              >
                ✕
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src={selectedDoctorModal.image}
                  alt={selectedDoctorModal.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover shadow-md flex-shrink-0"
                />
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#16A6A1] bg-[#16A6A1]/10 px-2 py-0.5 rounded-md">
                    {selectedDoctorModal.department}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#12345A] font-heading">
                    {selectedDoctorModal.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-700">
                    {selectedDoctorModal.title}
                  </p>
                  <p className="text-xs text-slate-500 font-mono bg-slate-50 p-2 rounded-lg">
                    {selectedDoctorModal.qualifications}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                    Clinical Background & Specialty Focus
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedDoctorModal.bio}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDoctorModal.specialization.map((spec, i) => (
                      <span key={i} className="text-xs bg-[#F2F7FA] text-[#12345A] font-medium px-2.5 py-1 rounded-md border border-slate-200">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-[#F2F7FA] p-3 rounded-xl border border-slate-200/70 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-500">Available Days: </span>
                    <span className="font-semibold text-slate-800">
                      {selectedDoctorModal.availableDays.join(', ')}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500">OPD: </span>
                    <span className="font-semibold text-[#12345A]">
                      {selectedDoctorModal.visitingHours}
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    onClick={() => {
                      const doc = selectedDoctorModal;
                      setSelectedDoctorModal(null);
                      onBookAppointment(doc.id, doc.departmentId);
                    }}
                    className="flex-1 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#12345A] hover:bg-[#1a4778] flex items-center justify-center gap-2 shadow-soft cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#16A6A1]" />
                    <span>Proceed to Book Appointment</span>
                  </button>
                  <button
                    onClick={() => setSelectedDoctorModal(null)}
                    className="px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

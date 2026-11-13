import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/hospitalData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F2F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12345A]/10 text-[#12345A] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Stories of Healing & Hope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12345A] font-heading tracking-tight">
            Patient Experiences at HAVYAS HOSPITAL
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Real recovery journeys from patients and families who entrusted us with their health, 
            experiencing our brand promise: &ldquo;Compassion. Care. Commitment.&rdquo;
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-[#16A6A1]/20 absolute top-6 right-6 group-hover:text-[#16A6A1]/40 transition-colors" />

              <div className="space-y-4">
                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Treatment Pill */}
                <div className="inline-block text-[11px] font-bold text-[#16A6A1] bg-[#16A6A1]/10 px-2.5 py-0.5 rounded-md">
                  {test.department}
                </div>

                {/* Main Quote */}
                <p className="text-sm font-semibold text-[#12345A] leading-relaxed italic">
                  &ldquo;{test.quote}&rdquo;
                </p>

                {/* Story details */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {test.story}
                </p>
              </div>

              {/* Patient Footer */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={test.avatar}
                  alt={test.patientName}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#16A6A1]"
                />
                <div>
                  <div className="text-xs font-bold text-[#12345A]">
                    {test.patientName}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {test.treatment} • <span className="text-emerald-600 font-medium">{test.recoveryPeriod}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

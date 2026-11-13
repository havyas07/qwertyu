import React from 'react';
import { HOSPITAL_METRICS } from '../data/hospitalData';

export const MetricsBar: React.FC = () => {
  return (
    <div className="bg-[#12345A] text-white py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {HOSPITAL_METRICS.map((metric, idx) => (
            <div key={idx} className="space-y-1 p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#5EEAD9] font-heading tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-100">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-300 font-light hidden sm:block">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


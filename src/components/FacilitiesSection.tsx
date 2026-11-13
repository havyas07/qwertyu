import React from 'react';
import { Cpu, ShieldCheck, Activity, HeartPulse, Layers, Droplet } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const facilities = [
    {
      title: 'Next-Gen Robotic Surgical Systems',
      subtitle: 'Sub-Millimeter Surgical Precision',
      desc: 'Enables minimally invasive urological, oncological, and joint replacement procedures with minimal blood loss, minimal scarring, and drastically reduced hospital stays.',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      badge: 'State-of-the-Art'
    },
    {
      title: '3.0T High-Definition Silent MRI & 128-Slice CT',
      subtitle: 'Advanced Neuro & Cardiac Radio-Diagnosis',
      desc: 'Wide-bore comfort imaging reducing patient anxiety and claustrophobia, offering micron-level resolution for hyper-acute stroke detection and functional neuroimaging.',
      icon: Layers,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      badge: 'Advanced Imaging'
    },
    {
      title: 'Digital Biplane Cardiac Cath Lab',
      subtitle: '24/7 Primary Angioplasty (PPCI)',
      desc: 'Simultaneous dual-angle coronary imaging cutting radiation and contrast dye usage by 50%, enabling rapid door-to-balloon times under 45 minutes.',
      icon: HeartPulse,
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80',
      badge: 'Cardiology'
    },
    {
      title: 'Class-100 Modular Laminar OTs',
      subtitle: 'Zero-Tolerance Infection Protocol',
      desc: 'Equipped with positive pressure HEPA filtration, anti-microbial seamless walls, and integrated surgical monitors for complex joint replacements and organ surgeries.',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
      badge: 'Surgical Suites'
    },
    {
      title: 'Level-3 Tertiary NICU & PICU',
      subtitle: 'Preterm & Critical Infant Care',
      desc: 'Specialized neonatal incubators, high-frequency oscillatory ventilators, and nitric oxide therapy caring for micro-preemies born as early as 26 weeks.',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80',
      badge: 'Pediatric Care'
    },
    {
      title: '24/7 Blood Bank & Component Separation',
      subtitle: 'NABH/NABL Standard Transfusion Medicine',
      desc: 'Platelet apheresis, cryoprecipitate, and packed red cells with automated barcode cross-matching ensuring safe emergency blood transfusions around the clock.',
      icon: Droplet,
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      badge: '24/7 Blood Center'
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-[#F2F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12345A]/10 text-[#12345A] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Modern Medical Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12345A] font-heading tracking-tight">
            HAVYAS HOSPITAL Medical Technology
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Investing in world-class biomedical engineering and precision infrastructure 
            to equip our clinical specialists with the tools needed for exceptional clinical outcomes.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12345A]/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#12345A] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    {fac.badge}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-2 text-[#16A6A1] mb-1">
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">{fac.subtitle}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#12345A] font-heading">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span>Clinical Safety Level: Class-A</span>
                    <span className="text-[#16A6A1]">24/7 Availability</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


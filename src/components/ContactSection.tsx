import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, AlertTriangle, Send, CheckCircle2, Ambulance } from 'lucide-react';
import { HOSPITAL_INFO, DEPARTMENTS } from '../data/hospitalData';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '+91 [Editable Patient Phone Number]',
    email: '[patient.email@placeholder.com]',
    department: 'cardiology',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Please enter your name.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16A6A1]/10 text-[#16A6A1] text-xs font-bold uppercase tracking-wider mb-3">
            <span>We Are Here For You</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12345A] font-heading tracking-tight">
            Contact HAVYAS HOSPITAL
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Reach out to our patient assistance desk for appointments, general health inquiries, 
            or campus directions. For acute medical emergencies, call our 24/7 hotline directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Hospital Contact Details & Emergency Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Address Card */}
            <div className="bg-[#F2F7FA] rounded-2xl p-6 border border-slate-200">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#12345A] text-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#5EEAD9]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#12345A] font-heading">
                    Hospital Campus Address
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {HOSPITAL_INFO.addressPlaceholder}
                  </p>
                  <p className="text-[11px] text-slate-500 pt-1">
                    Landmark: [Near City Metro / Main Healthcare Hub Placeholder]
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency & Ambulance Hotlines */}
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200 space-y-3">
              <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span>24/7 Critical Emergency Hotline</span>
              </div>
              <div className="text-xl font-extrabold text-red-950 font-heading">
                {HOSPITAL_INFO.emergencyPhonePlaceholder}
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-xs pt-1 border-t border-red-100">
                <Ambulance className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>Ambulance Dispatch: <strong className="text-red-950">{HOSPITAL_INFO.ambulancePhonePlaceholder}</strong></span>
              </div>
            </div>

            {/* General Contact & Timings */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4 shadow-soft">
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <Phone className="w-4 h-4 text-[#16A6A1] flex-shrink-0" />
                <div>
                  <span className="text-slate-500">General Information / OPD Desk:</span>
                  <div className="font-bold text-slate-900">{HOSPITAL_INFO.phonePlaceholder}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-700">
                <Mail className="w-4 h-4 text-[#16A6A1] flex-shrink-0" />
                <div>
                  <span className="text-slate-500">Official Inquiries & Feedback:</span>
                  <div className="font-bold text-slate-900">{HOSPITAL_INFO.emailPlaceholder}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-700">
                <Clock className="w-4 h-4 text-[#16A6A1] flex-shrink-0" />
                <div>
                  <span className="text-slate-500">OPD Consultation Hours:</span>
                  <div className="font-medium text-slate-900">{HOSPITAL_INFO.visitingHoursOPD}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry / Feedback Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F2F7FA] rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-premium">
              <h3 className="text-xl font-extrabold text-[#12345A] font-heading mb-1">
                Send an Inquiry or Medical Assistance Request
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Our patient relationship manager will get back to you within 2 hours during working hours.
              </p>

              {submitted ? (
                <div className="bg-white rounded-2xl p-8 text-center border border-emerald-200 space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-[#12345A]">Inquiry Submitted Successfully</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you for contacting HAVYAS HOSPITAL. A member of our patient services team has received your message and will connect with you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ ...formData, name: '', message: '' });
                    }}
                    className="mt-3 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#12345A]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A6A1]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number (Editable Placeholder) *
                      </label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A6A1]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address (Editable Placeholder)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A6A1]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Department of Interest
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A6A1]"
                      >
                        {DEPARTMENTS.map((dept) => (
                          <option key={dept.id} value={dept.id}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Message or Consultation Query *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please let us know how we can assist you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A6A1]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-[#12345A] hover:bg-[#1a4778] active:bg-[#0c223c] shadow-soft transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#16A6A1]" />
                    <span>Send Message to HAVYAS HOSPITAL</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


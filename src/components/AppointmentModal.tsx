import React, { useState, useEffect } from 'react';
import { X, Clock, CheckCircle2, Printer, ArrowRight, ArrowLeft } from 'lucide-react';
import { DOCTORS, DEPARTMENTS, HOSPITAL_INFO } from '../data/hospitalData';
import { HospitalLogo } from './HospitalLogo';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctorId?: string;
  initialDeptId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialDoctorId,
  initialDeptId,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [departmentId, setDepartmentId] = useState<string>(initialDeptId || '');
  const [doctorId, setDoctorId] = useState<string>(initialDoctorId || '');
  const [appointmentDate, setAppointmentDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [consultationType, setConsultationType] = useState<'In-Hospital OPD' | 'Video Teleconsultation'>('In-Hospital OPD');
  const [patientName, setPatientName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('Male');
  const [phone, setPhone] = useState<string>('+91 [Editable Patient Phone Number]');
  const [email, setEmail] = useState<string>('[patient.email@placeholder.com]');
  const [symptoms, setSymptoms] = useState<string>('');
  const [bookingToken, setBookingToken] = useState<string>('');

  // Sync initial props
  useEffect(() => {
    if (initialDoctorId) {
      setDoctorId(initialDoctorId);
      const doc = DOCTORS.find((d) => d.id === initialDoctorId);
      if (doc) setDepartmentId(doc.departmentId);
    } else if (initialDeptId) {
      setDepartmentId(initialDeptId);
    }
  }, [initialDoctorId, initialDeptId, isOpen]);

  // Available doctors for chosen department
  const availableDoctors = departmentId
    ? DOCTORS.filter((d) => d.departmentId === departmentId)
    : DOCTORS;

  const timeSlots = [
    { label: 'Morning', slots: ['09:00 AM', '09:45 AM', '10:30 AM', '11:15 AM', '12:00 PM'] },
    { label: 'Afternoon', slots: ['02:00 PM', '02:45 PM', '03:30 PM', '04:15 PM'] },
    { label: 'Evening', slots: ['05:30 PM', '06:15 PM', '07:00 PM', '07:45 PM'] },
  ];

  if (!isOpen) return null;

  const handleNextStep = () => {
    if (step === 1) {
      if (!departmentId) {
        alert('Please select a Clinical Department.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!appointmentDate || !timeSlot) {
        alert('Please select an appointment date and preferred time slot.');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!patientName.trim()) {
        alert('Please enter the patient full name.');
        return;
      }
      // Generate booking reference
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      setBookingToken(`HAV-2026-${randomCode}`);
      setStep(4);
    }
  };

  const handleReset = () => {
    setStep(1);
    setDepartmentId('');
    setDoctorId('');
    setAppointmentDate('');
    setTimeSlot('');
    setPatientName('');
    setSymptoms('');
    setBookingToken('');
  };

  const selectedDoctorObj = DOCTORS.find((d) => d.id === doctorId);
  const selectedDeptObj = DEPARTMENTS.find((d) => d.id === departmentId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-[#12345A] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <HospitalLogo variant="white" size="sm" showTagline={false} />
          </div>

          <div className="mt-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading">
              Schedule Your Consultation
            </h2>
            <p className="text-xs text-[#5EEAD9] font-medium mt-0.5">
              HAVYAS HOSPITAL Outpatient Department (OPD) & Telehealth
            </p>
          </div>

          {/* Stepper Progress */}
          {step < 4 && (
            <div className="grid grid-cols-3 gap-2 mt-5 text-center text-xs">
              <div className={`py-1.5 rounded-lg font-semibold transition-colors ${step >= 1 ? 'bg-[#16A6A1] text-white' : 'bg-white/10 text-slate-300'}`}>
                1. Doctor & Specialty
              </div>
              <div className={`py-1.5 rounded-lg font-semibold transition-colors ${step >= 2 ? 'bg-[#16A6A1] text-white' : 'bg-white/10 text-slate-300'}`}>
                2. Date & Time
              </div>
              <div className={`py-1.5 rounded-lg font-semibold transition-colors ${step >= 3 ? 'bg-[#16A6A1] text-white' : 'bg-white/10 text-slate-300'}`}>
                3. Patient Details
              </div>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Department & Doctor */}
          {step === 1 && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  1. Choose Center of Excellence / Department *
                </label>
                <select
                  value={departmentId}
                  onChange={(e) => {
                    setDepartmentId(e.target.value);
                    setDoctorId(''); // reset doctor if department changes
                  }}
                  className="w-full text-sm border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16A6A1] bg-slate-50"
                >
                  <option value="">-- Select Medical Department --</option>
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  2. Select Consulting Specialist (Optional / Next Available)
                </label>
                <select
                  value={doctorId}
                  onChange={(e) => setDoctorId(e.target.value)}
                  className="w-full text-sm border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16A6A1] bg-slate-50"
                >
                  <option value="">Any Available Senior Consultant in this Department</option>
                  {availableDoctors.map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name} — {doc.title} ({doc.visitingHours})
                    </option>
                  ))}
                </select>
              </div>

              {selectedDoctorObj && (
                <div className="bg-[#F2F7FA] p-4 rounded-xl border border-slate-200 flex items-center gap-4">
                  <img
                    src={selectedDoctorObj.image}
                    alt={selectedDoctorObj.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#12345A]">{selectedDoctorObj.name}</div>
                    <div className="text-xs text-slate-600">{selectedDoctorObj.title}</div>
                    <div className="text-[11px] text-[#16A6A1] font-semibold mt-0.5">
                      Visiting Hours: {selectedDoctorObj.visitingHours}
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  3. Mode of Consultation
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setConsultationType('In-Hospital OPD')}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border text-center transition-all cursor-pointer ${
                      consultationType === 'In-Hospital OPD'
                        ? 'border-[#12345A] bg-[#12345A] text-white shadow-soft'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    In-Hospital OPD Visit
                  </button>
                  <button
                    type="button"
                    onClick={() => setConsultationType('Video Teleconsultation')}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border text-center transition-all cursor-pointer ${
                      consultationType === 'Video Teleconsultation'
                        ? 'border-[#16A6A1] bg-[#16A6A1] text-white shadow-soft'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Video Teleconsultation
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Date & Slot Selection */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Select Appointment Date *
                </label>
                <input
                  type="date"
                  value={appointmentDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  className="w-full text-sm border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16A6A1] bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Select Preferred Consultation Time Slot *
                </label>
                
                <div className="space-y-4">
                  {timeSlots.map((group) => (
                    <div key={group.label}>
                      <div className="text-xs font-semibold text-slate-500 mb-1.5">
                        {group.label} Hours
                      </div>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {group.slots.map((slot) => {
                          const isSelected = timeSlot === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setTimeSlot(slot)}
                              className={`py-2 px-2.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                                isSelected
                                  ? 'bg-[#12345A] text-white border-[#12345A] font-bold shadow-xs'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-[#16A6A1]'
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {selectedDeptObj && (
                <div className="text-xs text-slate-500 bg-[#F2F7FA] p-3 rounded-xl border border-slate-200 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#16A6A1] flex-shrink-0" />
                  <span>
                    Department: <strong className="text-slate-800">{selectedDeptObj.name}</strong> — Prior reservation ensures priority token assignment.
                  </span>
                </div>
              )}
            </div>
          )}

          {/* STEP 3: Patient Information */}
          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter patient legal name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16A6A1] bg-slate-50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 42"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16A6A1] bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Gender
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16A6A1] bg-slate-50"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Mobile Phone (Editable Placeholder) *
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16A6A1] bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address (Editable Placeholder)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16A6A1] bg-slate-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Reason for Visit / Primary Symptoms
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your current medical concern, previous health history, or questions for the doctor..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16A6A1] bg-slate-50"
                />
              </div>

              {/* Summary recap box */}
              <div className="bg-[#F2F7FA] p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-[#12345A]">Booking Summary:</div>
                <div className="flex justify-between">
                  <span>Specialty / Dept:</span>
                  <span className="font-semibold">{selectedDeptObj?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Consultant:</span>
                  <span className="font-semibold">{selectedDoctorObj?.name || 'Assigned Senior Consultant'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Schedule:</span>
                  <span className="font-semibold text-[#16A6A1]">{appointmentDate} at {timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span>Consultation Mode:</span>
                  <span className="font-semibold">{consultationType}</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Confirmation Voucher */}
          {step === 4 && (
            <div className="space-y-6 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#16A6A1]">
                  Appointment Successfully Scheduled
                </span>
                <h3 className="text-2xl font-extrabold text-[#12345A] font-heading mt-1">
                  HAVYAS HOSPITAL Appointment Voucher
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {HOSPITAL_INFO.tagline}
                </p>
              </div>

              {/* Voucher Card */}
              <div className="bg-[#F2F7FA] rounded-2xl p-5 border border-slate-200 text-left space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Token Reference</div>
                    <div className="text-lg font-mono font-extrabold text-[#12345A]">{bookingToken}</div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">
                    Confirmed
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-500">Patient:</span>
                    <div className="font-bold text-slate-800">{patientName} ({age ? `${age}y` : ''} {gender})</div>
                  </div>
                  <div>
                    <span className="text-slate-500">Contact:</span>
                    <div className="font-bold text-slate-800">{phone}</div>
                  </div>
                  <div>
                    <span className="text-slate-500">Department:</span>
                    <div className="font-bold text-slate-800">{selectedDeptObj?.name}</div>
                  </div>
                  <div>
                    <span className="text-slate-500">Doctor:</span>
                    <div className="font-bold text-slate-800">{selectedDoctorObj?.name || 'Assigned Senior Consultant'}</div>
                  </div>
                  <div>
                    <span className="text-slate-500">Date & Slot:</span>
                    <div className="font-bold text-[#16A6A1]">{appointmentDate} at {timeSlot}</div>
                  </div>
                  <div>
                    <span className="text-slate-500">Consultation Type:</span>
                    <div className="font-bold text-slate-800">{consultationType}</div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-200">
                  📍 Please report to <strong>HAVYAS HOSPITAL OPD Registration Desk 15 minutes</strong> prior to your appointment time with previous medical prescriptions.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={() => window.print()}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 flex items-center justify-center gap-1.5"
                >
                  <Printer className="w-4 h-4 text-slate-600" />
                  <span>Print Voucher</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#12345A] hover:bg-[#1a4778]"
                >
                  Book Another Appointment
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Stepper Navigation Buttons */}
          {step < 4 && (
            <div className="flex justify-between items-center pt-6 mt-6 border-t border-slate-100">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => (s - 1) as any)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNextStep}
                className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#12345A] hover:bg-[#1a4778] active:bg-[#0c223c] shadow-soft flex items-center gap-1.5 cursor-pointer"
              >
                <span>{step === 3 ? 'Confirm & Book Appointment' : 'Continue'}</span>
                <ArrowRight className="w-4 h-4 text-[#16A6A1]" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

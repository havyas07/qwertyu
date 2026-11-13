import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, FileText, PhoneCall, ChevronDown } from 'lucide-react';
import { HospitalLogo } from './HospitalLogo';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface NavbarProps {
  onOpenAppointmentModal: (doctorId?: string, deptId?: string) => void;
  onOpenPatientPortal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAppointmentModal,
  onOpenPatientPortal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDeptDropdownOpen, setIsDeptDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Centers of Excellence', href: '#departments', hasDropdown: true },
    { name: 'Find a Doctor', href: '#doctors' },
    { name: 'Health Packages', href: '#packages' },
    { name: 'Patient & Visitor Care', href: '#visitor-care' },
    { name: 'Facilities & Tech', href: '#facilities' },
    { name: 'Contact & Emergency', href: '#contact' },
  ];

  const quickDepartments = [
    { name: 'Cardiology & Heart Care', href: '#departments' },
    { name: 'Neurology & Neuro-Spine', href: '#departments' },
    { name: 'Orthopaedics & Robotic Surgery', href: '#departments' },
    { name: 'Comprehensive Cancer Care', href: '#departments' },
    { name: 'Emergency & Level-1 Trauma', href: '#departments' },
    { name: 'Nephrology & Urology', href: '#departments' },
    { name: 'Pediatrics & NICU', href: '#departments' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md border-b border-slate-100 py-2.5' : 'border-b border-slate-200/80 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Distinctive Hospital Logo */}
          <a href="#" className="flex items-center group">
            <HospitalLogo size="md" showTagline={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsDeptDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsDeptDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#12345A] hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600" />
                  )}
                </a>

                {/* Dropdown for Centers of Excellence */}
                {link.hasDropdown && isDeptDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-premium border border-slate-100 p-2 mt-0.5 animate-fadeIn z-50">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1.5 border-b border-slate-100 mb-1">
                      Key Clinical Specialties
                    </div>
                    {quickDepartments.map((dept) => (
                      <a
                        key={dept.name}
                        href={dept.href}
                        onClick={() => setIsDeptDropdownOpen(false)}
                        className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-[#12345A] hover:bg-slate-50 rounded-md transition-colors"
                      >
                        {dept.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenPatientPortal}
              className="lg:hidden text-slate-700 hover:text-[#12345A] p-2 text-xs font-medium flex items-center"
              title="Download Lab Reports"
            >
              <FileText className="w-4 h-4 text-[#16A6A1]" />
            </button>

            <button
              onClick={() => onOpenAppointmentModal()}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#12345A] hover:bg-[#1a4778] active:bg-[#0f2d4e] shadow-sm hover:shadow transition-all duration-200 group cursor-pointer border border-[#12345A]"
            >
              <Calendar className="w-4 h-4 mr-2 text-[#16A6A1] group-hover:scale-110 transition-transform" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => onOpenAppointmentModal()}
              className="sm:hidden px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-[#12345A]"
            >
              Book
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 pt-4 pb-6 mt-3 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-[#F2F7FA] hover:text-[#12345A]"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPatientPortal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 bg-[#F2F7FA] hover:bg-slate-100"
              >
                <FileText className="w-4 h-4 text-[#16A6A1]" />
                <span>Patient Portal / Lab Reports</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-[#12345A] shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#16A6A1]" />
                <span>Book an Appointment</span>
              </button>

              <div className="p-3 bg-red-50 rounded-lg text-center mt-3 border border-red-100">
                <div className="text-xs font-semibold text-red-700 flex items-center justify-center gap-1">
                  <PhoneCall className="w-3.5 h-3.5 text-red-600" />
                  <span>24/7 Emergency Helpline:</span>
                </div>
                <div className="text-xs text-red-950 font-bold mt-0.5">
                  {HOSPITAL_INFO.emergencyPhonePlaceholder}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};


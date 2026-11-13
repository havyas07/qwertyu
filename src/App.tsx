import { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { EmergencyBanner } from './components/EmergencyBanner';
import { DepartmentsSection } from './components/DepartmentsSection';
import { DoctorDirectory } from './components/DoctorDirectory';
import { HealthPackages } from './components/HealthPackages';
import { FacilitiesSection } from './components/FacilitiesSection';
import { VisitorCareSection } from './components/VisitorCareSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { HealthArticlesSection } from './components/HealthArticlesSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { PatientPortalModal } from './components/PatientPortalModal';

export function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isPatientPortalOpen, setIsPatientPortalOpen] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | undefined>(undefined);
  const [selectedDeptId, setSelectedDeptId] = useState<string | undefined>(undefined);
  const [doctorDirectoryFilter, setDoctorDirectoryFilter] = useState<string>('');

  const handleOpenAppointmentModal = (doctorId?: string, deptId?: string) => {
    setSelectedDoctorId(doctorId);
    setSelectedDeptId(deptId);
    setIsAppointmentModalOpen(true);
  };

  const handleOpenPatientPortal = () => {
    setIsPatientPortalOpen(true);
  };

  const handleSelectDepartmentForDoctors = (deptId: string) => {
    setDoctorDirectoryFilter(deptId);
  };

  const handleBookPackage = (_packageTitle: string) => {
    handleOpenAppointmentModal(undefined, undefined);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col selection:bg-[#16A6A1] selection:text-white">
      {/* Top 24/7 Emergency & Quick Info Bar */}
      <TopBar onOpenPatientPortal={handleOpenPatientPortal} />

      {/* Main Sticky Header */}
      <Navbar
        onOpenAppointmentModal={handleOpenAppointmentModal}
        onOpenPatientPortal={handleOpenPatientPortal}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenAppointmentModal={handleOpenAppointmentModal}
          onOpenPatientPortal={handleOpenPatientPortal}
        />

        {/* Institutional Metrics Bar */}
        <MetricsBar />

        {/* 24/7 Emergency & Level-1 Trauma Banner */}
        <EmergencyBanner />

        {/* Centers of Excellence / Departments */}
        <DepartmentsSection
          onSelectDepartment={handleSelectDepartmentForDoctors}
          onBookAppointment={(deptId) => handleOpenAppointmentModal(undefined, deptId)}
        />

        {/* Find a Doctor Directory */}
        <DoctorDirectory
          selectedDeptFilter={doctorDirectoryFilter}
          onBookAppointment={handleOpenAppointmentModal}
        />

        {/* Preventive Health Checkup Packages */}
        <HealthPackages onBookPackage={handleBookPackage} />

        {/* Facilities & Advanced Medical Technology */}
        <FacilitiesSection />

        {/* Patient & Visitor Care, Cashless TPA Desk */}
        <VisitorCareSection />

        {/* Patient Testimonials & Healing Stories */}
        <TestimonialsSection />

        {/* Health Education & Articles */}
        <HealthArticlesSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Contact, Location & Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
        onOpenPatientPortal={handleOpenPatientPortal}
      />

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        initialDoctorId={selectedDoctorId}
        initialDeptId={selectedDeptId}
      />

      <PatientPortalModal
        isOpen={isPatientPortalOpen}
        onClose={() => setIsPatientPortalOpen(false)}
      />
    </div>
  );
}

export default App;

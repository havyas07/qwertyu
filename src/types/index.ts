export interface Doctor {
  id: string;
  name: string;
  title: string;
  department: string;
  departmentId: string;
  qualifications: string;
  experienceYears: number;
  availableDays: string[];
  visitingHours: string;
  image: string;
  bio: string;
  opdFeePlaceholder: string;
  specialization: string[];
}

export interface Department {
  id: string;
  name: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  keyProcedures: string[];
  technologies: string[];
  bedCount: string;
  image: string;
}

export interface HealthPackage {
  id: string;
  title: string;
  category: string;
  pricePlaceholder: string;
  originalPricePlaceholder: string;
  testsCount: number;
  fastingRequired: boolean;
  tatTime: string;
  features: string[];
  recommendedFor: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  patientName: string;
  ageGender: string;
  treatment: string;
  department: string;
  quote: string;
  story: string;
  rating: number;
  recoveryPeriod: string;
  avatar: string;
}

export interface HealthArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  image: string;
}

export interface AppointmentBooking {
  id: string;
  patientName: string;
  age: string;
  gender: string;
  phone: string;
  email: string;
  department: string;
  doctorName: string;
  appointmentDate: string;
  timeSlot: string;
  consultationType: 'In-Hospital OPD' | 'Video Teleconsultation';
  symptoms: string;
  status: 'Confirmed' | 'Pending Verification';
  createdAt: string;
}


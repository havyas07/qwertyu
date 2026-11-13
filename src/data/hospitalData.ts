import type { Doctor, Department, HealthPackage, Testimonial, HealthArticle } from '../types';

export const HOSPITAL_INFO = {
  name: 'HAVYAS HOSPITAL',
  tagline: 'Compassion. Care. Commitment.',
  mission: 'To deliver compassionate, state-of-the-art tertiary healthcare with clinical rigor, human warmth, and uncompromising patient safety.',
  vision: 'To be the most trusted healthcare institution, pioneering advanced medical science and compassionate patient-first clinical care.',
  phonePlaceholder: '+91 [Hospital Contact Number]',
  emergencyPhonePlaceholder: '[Emergency Helpline: 1066 / +91-XXXXX-XXXXX]',
  ambulancePhonePlaceholder: '[24/7 Ambulance Dispatch: +91-XXXXX-XXXXX]',
  emailPlaceholder: '[contact@havyashospital.com]',
  emergencyEmailPlaceholder: '[emergency@havyashospital.com]',
  addressPlaceholder: 'HAVYAS HOSPITAL, [Campus Address, Healthcare Boulevard, Sector XX, City - PIN, State, India]',
  registrationPlaceholder: '[Hospital Clinical Establishment Act Reg No. XXXX/202X]',
  accreditationsPlaceholder: '[NABH Accredited Hospital | NABL Certified Laboratories | ISO 9001:2015 Compliant]',
  visitingHoursOPD: 'Monday - Saturday: 08:30 AM - 08:00 PM | Sunday: 09:00 AM - 01:00 PM',
  visitingHoursICU: 'Morning: 11:00 AM - 12:00 PM | Evening: 05:00 PM - 07:00 PM',
  emergencyStatus: '24/7 Trauma, Cardiac & Stroke Ready (Beds Available)',
};

export const DEPARTMENTS: Department[] = [
  {
    id: 'cardiology',
    name: 'Cardiology & Heart Care',
    tagline: 'Advanced Interventional Cardiology & Cardiothoracic Surgery',
    shortDesc: 'Comprehensive cardiovascular care with 24/7 emergency STEMI angioplasty, hybrid bi-plane cath lab, and minimally invasive cardiac surgery.',
    fullDesc: 'The Department of Cardiology at HAVYAS HOSPITAL delivers round-the-clock tertiary cardiac care. Our center is equipped with a state-of-the-art Digital Biplane Cath Lab, dedicated Cardiac Intensive Care Units (CICU), 3D Echocardiography, and advanced electrophysiology mapping for complex cardiac arrhythmias.',
    icon: 'HeartPulse',
    keyProcedures: [
      'Primary Emergency Angioplasty (PPCI 24x7)',
      'Minimally Invasive CABG (Heart Bypass)',
      'Transcatheter Aortic Valve Implantation (TAVI / TAVR)',
      'Pacemaker & ICD Implantation',
      'Advanced Pediatric Cardiology',
      '3D Cardiac Electrophysiology & Ablation'
    ],
    technologies: [
      'Bi-Plane Flat Panel Digital Cath Lab',
      'Intravascular Ultrasound (IVUS) & OCT',
      '4D Transesophageal Echocardiography',
      'Extra Corporeal Membrane Oxygenation (ECMO)'
    ],
    bedCount: '60 Dedicated Cardiac Beds & 20 ICU Beds',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'neurology',
    name: 'Neurology & Neuro-Spine',
    tagline: 'Precision Brain, Stroke & Advanced Spine Care',
    shortDesc: 'Comprehensive stroke rescue within golden hour, robotic neuro-navigation, and microscopic brain and spinal cord reconstruction.',
    fullDesc: 'HAVYAS HOSPITAL Neurosciences Institute brings together senior neurologists, neurosurgeons, and neuro-critical care specialists. Featuring intraoperative neuro-monitoring and high-precision neuro-microscopes, we manage hyper-acute strokes, complex aneurysms, neuro-trauma, Parkinson’s, and spinal deformities.',
    icon: 'Brain',
    keyProcedures: [
      'Hyper-acute Stroke Thrombolysis & Mechanical Thrombectomy',
      'Microsurgical Brain Tumor Resection',
      'Minimally Invasive Spine Surgery (MISS)',
      'Deep Brain Stimulation (DBS) for Parkinson’s',
      'Endoscopic Skull Base Surgery',
      'Comprehensive Epilepsy Management'
    ],
    technologies: [
      'Intraoperative Neuro-Navigation System',
      'High-Definition Surgical Neuro-Microscope',
      'Continuous Digital Video EEG & EMG',
      'Dedicated 16-Bed Neuro-Trauma ICU'
    ],
    bedCount: '45 Dedicated Neuro Beds & 16 Neuro-ICU Beds',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'orthopaedics',
    name: 'Orthopaedics & Joint Replacement',
    tagline: 'Robotic-Assisted Joint Replacement & Sports Medicine',
    shortDesc: 'World-class knee and hip replacements using 3D robotic guidance, arthroscopic sports injury repair, and complex trauma reconstruction.',
    fullDesc: 'Our Orthopaedics Center at HAVYAS HOSPITAL specializes in sub-millimeter accurate robotic joint replacements enabling faster ambulation and minimal postoperative pain. Our sports medicine unit treats complex ligament tears, rotator cuff tears, and complex multi-fragment fractures with rapid rehabilitation protocols.',
    icon: 'Bone',
    keyProcedures: [
      'Robotic Total Knee & Hip Replacement',
      'Arthroscopic ACL / PCL Knee Reconstruction',
      'Shoulder Rotator Cuff & Labral Repair',
      'Complex Pelvic & Acetabular Fracture Surgeries',
      'Pediatric Orthopaedics & Deformity Correction',
      'Regenerative Joint Preservation & Stem Therapy'
    ],
    technologies: [
      'Next-Gen 3D Robotic Joint Surgical System',
      'High-Definition 4K Arthroscopy Tower',
      'Laminar Airflow Class-100 Operation Theaters',
      'Dedicated Sports Physical Rehabilitation Center'
    ],
    bedCount: '55 Inpatient Beds & Dedicated Rehab Gym',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'oncology',
    name: 'Comprehensive Cancer Care',
    tagline: 'Multi-Disciplinary Medical, Surgical & Radiation Oncology',
    shortDesc: 'Tumor board-driven cancer care offering advanced immunotherapy, targeted chemotherapy, precision surgery, and compassionate palliative care.',
    fullDesc: 'At HAVYAS HOSPITAL Cancer Institute, every patient’s case is reviewed by an integrated Tumor Board comprising medical oncologists, surgical oncologists, radiation therapists, and molecular pathologists to formulate an individualized, evidence-based treatment regimen.',
    icon: 'Ribbon',
    keyProcedures: [
      'Organ-Preserving Cancer Surgeries',
      'Targeted Molecular Therapy & Immunotherapy',
      'Day-Care Chemotherapy Infusion Center',
      'HIPEC (Hyperthermic Intraperitoneal Chemotherapy)',
      'Bone Marrow & Stem Cell Transplant Support',
      'Preventive Oncology & Early Genetic Screening'
    ],
    technologies: [
      'HEPA-Filtered Positive Pressure Day Care Bays',
      'Molecular Genetic & Liquid Biopsy Diagnostics',
      'Advanced Onco-Pathology Lab',
      'Specialized Central Venous Access Team'
    ],
    bedCount: '40 Inpatient Onco Beds & 24 Day-Care Infusion Suites',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'emergency-trauma',
    name: 'Emergency & Level-1 Trauma Care',
    tagline: '24/7 Immediate Triage & Golden Hour Critical Resuscitation',
    shortDesc: 'Round-the-clock emergency medicine specialists, dedicated trauma OT, GPS-tracked cardiac ambulances, and zero-delay triage protocols.',
    fullDesc: 'The 24/7 Emergency and Trauma Centre at HAVYAS HOSPITAL is built to handle multiple casualties, poly-trauma, acute cardiac arrests, and acute poisonings without paperwork delays. Backed by dedicated in-department CT scans and direct red-line access to surgical suites.',
    icon: 'Ambulance',
    keyProcedures: [
      '24/7 Rapid Triage & Resuscitation',
      'Advanced Cardiac Life Support (ACLS)',
      'Poly-trauma Damage Control Surgery',
      'Acute Poisoning & Toxin Detoxification',
      'Pediatric Emergency Care',
      'Emergency Airway & Ventilatory Support'
    ],
    technologies: [
      'In-ER Dedicated Mobile Digital X-Ray & Ultrasound',
      'Emergency Point-of-Care Blood Gas Analyser (ABG)',
      'Red-Zone Resuscitation Bays with Defibrillators',
      'GPS-Tracked Advanced Life Support (ALS) Ambulances'
    ],
    bedCount: '25 Resuscitation & Emergency Observation Beds',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'nephrology-urology',
    name: 'Nephrology & Urology',
    tagline: 'Kidney Health, Hemodialysis & Laser Urological Surgeries',
    shortDesc: 'Modern dialysis unit with online hemodiafiltration, laser stone treatment, prostate laser enucleation, and chronic kidney disease management.',
    fullDesc: 'HAVYAS HOSPITAL Nephrology and Urology Centre provides end-to-end renal care. Our Hemodialysis unit operates with medical-grade double RO water purification systems. Our urologists perform scarless endoscopic and laser procedures for kidney stones and prostate enlargement.',
    icon: 'Activity',
    keyProcedures: [
      '24/7 Hemodialysis & SLED for Critical ICU Patients',
      'RIRS (Retrograde Intrarenal Surgery) Laser Stone Removal',
      'Holmium Laser Enucleation of Prostate (HoLEP)',
      'AV Fistula Creation & Vascular Access',
      'Kidney Biopsy & Glomerular Disease Management',
      'Laparoscopic Urological Reconstruction'
    ],
    technologies: [
      'Double-Stage RO Hemodialysis Suite',
      '100W High-Power Holmium Laser System',
      'Flexible Digital Video Ureteroscopes',
      'Continuous Renal Replacement Therapy (CRRT)'
    ],
    bedCount: '30 Dialysis Stations & 35 Inpatient Beds',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gastroenterology',
    name: 'Gastroenterology & Hepatology',
    tagline: 'Advanced Endoscopy, Liver Care & GI Surgeries',
    shortDesc: 'High-definition therapeutic endoscopy, ERCP, fatty liver clinics, and minimally invasive laparoscopic abdominal surgeries.',
    fullDesc: 'Dedicated to digestive health and hepatobiliary disorders, HAVYAS HOSPITAL features a state-of-the-art Endoscopy Suite. We manage gastrointestinal bleeds, cirrhosis, pancreatitis, inflammatory bowel diseases (IBD), and metabolic liver conditions.',
    icon: 'Stethoscope',
    keyProcedures: [
      'Diagnostic & Therapeutic Upper GI Endoscopy & Colonoscopy',
      'ERCP for Bile Duct Stones & Strictures',
      'Endoscopic Ultrasound (EUS) Guided Biopsy',
      'Endoscopic Mucosal Resection (EMR)',
      'Laparoscopic Gallbladder & Hernia Surgery',
      'Comprehensive Fatty Liver & Cirrhosis Protocol'
    ],
    technologies: [
      'High-Definition Olympus EVIS X1 Endoscopy System',
      'Narrow Band Imaging (NBI) Early Cancer Detection',
      'FibroScan Liver Stiffness Evaluation',
      'Dedicated GI Bleed Intensive Care Suite'
    ],
    bedCount: '30 Inpatient Beds & 8 Day-Care Endoscopy Bays',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics & Neonatology (NICU)',
    tagline: 'Gentle, Compassionate Care for Newborns and Children',
    shortDesc: 'Level-3 Neonatal Intensive Care Unit (NICU), pediatric intensive care, growth monitoring, and pediatric sub-specialty clinics.',
    fullDesc: 'Caring for our youngest patients with boundless warmth and clinical precision. The Department of Pediatrics and Neonatology at HAVYAS HOSPITAL provides round-the-clock newborn resuscitation, advanced phototherapy, pediatric developmental assessments, and childhood immunizations.',
    icon: 'ShieldCheck',
    keyProcedures: [
      'Level-3 Tertiary Neonatal ICU Care (Preterm <28 weeks)',
      'Pediatric Intensive Care Unit (PICU)',
      'Comprehensive Childhood Vaccination Programs',
      'Pediatric Asthma & Allergy Management',
      'Developmental & Pediatric Neurological Screening',
      'Minimally Invasive Pediatric Surgery'
    ],
    technologies: [
      'Giraffe OmniBed Newborn Incubators',
      'High-Frequency Oscillatory Ventilators (HFOV)',
      'Total Body Cooling for Neonatal Asphyxia',
      'Pediatric Echocardiography & Ultrasound'
    ],
    bedCount: '18 NICU Incubators & 10 PICU Beds',
    image: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1200&q=80',
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'doc-cardio-1',
    name: 'Dr. [Doctor Name Placeholder - Cardiologist]',
    title: 'Senior Consultant & Director - Interventional Cardiology',
    department: 'Cardiology & Heart Care',
    departmentId: 'cardiology',
    qualifications: 'MBBS, MD (Gen Med), DM (Cardiology), FACC, FSCAI [Editable Placeholder]',
    experienceYears: 22,
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    visitingHours: '10:00 AM - 02:00 PM',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    bio: 'Specialist in complex coronary interventions, transcatheter aortic valve replacements (TAVR), bifurcation stenting, and heart failure management with over 12,000 successful procedures.',
    opdFeePlaceholder: '₹ [Editable Consultation Fee]',
    specialization: ['Coronary Angioplasty', 'TAVR / TAVI', 'Pacemaker Implantation', 'Heart Failure Management'],
  },
  {
    id: 'doc-neuro-1',
    name: 'Dr. [Doctor Name Placeholder - Neurosurgeon]',
    title: 'Chief Consultant - Neurosurgery & Spine Specialist',
    department: 'Neurology & Neuro-Spine',
    departmentId: 'neurology',
    qualifications: 'MBBS, MS (General Surgery), MCh (Neurosurgery), FINR [Editable Placeholder]',
    experienceYears: 18,
    availableDays: ['Mon', 'Wed', 'Fri', 'Sat'],
    visitingHours: '11:00 AM - 03:00 PM',
    image: 'https://images.unsplash.com/photo-1594824813566-7875a3594026?auto=format&fit=crop&w=800&q=80',
    bio: 'Renowned expert in microscopic brain tumor surgeries, endoscopic skull base procedures, deep brain stimulation (DBS), and complex spine reconstruction.',
    opdFeePlaceholder: '₹ [Editable Consultation Fee]',
    specialization: ['Microsurgical Brain Tumors', 'Minimally Invasive Spine', 'Aneurysm Clipping', 'Neuro-trauma'],
  },
  {
    id: 'doc-ortho-1',
    name: 'Dr. [Doctor Name Placeholder - Orthopaedic Surgeon]',
    title: 'Head of Department - Robotic Joint Replacement & Sports Medicine',
    department: 'Orthopaedics & Joint Replacement',
    departmentId: 'orthopaedics',
    qualifications: 'MBBS, MS (Ortho), DNB (Ortho), Fellowship in Robotic Arthroplasty (UK) [Editable Placeholder]',
    experienceYears: 20,
    availableDays: ['Tue', 'Thu', 'Sat'],
    visitingHours: '09:30 AM - 01:30 PM',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
    bio: 'Pioneer in 3D robotic assisted total and partial knee replacement, revision hip surgeries, and arthroscopic reconstruction for athletic injuries.',
    opdFeePlaceholder: '₹ [Editable Consultation Fee]',
    specialization: ['Robotic Knee Replacement', 'Hip Arthroplasty', 'Arthroscopic ACL Repair', 'Sports Injuries'],
  },
  {
    id: 'doc-onco-1',
    name: 'Dr. [Doctor Name Placeholder - Medical Oncologist]',
    title: 'Senior Consultant - Medical & Hemato-Oncology',
    department: 'Comprehensive Cancer Care',
    departmentId: 'oncology',
    qualifications: 'MBBS, MD (Internal Medicine), DM (Medical Oncology), ESMO Certified [Editable Placeholder]',
    experienceYears: 16,
    availableDays: ['Mon', 'Tue', 'Thu', 'Fri'],
    visitingHours: '02:00 PM - 06:00 PM',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    bio: 'Expertise in precision cancer medicine, targeted therapy, modern immunotherapy regimens, and individualized care for breast, lung, and GI malignancies.',
    opdFeePlaceholder: '₹ [Editable Consultation Fee]',
    specialization: ['Immunotherapy', 'Targeted Molecular Therapy', 'Breast & Lung Cancers', 'Lymphoma & Leukaemia'],
  },
  {
    id: 'doc-emergency-1',
    name: 'Dr. [Doctor Name Placeholder - Emergency Medicine]',
    title: 'Director - Emergency & Acute Critical Care',
    department: 'Emergency & Level-1 Trauma Care',
    departmentId: 'emergency-trauma',
    qualifications: 'MBBS, MD (Emergency Medicine), FEM (RCGP-UK), FACEE [Editable Placeholder]',
    experienceYears: 15,
    availableDays: ['24/7 On-Duty Roster'],
    visitingHours: '24 Hours Emergency On-Duty',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    bio: 'Specialized in hyper-acute resuscitation, polytrauma protocols, disaster management, and advanced airway management in critically ill patients.',
    opdFeePlaceholder: 'Emergency Triage Applicable',
    specialization: ['Trauma Resuscitation', 'Critical Airway Care', 'Toxicology & Poisoning', 'Disaster Medicine'],
  },
  {
    id: 'doc-ped-1',
    name: 'Dr. [Doctor Name Placeholder - Pediatrician & Neonatologist]',
    title: 'Senior Consultant - Neonatology & Pediatric Critical Care',
    department: 'Pediatrics & Neonatology (NICU)',
    departmentId: 'pediatrics',
    qualifications: 'MBBS, MD (Pediatrics), DM (Neonatology), Fellowship Neonatal Intensive Care [Editable Placeholder]',
    experienceYears: 17,
    availableDays: ['Mon', 'Tue', 'Wed', 'Fri', 'Sat'],
    visitingHours: '10:00 AM - 01:30 PM',
    image: 'https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&w=800&q=80',
    bio: 'Extensive expertise managing extremely low birth weight neonates, high-risk newborn care, congenital pediatric disorders, and comprehensive adolescent health.',
    opdFeePlaceholder: '₹ [Editable Consultation Fee]',
    specialization: ['Extreme Preterm Care', 'NICU / PICU Management', 'Childhood Vaccination', 'Pediatric Asthma'],
  },
  {
    id: 'doc-gastro-1',
    name: 'Dr. [Doctor Name Placeholder - Gastroenterologist]',
    title: 'Senior Consultant - Medical Gastroenterology & Hepatology',
    department: 'Gastroenterology & Hepatology',
    departmentId: 'gastroenterology',
    qualifications: 'MBBS, MD (Internal Medicine), DM (Gastroenterology) [Editable Placeholder]',
    experienceYears: 14,
    availableDays: ['Mon', 'Wed', 'Thu', 'Sat'],
    visitingHours: '03:00 PM - 07:00 PM',
    image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=800&q=80',
    bio: 'Proficient in advanced therapeutic endoscopy, ERCP, endoscopic ultrasound (EUS), acute liver failure management, and chronic inflammatory bowel disease.',
    opdFeePlaceholder: '₹ [Editable Consultation Fee]',
    specialization: ['Therapeutic ERCP', 'Endoscopic Ultrasound', 'Liver Cirrhosis Care', 'IBD & Crohn\'s'],
  },
  {
    id: 'doc-nephro-1',
    name: 'Dr. [Doctor Name Placeholder - Nephrologist]',
    title: 'Senior Consultant - Nephrology & Renal Care',
    department: 'Nephrology & Urology',
    departmentId: 'nephrology-urology',
    qualifications: 'MBBS, MD (Medicine), DNB (Nephrology), MNAMS [Editable Placeholder]',
    experienceYears: 19,
    availableDays: ['Tue', 'Thu', 'Fri', 'Sat'],
    visitingHours: '10:30 AM - 02:30 PM',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80',
    bio: 'Expert in chronic kidney disease progression control, hemodiafiltration, diabetic nephropathy, glomerulonephritis, and renal transplant medical evaluation.',
    opdFeePlaceholder: '₹ [Editable Consultation Fee]',
    specialization: ['Chronic Kidney Disease', 'Hemodialysis Protocols', 'Diabetic Nephropathy', 'Kidney Biopsy'],
  }
];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: 'pkg-executive',
    title: 'Havyas Executive Wellness Checkup',
    category: 'Comprehensive Master Health',
    pricePlaceholder: '₹ [Package Price Placeholder]',
    originalPricePlaceholder: '₹ [Original Price Placeholder]',
    testsCount: 78,
    fastingRequired: true,
    tatTime: 'Same Day Comprehensive Report',
    features: [
      'Complete Hemogram (28 parameters)',
      'Comprehensive Lipid Profile (Cholesterol, HDL, LDL, VLDL, Triglycerides)',
      'Liver Function Test (LFT) & Kidney Function Test (KFT)',
      'HbA1c & Fasting Blood Sugar with Insulin Resistance',
      'Cardiology: 12-Lead ECG, 2D Echocardiogram & TMT (Stress Test)',
      'Radiology: Chest X-Ray Digital & Ultrasound Whole Abdomen & Pelvis',
      'Thyroid Profile (T3, T4, TSH) & Vitamin D3 / B12 assays',
      'Consultation with Senior Physician, Cardiologist & Clinical Nutritionist'
    ],
    recommendedFor: 'Working professionals & adults aged 30+ seeking 360-degree preventative clinical screening.',
    isPopular: true,
  },
  {
    id: 'pkg-cardiac',
    title: 'Havyas Advanced Cardiac Care Package',
    category: 'Heart & Vascular Screening',
    pricePlaceholder: '₹ [Package Price Placeholder]',
    originalPricePlaceholder: '₹ [Original Price Placeholder]',
    testsCount: 42,
    fastingRequired: true,
    tatTime: '4 Hours Rapid Assessment',
    features: [
      '12-Lead Digital ECG & 2D Echo with Doppler Studies',
      'TMT (Treadmill Stress Test) monitored by Cardiologist',
      'High-Sensitivity C-Reactive Protein (hs-CRP) & Serum Homocysteine',
      'Extended Lipid Subfractions & Apolipoprotein A1/B',
      'Kidney & Electrolyte Panel (Serum Creatinine, BUN, Sodium, Potassium)',
      'Comprehensive Diabetic Screen (HbA1c + Fasting Blood Glucose)',
      'Detailed Consultation with Senior Interventional Cardiologist'
    ],
    recommendedFor: 'Individuals with hypertension, family history of cardiac illness, smoking history, or age 40+.',
    isPopular: false,
  },
  {
    id: 'pkg-senior',
    title: 'Havyas Senior Citizen Platinum Care',
    category: 'Geriatric Health & Mobility',
    pricePlaceholder: '₹ [Package Price Placeholder]',
    originalPricePlaceholder: '₹ [Original Price Placeholder]',
    testsCount: 65,
    fastingRequired: true,
    tatTime: 'Same Day with Priority Senior Lounge',
    features: [
      'Bone Mineral Density Scan (DEXA - Spine & Hip) for Osteoporosis',
      'Comprehensive Cardiac Assessment (ECG & 2D Echo)',
      'Urological/Gynaecological Screen: PSA (Men) / Mammography (Women)',
      'Kidney, Liver, Electrolyte & Complete Metabolic Panels',
      'Ophthalmic Screening (Glaucoma, Cataract, Diabetic Retinopathy)',
      'Hearing Assessment & Neurological Fall-Risk Evaluation',
      'Consultation with Geriatrician, Orthopaedic Specialist & Dietitian'
    ],
    recommendedFor: 'Seniors aged 60+ focusing on joint mobility, bone density, cardiovascular health, and memory wellness.',
    isPopular: false,
  },
  {
    id: 'pkg-women',
    title: 'Havyas Well-Woman & Cancer Screening',
    category: 'Women\'s Preventive Wellness',
    pricePlaceholder: '₹ [Package Price Placeholder]',
    originalPricePlaceholder: '₹ [Original Price Placeholder]',
    testsCount: 52,
    fastingRequired: true,
    tatTime: 'Same Day with Private Female Care Suite',
    features: [
      'Digital Bilateral Mammography & Breast Ultrasound',
      'Liquid-Based Pap Smear with Cervical Cytology',
      'Pelvic Ultrasound for Ovarian & Uterine Evaluation',
      'Complete Thyroid Assessment (Free T3, Free T4, Ultrasensitive TSH)',
      'Bone Health: Serum Calcium, Phosphorus, Vitamin D3 & DEXA',
      'Iron Deficiency Profile (Serum Ferritin, TIBC, Iron)',
      'Consultation with Senior Gynaecologist & Onco-Screening Specialist'
    ],
    recommendedFor: 'Women aged 25+ prioritizing reproductive wellness, hormonal balance, bone density, and early cancer prevention.',
    isPopular: false,
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    patientName: '[Patient Name Placeholder - Cardiac Surgery]',
    ageGender: '58 Years, Male',
    treatment: 'Emergency Primary Angioplasty (Door-to-Balloon in 38 mins)',
    department: 'Cardiology & Heart Care',
    quote: 'The emergency team at HAVYAS HOSPITAL acted with unbelievable precision. Within 40 minutes of entering the ER with acute chest pain, I was in the Cath Lab and the blockage was cleared.',
    story: 'From the prompt ambulance dispatch to the compassionate nursing staff in the CICU, the level of care and reassurance given to my family was extraordinary. I owe my life to the cardiology specialists at HAVYAS HOSPITAL.',
    rating: 5,
    recoveryPeriod: 'Discharged on Day 3, back to normal life in 3 weeks',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'test-2',
    patientName: '[Patient Name Placeholder - Robotic Knee Replacement]',
    ageGender: '64 Years, Female',
    treatment: 'Bilateral Robotic Total Knee Replacement',
    department: 'Orthopaedics & Joint Replacement',
    quote: 'For five years I could not climb stairs without agonizing pain. Thanks to the robotic surgery at HAVYAS HOSPITAL, I was walking with minimal support the very next morning.',
    story: 'The precision of the 3D robotic guidance made a tremendous difference. The physical rehabilitation team visited me twice daily, helping me regain full independence with genuine compassion.',
    rating: 5,
    recoveryPeriod: 'Independent walking within 24 hours',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'test-3',
    patientName: '[Patient Name Placeholder - Preterm NICU Miracle]',
    ageGender: 'Newborn Care, Parents Testimonial',
    treatment: 'Level-3 Neonatal Intensive Care (29 Weeks Preterm)',
    department: 'Pediatrics & Neonatology (NICU)',
    quote: 'Our baby was born prematurely at 29 weeks weighing just 1.1 kg. The neonatology team at HAVYAS HOSPITAL nurtured him with such gentle love and cutting-edge technology for 45 days.',
    story: 'We were terrified, but the doctors explained every monitor, every feed, and every milestone. Today our healthy baby boy is laughing and meeting all milestones. HAVYAS HOSPITAL gave us our miracle.',
    rating: 5,
    recoveryPeriod: 'Graduated safely from NICU after 6 weeks',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  }
];

export const HEALTH_ARTICLES: HealthArticle[] = [
  {
    id: 'art-1',
    title: 'Recognizing Stroke Symptoms: The F.A.S.T Protocol and Why the Golden Hour Saves Brain Cells',
    category: 'Neurology & Emergency Care',
    readTime: '4 min read',
    date: 'Nov 10, 2026',
    author: 'HAVYAS HOSPITAL Stroke Care Team',
    summary: 'Every second counts during an acute ischemic stroke. Learn the warning signs—Face drooping, Arm weakness, Speech difficulty, Time to call emergency—and how modern thrombectomy prevents permanent paralysis.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'art-2',
    title: 'Heart Attack vs. Acid Reflux: Key Differences Everyone Over 40 Needs to Know',
    category: 'Preventive Cardiology',
    readTime: '5 min read',
    date: 'Oct 28, 2026',
    author: 'HAVYAS HOSPITAL Department of Cardiology',
    summary: 'Discomfort in the chest is frequently dismissed as simple acidity. Clinical indicators such as radiation to the jaw or arm, cold sweats, and exertional shortness of breath require immediate medical attention.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'art-3',
    title: 'The Future of Robotic Joint Surgery: How Millimeter Precision Accelerates Healing',
    category: 'Orthopaedics & Innovation',
    readTime: '3 min read',
    date: 'Oct 14, 2026',
    author: 'HAVYAS HOSPITAL Robotic Arthroplasty Center',
    summary: 'Explore how 3D computed tomography modeling and robotic arms enable surgeons to customize implant alignments to each patient’s unique anatomy, reducing bone loss and enabling faster recovery.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
  }
];

export const HOSPITAL_METRICS = [
  { label: 'Super-Specialties', value: '50+', sub: 'Centers of Clinical Excellence' },
  { label: 'Senior Consultants', value: '250+', sub: 'Dedicated Medical Experts' },
  { label: 'Patient Beds Capacity', value: '450+', sub: 'Tertiary & Critical Care Beds' },
  { label: 'Successful Surgeries', value: '35,000+', sub: 'Minimal In-Hospital Infections' },
  { label: 'Patient Care Satisfaction', value: '99.4%', sub: 'Based on Verified Patient Reviews' },
  { label: 'Emergency Response Time', value: '< 10 min', sub: 'Average Ambulance Arrival Time' }
];

export const ACCREDITATIONS = [
  { name: 'NABH Accreditation', desc: 'National Accreditation Board for Hospitals & Healthcare Providers [Placeholder]' },
  { name: 'NABL Certified Laboratories', desc: 'National Accreditation Board for Testing and Calibration Laboratories [Placeholder]' },
  { name: 'ISO 9001:2015 Quality Standards', desc: 'International Organization for Standardization Quality Management [Placeholder]' },
  { name: 'Gold Seal of Infection Control', desc: 'Zero Tolerance Protocol for Hospital Acquired Infections [Placeholder]' }
];

export const VISITOR_GUIDELINES = [
  {
    title: 'OPD Consultation Timings',
    details: '08:30 AM to 08:00 PM (Monday through Saturday). Prior appointment booking is recommended for reduced waiting times.'
  },
  {
    title: 'Inpatient (Ward) Visiting Hours',
    details: 'Morning: 11:00 AM – 12:00 PM | Evening: 05:00 PM – 07:00 PM. Maximum 2 visitors per patient at a time to ensure infection control and patient rest.'
  },
  {
    title: 'ICU / CCU / NICU Visiting Rules',
    details: 'Only one direct attendant permitted for 10 minutes during evening rounds (05:00 PM – 06:00 PM) after donning sanitized gown and mask.'
  },
  {
    title: 'Cashless Insurance & TPA Desk',
    details: 'Dedicated 24/7 TPA Facilitation Desk located in the Main Atrium. Pre-authorization support available for all major national & private insurers.'
  }
];

export const INSURANCE_PARTNERS_PLACEHOLDER = [
  'Star Health Insurance [Placeholder]',
  'HDFC ERGO Health [Placeholder]',
  'ICICI Lombard Health [Placeholder]',
  'Care Health Insurance [Placeholder]',
  'Bajaj Allianz Health [Placeholder]',
  'Max Bupa / Niva Bupa [Placeholder]',
  'New India Assurance [Placeholder]',
  'United India Insurance [Placeholder]'
];

export const FAQS = [
  {
    q: 'How do I book an OPD appointment at HAVYAS HOSPITAL?',
    a: 'You can book an appointment instantly using our online "Book Appointment" feature on this website, by calling our consultation desk at +91 [Hospital Contact Number], or by walking into the hospital OPD registration counter.'
  },
  {
    q: 'What is the procedure during an emergency or acute trauma?',
    a: 'In case of an emergency, call our 24/7 Emergency Helpline [Emergency Helpline: 1066 / +91-XXXXX-XXXXX] or arrive directly at our 24/7 Emergency & Level-1 Trauma Centre. Emergency medical triage begins immediately without awaiting financial or insurance paperwork.'
  },
  {
    q: 'How can I access or download my diagnostic lab and radiology reports online?',
    a: 'You can click on the "Patient Portal / Download Reports" button in the top navigation. Enter your unique UHID (Patient Registration Number) or registered mobile number to view and download digitally verified PDF reports.'
  },
  {
    q: 'Does HAVYAS HOSPITAL offer cashless hospitalization with insurance TPAs?',
    a: 'Yes. HAVYAS HOSPITAL is empaneled with major health insurance companies and Third-Party Administrators (TPAs) [Editable TPA List]. Our dedicated 24/7 TPA Desk assists with approvals, pre-authorizations, and documentation.'
  },
  {
    q: 'Are video / teleconsultations available for follow-up patients?',
    a: 'Yes, we provide secure end-to-end encrypted video teleconsultations for initial opinions, non-emergency consultations, and follow-ups with our senior specialists. Select "Video Teleconsultation" while booking your appointment.'
  },
  {
    q: 'What safety and infection control protocols are followed at HAVYAS HOSPITAL?',
    a: 'We adhere to stringent international infection prevention benchmarks including HEPA filtration in all Operation Theatres and ICUs, zero-touch sanitizer stations, continuous environmental sterilization, and strict antibiotic stewardship protocols.'
  }
];

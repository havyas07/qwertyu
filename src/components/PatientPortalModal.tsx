import React, { useState } from 'react';
import { X, Search, FileText, Download, ShieldCheck, Eye, Printer } from 'lucide-react';
import { HospitalLogo } from './HospitalLogo';

interface PatientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PatientPortalModal: React.FC<PatientPortalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [uhidInput, setUhidInput] = useState('');
  const [searched, setSearched] = useState(false);
  const [selectedReport, setSelectedReport] = useState<any>(null);

  if (!isOpen) return null;

  const mockReports = [
    {
      id: 'REP-2026-881',
      testName: 'Complete Blood Count (CBC with Automated Differential)',
      category: 'Haematology & Pathology (NABL Accredited)',
      date: '10 Nov 2026',
      consultant: 'Dr. [Pathologist Placeholder], MD (Pathology)',
      status: 'Normal / Verified',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      parameters: [
        { name: 'Hemoglobin', value: '14.2 g/dL', ref: '13.0 - 17.0 g/dL', status: 'Normal' },
        { name: 'Total Leukocyte Count (WBC)', value: '6,800 /cumm', ref: '4,000 - 11,000 /cumm', status: 'Normal' },
        { name: 'Platelet Count', value: '240,000 /cumm', ref: '150,000 - 450,000 /cumm', status: 'Normal' },
        { name: 'Packed Cell Volume (PCV)', value: '42.5 %', ref: '40 - 50 %', status: 'Normal' },
      ],
      remarks: 'Normal hemogram parameters. No atypical cells observed.'
    },
    {
      id: 'REP-2026-882',
      testName: 'Comprehensive Lipid & Cardiovascular Risk Profile',
      category: 'Biochemistry (NABL Accredited)',
      date: '10 Nov 2026',
      consultant: 'Dr. [Biochemist Placeholder], MD',
      status: 'Mild Borderline / Attention',
      statusColor: 'text-amber-700 bg-amber-50 border-amber-200',
      parameters: [
        { name: 'Total Cholesterol', value: '198 mg/dL', ref: '< 200 mg/dL', status: 'Desirable' },
        { name: 'HDL Cholesterol (Good)', value: '48 mg/dL', ref: '> 40 mg/dL', status: 'Normal' },
        { name: 'LDL Cholesterol (Direct)', value: '124 mg/dL', ref: '< 100 mg/dL', status: 'Borderline High' },
        { name: 'Serum Triglycerides', value: '142 mg/dL', ref: '< 150 mg/dL', status: 'Normal' },
      ],
      remarks: 'Mild elevation in LDL cholesterol. Dietary moderation & aerobic exercise advised. Clinical correlation recommended.'
    },
    {
      id: 'REP-2026-883',
      testName: '3.0T MRI Scan — Brain & Cervical Spine (High-Resolution)',
      category: 'Radio-Diagnosis & Advanced Neuroimaging',
      date: '02 Nov 2026',
      consultant: 'Dr. [Radiologist Placeholder], MD, DNB (Radio-Diagnosis)',
      status: 'Verified & Signed',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      parameters: [
        { name: 'Cerebral Parenchyma', value: 'Normal gray-white differentiation', ref: 'No acute infarct or bleed', status: 'Normal' },
        { name: 'Ventricular System', value: 'Symmetric & normal caliber', ref: 'No hydrocephalus', status: 'Normal' },
        { name: 'Cervical Disc Spaces', value: 'Mild C5-C6 disc bulge without canal stenosis', ref: 'Age-appropriate changes', status: 'Normal' },
      ],
      remarks: 'No acute intracranial pathology. Mild degenerative disc changes at C5-C6 level without neural impingement.'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  const loadDemo = () => {
    setUhidInput('HAV-98421');
    setSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-[#12345A] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          <HospitalLogo variant="white" size="sm" showTagline={false} />

          <div className="mt-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading">
              Patient Portal & Diagnostic Reports
            </h2>
            <p className="text-xs text-[#5EEAD9] font-medium mt-0.5">
              Secure Digital Health Records & NABL Accredited Laboratory Results
            </p>
          </div>
        </div>

        {/* Search Bar Strip */}
        <div className="p-6 bg-[#F2F7FA] border-b border-slate-200">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter Patient UHID (e.g. HAV-98421) or Registered Mobile..."
                value={uhidInput}
                onChange={(e) => setUhidInput(e.target.value)}
                className="w-full text-sm pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16A6A1]"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#12345A] hover:bg-[#1a4778] transition-colors cursor-pointer"
            >
              Search Records
            </button>
            <button
              type="button"
              onClick={loadDemo}
              className="px-4 py-3 rounded-xl text-xs font-semibold text-[#12345A] bg-white border border-slate-300 hover:bg-slate-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              Demo Patient (HAV-98421)
            </button>
          </form>

          <div className="flex items-center gap-2 mt-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>256-Bit SSL Encrypted. Diagnostic reports are digitally authenticated by HAVYAS HOSPITAL pathology faculty.</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {searched ? (
            <div className="space-y-4 animate-fadeIn">
              
              {/* Patient Header Card */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap justify-between items-center gap-3">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Patient Record</div>
                  <div className="text-base font-bold text-[#12345A]">[Patient Name Placeholder]</div>
                  <div className="text-xs text-slate-600">UHID: <strong className="font-mono text-[#16A6A1]">{uhidInput || 'HAV-98421'}</strong> | Age/Gender: 48y / Male</div>
                </div>
                <div className="text-right text-xs">
                  <div className="text-slate-500">Primary Consultant:</div>
                  <div className="font-semibold text-slate-800">Dr. [Cardiology Consultant Placeholder]</div>
                  <span className="inline-block mt-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Active Patient Record
                  </span>
                </div>
              </div>

              {/* Reports List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Available Lab & Diagnostic Reports ({mockReports.length})
                </h4>

                {mockReports.map((report) => (
                  <div
                    key={report.id}
                    className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-[#16A6A1] transition-all shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#16A6A1]" />
                        <span className="text-sm font-bold text-[#12345A]">{report.testName}</span>
                      </div>
                      <div className="text-xs text-slate-500">
                        Dept: {report.category} | Date: {report.date}
                      </div>
                      <div className="text-[11px] text-slate-600">
                        Verified by: <span className="font-medium">{report.consultant}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${report.statusColor}`}>
                        {report.status}
                      </span>
                      <button
                        onClick={() => setSelectedReport(report)}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#12345A] bg-[#F2F7FA] hover:bg-slate-200/80 border border-slate-200 flex items-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#16A6A1]" />
                        <span>View</span>
                      </button>
                      <button
                        onClick={() => alert(`Downloading verified digital report (${report.id}.pdf)...`)}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#12345A] hover:bg-[#1a4778] flex items-center gap-1 cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-[#16A6A1]" />
                        <span>PDF</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ) : (
            <div className="py-12 text-center space-y-3">
              <FileText className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-700">Access Your Verified Medical Reports</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Enter your Hospital Unique Health ID (UHID) or click the <strong>&quot;Demo Patient&quot;</strong> button above to preview real simulated lab and radiology reports.
              </p>
            </div>
          )}

          {/* Report Detail View Modal */}
          {selectedReport && (
            <div className="mt-4 p-5 bg-[#F2F7FA] rounded-2xl border border-slate-200 space-y-4 animate-fadeIn">
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <div>
                  <div className="text-xs font-bold text-[#12345A]">{selectedReport.testName}</div>
                  <div className="text-[11px] text-slate-500">Report ID: {selectedReport.id} | Date: {selectedReport.date}</div>
                </div>
                <button
                  onClick={() => setSelectedReport(null)}
                  className="text-xs text-slate-500 hover:text-slate-800 font-bold"
                >
                  ✕ Close Preview
                </button>
              </div>

              {/* Parameters Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs bg-white rounded-xl overflow-hidden border border-slate-200">
                  <thead className="bg-slate-100 text-slate-700 font-bold">
                    <tr>
                      <th className="p-2.5">Investigation Parameter</th>
                      <th className="p-2.5">Observed Value</th>
                      <th className="p-2.5">Biological Reference Range</th>
                      <th className="p-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {selectedReport.parameters.map((param: any, idx: number) => (
                      <tr key={idx} className="hover:bg-slate-50/50">
                        <td className="p-2.5 font-medium text-slate-800">{param.name}</td>
                        <td className="p-2.5 font-bold text-[#12345A]">{param.value}</td>
                        <td className="p-2.5 text-slate-600">{param.ref}</td>
                        <td className="p-2.5 font-semibold text-emerald-700">{param.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs">
                <strong className="text-slate-800">Clinical Interpretation:</strong>
                <p className="text-slate-600 mt-0.5">{selectedReport.remarks}</p>
              </div>

              <div className="flex justify-between items-center pt-2 text-[11px] text-slate-500">
                <span>Digitally Authenticated by: {selectedReport.consultant}</span>
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold flex items-center gap-1 hover:bg-slate-50"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Report</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-600 flex justify-between items-center">
          <span>HAVYAS HOSPITAL Central Diagnostic Laboratories</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#12345A] text-white font-semibold text-xs"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};

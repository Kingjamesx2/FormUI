import React from 'react';
import UBStepper from "../../components/common/Stepper/UBStepper";
import AnnualAcademicReportStep1 from "../../components/reports/annual/annual-academic-report/step1/AnnualAcademicReportStep1";
import AnnualAcademicReportStep2 from "../../components/reports/annual/annual-academic-report/step2/AnnualAcademicReportStep2";
import AnnualAcademicReportStep3 from "../../components/reports/annual/annual-academic-report/Step3/AnnualAcademicReportStep3";
import AnnualAcademicReportStep4 from "../../components/reports/annual/annual-academic-report/step4/AnnualAcademicReportStep4";
import AnnualAcademicReportStep5 from "../../components/reports/annual/annual-academic-report/step5/AnnualAcademicReportStep5";
import Header from '../../components/common/Header/Header';  // Import the Header component
import useSaveAnnualFormHook from '../../hooks/useSaveAnnualFormHook';

const steps = [
  { label: "Step 1", stepComponent: <AnnualAcademicReportStep1 /> },
  { label: "Step 2", stepComponent: <AnnualAcademicReportStep2 /> },
  { label: "Step 3", stepComponent: <AnnualAcademicReportStep3 /> },
  { label: "Step 4", stepComponent: <AnnualAcademicReportStep4 /> },
  { label: "Step 5", stepComponent: <AnnualAcademicReportStep5 /> },
];

export const AnnualAcademicReport: React.FC = () => {
  useSaveAnnualFormHook()
  
  return (
    <div>
      <Header
        logo="./../icons/UB_Logo.png"
        title="UB Annual Report Template Academic Division"
      />
      <UBStepper steps={steps} />
      </div>
  );
};

export default AnnualAcademicReport;
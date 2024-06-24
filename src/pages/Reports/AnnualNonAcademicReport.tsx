// import React from 'react'
import UBStepper from "../../components/common/Stepper/UBStepper";
import AnnualNonAcademicReportStep1 from "./../../components/reports/annual/annual-non-academic-report/Step1/AnnualNonAcademicReportStep1";
import AnnualNonAcademicReportStep2 from "./../../components/reports/annual/annual-non-academic-report/Step2/AnnualNonAcademicReportStep2";
import AnnualNonAcademicReportStep3 from "./../../components/reports/annual/annual-non-academic-report/Step3/AnnualNonAcademicReportStep3";
import AnnualNonAcademicReportStep4 from "./../../components/reports/annual/annual-non-academic-report/Step4/AnnualNonAcademicReportStep4";
import AnnualNonAcademicReportStep5 from "./../../components/reports/annual/annual-non-academic-report/Step5/AnnualNonAcademicReportStep5";

const steps = [
  { label: "Step 1", stepComponent: <AnnualNonAcademicReportStep1 /> },
  { label: "Step 2", stepComponent: <AnnualNonAcademicReportStep2 /> },
  { label: "Step 3", stepComponent: <AnnualNonAcademicReportStep3 /> },
  { label: "Step 4", stepComponent: <AnnualNonAcademicReportStep4 /> },
  { label: "Step 5", stepComponent: <AnnualNonAcademicReportStep5 /> },
];

export const AnnualNonAcademicReport = () => <UBStepper steps={steps} />;

export default AnnualNonAcademicReport

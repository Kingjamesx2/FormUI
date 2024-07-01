import React from 'react';
import UBStepper from "../../components/common/Stepper/UBStepper";
import AnnualAcademicReportStep1 from "../../components/reports/annual/annual-academic-report/step1/AnnualAcademicReportStep1";
import AnnualAcademicReportStep2 from "../../components/reports/annual/annual-academic-report/step2/AnnualAcademicReportStep2";
import AnnualAcademicReportStep3 from "../../components/reports/annual/annual-academic-report/Step3/AnnualAcademicReportStep3";
import AnnualAcademicReportStep4 from "../../components/reports/annual/annual-academic-report/step4/AnnualAcademicReportStep4";
import AnnualAcademicReportStep5 from "../../components/reports/annual/annual-academic-report/step5/AnnualAcademicReportStep5";
import Header from '../../components/common/Header/Header';  // Import the Header component
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
// import { updateStep1Data, updateStep2Data, updateStep3Data, updateStep4Data, updateStep5Data } from '../../store/store';


const steps = [
  { label: "Step 1", stepComponent: <AnnualAcademicReportStep1 /> },
  { label: "Step 2", stepComponent: <AnnualAcademicReportStep2 /> },
  { label: "Step 3", stepComponent: <AnnualAcademicReportStep3 /> },
  { label: "Step 4", stepComponent: <AnnualAcademicReportStep4 /> },
  { label: "Step 5", stepComponent: <AnnualAcademicReportStep5 /> },
];

export const AnnualAcademicReport: React.FC = () => {
  // const dispatch = useDispatch();
  // const formState = useSelector((state: RootState) => state.form);

  // // Example function to handle step1 data update
  // const handleStep1DataUpdate = (data: any) => {
  //   dispatch(updateStep1Data(data));
  // };

  return (
    <>
      <Header
        logo="./../icons/UB_Logo.png"
        title="UB Annual Report Template Academic Division"
      />
      <UBStepper steps={steps} />
    </>
  );
};

export default AnnualAcademicReport;
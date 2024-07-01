// import React from 'react'
import UBStepper from "../../components/common/Stepper/UBStepper";
import { KeyStatisticsReportStep1 } from "../../components/reports/annual/KeyStatisticsReport/Step1/KeyStatisticsReportStep1";
import { KeyStatisticsReportStep2 } from "../../components/reports/annual/KeyStatisticsReport/Step2/KeyStatisticsReportStep2";
import { KeyStatisticsReportStep3 } from "../../components/reports/annual/KeyStatisticsReport/Step3/KeyStatisticsReportStep3";
import Header from '../../components/common/Header/Header';  // Import the Header component


const steps = [
  { label: "Step 1", stepComponent: <KeyStatisticsReportStep1 /> },
  { label: "Step 2", stepComponent: <KeyStatisticsReportStep2 /> },
  { label: "Step 3", stepComponent: <KeyStatisticsReportStep3 /> },

];

export const KeyStatisticsTemplate = () => (
  <>
    <Header
      logo="./../icons/UB_Logo.png"
      title="University of Belize Key Statistics Template "
    />
    <UBStepper steps={steps} />
  </>
);
export default KeyStatisticsTemplate

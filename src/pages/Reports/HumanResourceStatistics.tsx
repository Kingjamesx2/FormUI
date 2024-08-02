import React from "react";
import UBStepper from "../../components/common/Stepper/UBStepper";
import HumanStatisticsReport from "../../components/reports/annual/human-resource-statistics/HumanReportStatistics";
import Header from '../../components/common/Header/Header';  // Import the Header component


const steps = [
    { label: "", stepComponent: <HumanStatisticsReport /> },
  ];

export const HumanResourceStatistics: React.FC = () => {
    return (
        <div>
        <Header
          logo="./../icons/UB_Logo.png"
          title="UB Human Statistics Report "
        />
        <UBStepper steps={steps} />
        </div>

    )
}

export default HumanResourceStatistics;
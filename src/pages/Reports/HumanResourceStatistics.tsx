import React from "react";
import { useDispatch } from "react-redux";
import UBStepper from "../../components/common/Stepper/UBStepper";
import HumanStatisticsReport from "../../components/reports/annual/human-resource-statistics/HumanReportStatistics";
import Header from "../../components/common/Header/Header"; // Import the Header component
import useSaveHRReportFormHook from "../../hooks/useSaveHRReportFormHook";
import { setFormSubmitted } from "../../store/features/HRReportSlice";

const steps = [{ label: "", stepComponent: <HumanStatisticsReport /> }];

export const HumanResourceStatistics: React.FC = () => {
  const dispatch = useDispatch();
  useSaveHRReportFormHook();

  return (
    <div>
      <Header
        logo="./../icons/UB_Logo.png"
        title="UB Human Statistics Report "
      />
      <UBStepper
        steps={steps}
        submitFn={() => dispatch(setFormSubmitted(true))}
        hideStepper={true} // Pass the prop to hide the stepper
      />
    </div>
  );
};

export default HumanResourceStatistics;

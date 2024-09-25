import React from "react";
import { useDispatch } from "react-redux";
import UBStepper from "../../components/common/Stepper/UBStepper";
import HumanStatisticsReport from "../../components/reports/annual/human-resource-statistics/HumanReportStatistics";
import Header from "../../components/common/Header/Header"; // Import the Header component
import useSaveHRReportFormHook from "../../hooks/useSaveHRReportFormHook";
import { setFormSubmitted, setDateSubmitted } from "../../store/features/HRReportSlice";

const steps = [{ label: "", stepComponent: <HumanStatisticsReport /> }];

export const HumanResourceStatistics: React.FC = () => {
  const dispatch = useDispatch();
  useSaveHRReportFormHook();

  const handleSubmit = () => {
    const currentDate = new Date(); // Get the current date
    dispatch(setDateSubmitted(currentDate)); // Set the date submitted
    dispatch(setFormSubmitted(true)); // Mark the form as submitted
    // You can trigger the PDF download logic here if needed
  };

  return (
    <div>
      <Header
        logo="./../icons/UB_Logo.png"
        title="UB Human Statistics Report "
      />
      <UBStepper
        steps={steps}
        submitFn={handleSubmit}
        hideStepper={true} // Pass the prop to hide the stepper
      />
    </div>
  );
};

export default HumanResourceStatistics;

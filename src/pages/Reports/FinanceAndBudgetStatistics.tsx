import React from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/common/Header/Header"; // Import the Header component
import UBStepper from "../../components/common/Stepper/UBStepper";
import FinanceAndBudgetStatisticsStep1 from "../../components/reports/annual/finance-budget-statistics/Step1/FinanceAndBudgetStatisticsStep1";
import useSaveFinancialIncomeFormHook from "../../hooks/useSaveFinancialIncomeFormHook";
import { setFormSubmitted } from "../../store/features/financeReportSlice";

const steps = [
  { label: "Step 1", stepComponent: <FinanceAndBudgetStatisticsStep1 /> },
];

export const FinanceAndBudgetStatistics: React.FC = () => {
  const dispatch = useDispatch();
  useSaveFinancialIncomeFormHook();

  return (
    <div>
      <Header
        logo="./../icons/UB_Logo.png"
        title="UB Fincance and Budget Statistics"
      />
      <UBStepper
        steps={steps}
        submitFn={() => dispatch(setFormSubmitted(true))}
        hideStepper={true} // Pass the prop to hide the stepper
      />
    </div>
  );
};

export default FinanceAndBudgetStatistics;

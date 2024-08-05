import React from "react";
import Header from '../../components/common/Header/Header';  // Import the Header component
import UBStepper from "../../components/common/Stepper/UBStepper";
import FinanceAndBudgetStatisticsStep1 from "../../components/reports/annual/finance-budget-statistics/Step1/FinanceAndBudgetStatisticsStep1";
import useSaveFinancialIncomeFormHook from "../../hooks/useSaveFinancialIncomeFormHook";

const steps = [
    { label: "Step 1", stepComponent: <FinanceAndBudgetStatisticsStep1 /> },
  ];
  


export const FinanceAndBudgetStatistics: React.FC = () => {
  useSaveFinancialIncomeFormHook()
  
    return (
        <div>
        <Header
          logo="./../icons/UB_Logo.png"
          title="UB Fincance and Budget Statistics"
        />
        <UBStepper steps={steps} />
        </div>
    )
}

export default FinanceAndBudgetStatistics
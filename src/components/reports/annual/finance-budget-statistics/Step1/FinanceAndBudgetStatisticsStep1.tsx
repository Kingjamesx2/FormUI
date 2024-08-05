
import React from "react";
import { Container } from "@mui/material";
import FinanceIncomes from "./../Step1/UBFinanceIncome";
import FinanceExpenditures from './../Step1/UBFinanceExpenditures';
import CapitalExpenditureProjects from "./../Step1/UBCapitalExpenditureProjects";

export const FinanceAndBudgetStatistics:React.FC = () => {

  return (
    <Container>
    <FinanceIncomes/>
    <FinanceExpenditures/>
    <CapitalExpenditureProjects/>
</Container>
  );
};

export default FinanceAndBudgetStatistics;

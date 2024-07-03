import React from "react";
import { Container } from "@mui/material";
import FinanceIncomes from "./FinanceAndBudgetStatistics/UBFinanceIncome";
import FinanceExpenditures from './FinanceAndBudgetStatistics/UBFinanceExpenditures';
import CapitalExpenditureProjects from "./FinanceAndBudgetStatistics/UBCapitalExpenditureProjects";

export const KeyStatisticsReportStep4: React.FC = () => {
    return (
        <Container>
            <FinanceIncomes/>
            <FinanceExpenditures/>
            <CapitalExpenditureProjects/>
        </Container>
    )
}

export default KeyStatisticsReportStep4;
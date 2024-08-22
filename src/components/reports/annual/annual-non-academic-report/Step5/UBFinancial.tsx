import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { UBRadioButton } from "../../../../common/UBRadioButton/UBRadioButton";
import { useSelector, useDispatch } from "react-redux";
import { setFinancialBudget, selectAnnualNonReport } from "../../../../../store/features/annualNonReportSlice";


export const UBFinancial: React.FC = () => {
  const dispatch = useDispatch();
  const annualNonReport = useSelector(selectAnnualNonReport)
  

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginBottom: "-2%", marginTop: "-7%" }}><center>Financial/Budget</center></h3>
      
      <Box mb={"-4%"}>
        <UBTextArea
          question="a. State sources of funding, for example, department activities, research fund"
          SetAnswer={(e) => dispatch(setFinancialBudget({ fundingSources: e.target.value }))}
          value={annualNonReport.financialBudget.fundingSources}
        />
      </Box>

      <Box mb={"-4%"}>
        <UBRadioButton
          label="Identify the most impactful change/initiative by your faculty for the academic year and give reasons why."
          options={[
            { value: "yes", label: "yes" },
            { value: "no", label: "no" }
          ]}
          handleSetValue={(e) => dispatch(setFinancialBudget({ significantBudgetChanges: e.target.value }))}
          value={annualNonReport.financialBudget.significantBudgetChanges??''}
        />
      </Box>
      
    </Container>
  );
};

export default UBFinancial;

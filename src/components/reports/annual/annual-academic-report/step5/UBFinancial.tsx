import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { UBRadioButton } from "../../../../common/UBRadioButton/UBRadioButton";
import { useSelector, useDispatch } from "react-redux";
import { setFinancialBudget, selectAnnualReport } from "../../../../../store/features/annualReportSlice";

export const UBFinancial: React.FC = () => {
  const dispatch = useDispatch();
  const annualReport = useSelector(selectAnnualReport);

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginBottom: "-2%", marginTop: "7%" }}><center>Financial/Budget</center></h3>
      
      <Box mb={"-4%"}>
        <UBTextArea
          question="a. State sources of funding, for example, department activities, research fund"
          SetAnswer={(e) => dispatch(setFinancialBudget({
            ...annualReport.financialBudget,
            fundingSources: e.target.value
          }))}
          value={annualReport.financialBudget.fundingSources}
        />
      </Box>

      <Box mb={"-4%"}>
        <UBRadioButton
          label="Identify the most impactful change/initiative by your faculty for the academic year and give reasons why."
          options={[
            { value: "yes", label: "yes" },
            { value: "no", label: "no" }
          ]}
          handleSetValue={(e) => dispatch(setFinancialBudget({
            ...annualReport.financialBudget,
            impactfulChanges: e.target.value
          }))}
          value={annualReport.financialBudget.impactfulChanges}
        />
      </Box>
      
    </Container>
  );
};

export default UBFinancial;

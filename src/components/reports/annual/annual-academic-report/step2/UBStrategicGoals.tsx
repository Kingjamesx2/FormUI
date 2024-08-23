import React  from "react";
import Container from "@mui/material/Container";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import {
  setStrategicGoals, selectAnnualReport } from "../../../../../store/features/annualReportSlice";

export const UBStrategicGoals: React.FC = () => {
  const dispatch = useDispatch();
  const annualReport = useSelector(selectAnnualReport)

  return (
    <Container sx={{ width: 1, m: "auto", p: 1 }}>
      <h3 style={{ marginBottom: "-20px", marginTop: "50px" }}>
        <center>Strategic Goals</center>
      </h3>
      <Box mb={-4.7}>
        <UBTextArea
          question="1. Accomplished Initiative for the Academic Year (AY) 23-24"
          SetAnswer={(e) => dispatch(
            setStrategicGoals({ previousAcademicYear: e.target.value })
          )}
          value={annualReport.strategicGoals.previousAcademicYear}
        />
      </Box>
      <Box mb={-4.7}>
        <UBTextArea
          question="2. Corresponding Strategic Plan Goal & Strategy"
          SetAnswer={(e) => dispatch(
            setStrategicGoals({ plans: e.target.value })
          )}
          value={annualReport.strategicGoals.plans}
        />
      </Box>

      <Box mb={-4.7}>
        <UBTextArea
          question="3. What is the completion rate for the 2023-2024 Annual Implementation Plan?"
          SetAnswer={(e) => dispatch(
            setStrategicGoals({ completionRate: e.target.value })
          )}
          value={annualReport.strategicGoals.completionRate}
        />
      </Box>
    </Container>
  );
};

export default UBStrategicGoals;

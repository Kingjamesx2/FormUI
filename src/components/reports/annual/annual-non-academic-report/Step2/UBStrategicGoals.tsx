import React from "react";
import Container from "@mui/material/Container";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { selectAnnualNonReport, setStrategicGoals } from "../../../../../store/features/annualNonReportSlice";

export const UBStrategicGoals: React.FC = () => {
  const dispatch = useDispatch();
  const annualNonReport = useSelector(selectAnnualNonReport)

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginBottom: "-10px" }}><center>Strategic Goals</center></h3>
      
      <Box mb={-4.5}>
        <UBTextArea
          question="1. List the strategic goals for the period under review and indicate the progress of each goal."
          SetAnswer={(e) => dispatch(setStrategicGoals({ strategicGoalsUnderReview: e.target.value }))}
          value={annualNonReport.strategicGoals.strategicGoalsUnderReview}
        />
      </Box>
      
      <Box mb={-4.5}>
        <UBTextArea
          question="2. What challenges did your faculty encounter in pursuing these goals? How were these challenges addressed? This may include risk and assumptions identified in the Annual Implementation plan."
          SetAnswer={(e) => dispatch(setStrategicGoals({ implmentationPlans: e.target.value }))}
          value={annualNonReport.strategicGoals.implmentationPlans}
        />
      </Box>
      
      <Box mb={-4.5}>
        <UBTextArea
          question="3. What are your plans to achieve the goals/actions that were not achieved the year under review?"
          SetAnswer={(e) => dispatch(setStrategicGoals({ plansToAchieveNotCompletedGoals: e.target.value }))}
          value={annualNonReport.strategicGoals.plansToAchieveNotCompletedGoals}
        />
      </Box>
      
      <Box mb={-4.5}>
        <UBTextArea
          question="4. List your strategic goals for the upcoming academic year."
          SetAnswer={(e) => dispatch(setStrategicGoals({ strategicGoals: e.target.value }))}
          value={annualNonReport.strategicGoals.strategicGoals}
        />
      </Box>
    </Container>
  );
};

export default UBStrategicGoals;

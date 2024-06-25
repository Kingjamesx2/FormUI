import React from "react";
import { Container } from "@mui/material";
// import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { UBStrategicGoals } from "./UBStrategicGoals";
import { UBAccomplishments } from "./UBAccomplishments";
import { UBresearch } from "./UBResearch";
import { UBPaper } from "../../../../common/UBPaper/UBPaper";

export const AnnualAcademicReportStep2 = () => {
  return (
    <Container>
      <UBPaper>
        <UBStrategicGoals />
        <UBAccomplishments />
        <UBresearch />
      </UBPaper>
    </Container>
  );
};

export default AnnualAcademicReportStep2;

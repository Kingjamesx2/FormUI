import React from "react";
import { Container } from "@mui/material";
// import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { UBStrategicGoals } from "./UBStrategicGoals";
import { UBAccomplishments } from "./UBAccomplishments";
import { UBresearch } from "./UBResearch";


export const AnnualAcademicReportStep2 = () => {
  const question = "";
  const handleSetAnswer = () => {};

  return (
    <Container>
      <UBStrategicGoals />
      <UBAccomplishments />
      <UBresearch />
    </Container>
  );
};

export default AnnualAcademicReportStep2;

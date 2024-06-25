import React from "react";
import { Container } from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { UBStudentIntership } from "./UBStudentIntership";
import { UBDegreesConferred } from "./UBDegreesConferred";
import { UBStudentSuccess } from "./UBStudentSuccess";
import { UBActivitiesForTheYear } from "./UBActivitiesForTheYear";
import { UBPaper } from "../../../../common/UBPaper/UBPaper";

export const AnnualAcademicReportStep4 = () => {
  const question = "";
  const handleSetAnswer = () => {};

  return (
    <Container>
      <UBPaper>
        <UBStudentIntership />
        <UBDegreesConferred />
        <UBStudentSuccess />
        <UBActivitiesForTheYear />
      </UBPaper>
    </Container>
  );
};

export default AnnualAcademicReportStep4;

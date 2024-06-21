import React from "react";
import { Container } from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { UBStudentIntership } from "./UBStudentIntership";
import { UBDegreesConferred } from "./UBDegreesConferred";
import { UBStudentSuccess } from "./UBStudentSuccess";
import { UBActivitiesForTheYear } from "./UBActivitiesForTheYear";


export const AnnualAcademicReportStep4 = () => {
  const question = "";
  const handleSetAnswer = () => {};

  return (
    <Container>
      <UBStudentIntership />
      <UBDegreesConferred/>
      <UBStudentSuccess />
      <UBActivitiesForTheYear/>
    </Container>
  );
};

export default AnnualAcademicReportStep4;

import React from "react";
import { Container } from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { UBAdministrativeDepartmentData } from "./UBAdministrativeDepartmentData";
import { UBFinancial } from "./UBFinancial";
import { UBFacultyMeetings } from "./UBFacultyMeetings";
import { UBOtherComponents } from "./UBOtherComponents";

export const AnnualAcademicReportStep5 = () => {
  const question = "";
  const handleSetAnswer = () => {};

  return (
    <Container>
      <UBAdministrativeDepartmentData />
      <UBFinancial />
      <UBFacultyMeetings />
      <UBOtherComponents />
    </Container>
  );
};

export default AnnualAcademicReportStep5;

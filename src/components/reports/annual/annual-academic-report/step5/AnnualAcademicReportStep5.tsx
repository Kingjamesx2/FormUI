import React from "react";
import { Container } from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { UBAdministrativeDepartmentData } from "./UBAdministrativeDepartmentData";
import { UBFinancial } from "./UBFinancial";
import { UBFacultyMeetings } from "./UBFacultyMeetings";
import { UBOtherComponents } from "./UBOtherComponents";
import { UBPaper } from "../../../../common/UBPaper/UBPaper";

export const AnnualAcademicReportStep5 = () => {

  return (
    <Container>
      <UBPaper>
        <UBAdministrativeDepartmentData />
        <UBFinancial />
        <UBFacultyMeetings />
        <UBOtherComponents />
      </UBPaper>
    </Container>
  );
};

export default AnnualAcademicReportStep5;

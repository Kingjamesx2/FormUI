import React from "react";
import { Container } from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { UBRevisedAcademicPrograms } from "./UBRevisedAcademicPrograms";
import { UBCourses } from "./UBCourses";
import { UBEliminatedAcademicPrograms } from "./UBEliminatedAcademicPrograms";
import { UBRetentionOfStudents} from "./UBRetentionOfStudents"

export const AnnualAcademicReportStep2 = () => {
  const question = "";
  const handleSetAnswer = () => {};

  return (
    <Container>
      < UBRevisedAcademicPrograms />
      < UBCourses />
      < UBEliminatedAcademicPrograms />
      < UBRetentionOfStudents />
    </Container>
  );
};

export default AnnualAcademicReportStep2;

import React from "react";
import { Container } from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { UBRevisedAcademicPrograms } from "./UBRevisedAcademicPrograms";
import { UBCourses } from "./UBCourses";
import { UBEliminatedAcademicPrograms } from "./UBEliminatedAcademicPrograms";
import { UBRetentionOfStudents } from "./UBRetentionOfStudents";
import { UBPaper } from "../../../../common/UBPaper/UBPaper";

export const AnnualAcademicReportStep2 = () => {
  const question = "";
  const handleSetAnswer = () => {};

  return (
    <Container>
      <UBPaper>
        <UBRevisedAcademicPrograms />
        <UBCourses />
        <UBEliminatedAcademicPrograms />
        <UBRetentionOfStudents />
      </UBPaper>
    </Container>
  );
};

export default AnnualAcademicReportStep2;

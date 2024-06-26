import { Container } from "@mui/material";
import { UBRevisedAcademicPrograms } from "./UBRevisedAcademicPrograms";
import { UBCourses } from "./UBCourses";
import { UBEliminatedAcademicPrograms } from "./UBEliminatedAcademicPrograms";
import { UBRetentionOfStudents } from "./UBRetentionOfStudents";

export const AnnualAcademicReportStep3 = () => {
  return (
    <Container>
        <UBRevisedAcademicPrograms />
        <UBCourses />
        <UBEliminatedAcademicPrograms />
        <UBRetentionOfStudents />
    </Container>
  );
};

export default AnnualAcademicReportStep3;

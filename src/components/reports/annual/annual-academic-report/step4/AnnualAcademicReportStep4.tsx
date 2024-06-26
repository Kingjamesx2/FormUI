import { Container } from "@mui/material";
import { UBStudentIntership } from "./UBStudentIntership";
import { UBDegreesConferred } from "./UBDegreesConferred";
import { UBStudentSuccess } from "./UBStudentSuccess";
import { UBActivitiesForTheYear } from "./UBActivitiesForTheYear";

export const AnnualAcademicReportStep4 = () => {
  return (
    <Container>
      <UBStudentIntership />
      <UBDegreesConferred />
      <UBStudentSuccess />
      <UBActivitiesForTheYear />
    </Container>
  );
};

export default AnnualAcademicReportStep4;

import { Container } from "@mui/material";
// import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { UBStrategicGoals } from "./UBStrategicGoals";
import { UBAccomplishments } from "./UBAccomplishments";
import { UBresearch } from "./UBResearch";

export const AnnualAcademicReportStep2 = () => {
  return (
    <Container>
        <UBStrategicGoals />
        <UBAccomplishments />
        <UBresearch />
    </Container>
  );
};

export default AnnualAcademicReportStep2;

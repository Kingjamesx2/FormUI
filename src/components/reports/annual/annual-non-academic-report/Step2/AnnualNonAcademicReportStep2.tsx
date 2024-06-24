import React from "react";
import { Container } from "@mui/material";
import { UBStrategicGoals } from "./UBStrategicGoals";
import { UBAccomplishments } from "../../annual-academic-report/step2/UBAccomplishments";

export const AnnualNonAcademicReportStep2: React.FC = () => {
    return (
        <Container >
           < UBStrategicGoals />
           < UBAccomplishments />
        </Container>
    )
}

export default AnnualNonAcademicReportStep2;
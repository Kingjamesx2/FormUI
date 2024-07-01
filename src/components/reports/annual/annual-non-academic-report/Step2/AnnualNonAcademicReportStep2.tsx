import React from "react";
import { Container } from "@mui/material";
import { UBStrategicGoals } from "./UBStrategicGoals";
import { UBAccomplishmentsForReportingPeriod } from "../../annual-non-academic-report/Step2/UBAccomplishmentsForReportingPeriod"

export const AnnualNonAcademicReportStep2: React.FC = () => {
    return (
        <Container >
           < UBStrategicGoals />
           < UBAccomplishmentsForReportingPeriod />
        </Container>
    )
}

export default AnnualNonAcademicReportStep2;
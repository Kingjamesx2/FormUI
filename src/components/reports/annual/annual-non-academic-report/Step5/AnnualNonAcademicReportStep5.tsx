import React from "react";
import Container from "@mui/material/Container";
import { UBFacultyMeetings } from "./UBDivisionMeeting";
import UBFinancial from "./UBFinancial";
import UBOtherComponents from "./UBOtherComponents";

export const AnnualNonAcademicReportStep5: React.FC = () => {
    return(
        <Container>
            <UBFacultyMeetings />
            <UBFinancial />
            <UBOtherComponents />
        </Container>
    )
}

export default AnnualNonAcademicReportStep5;
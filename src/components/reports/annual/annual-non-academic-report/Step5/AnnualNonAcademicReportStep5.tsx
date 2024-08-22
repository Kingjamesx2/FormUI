import React from "react";
import Container from "@mui/material/Container";
import { UBDivisionMeeting } from "./UBDivisionMeeting";
import UBFinancial from "./UBFinancial";
import UBOtherComponents from "./UBOtherComponents";

export const AnnualNonAcademicReportStep5: React.FC = () => {
    return(
        <Container>
            <UBDivisionMeeting />
            <UBFinancial />
            <UBOtherComponents />
        </Container>
    )
}

export default AnnualNonAcademicReportStep5;
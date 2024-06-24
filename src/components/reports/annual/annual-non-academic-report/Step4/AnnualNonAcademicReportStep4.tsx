import React from "react";
import Container from "@mui/material/Container";
import UBActivitiesForTheYear from "./UBActivitiesForTheYear";
import UBAdministrativeDepartmentData from "./UBAdministrativeDepartmentData";

export const AnnualNonAcademicReportStep4: React.FC = () => {
    return (
       <Container >
            < UBActivitiesForTheYear/>
            < UBAdministrativeDepartmentData/>
       </Container>
    )
}
 
export default AnnualNonAcademicReportStep4;
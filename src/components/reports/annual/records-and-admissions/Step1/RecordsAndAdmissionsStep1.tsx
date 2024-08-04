import React from "react";
import { Container } from "@mui/material";
import AcademicYear from "./UBAcademicYear";
import StudentsEnrolled from "./UBStudentsEnrolled";
import StudentsEnrollmentTrend from "./UBStudentsEnrollmentTrend";

export const RecordsAndAdmissionsStep1: React.FC = () => {
    return (
        <Container>
            <AcademicYear />
            <StudentsEnrolled />
            <StudentsEnrollmentTrend />
        </Container>
    )
}

export default RecordsAndAdmissionsStep1;
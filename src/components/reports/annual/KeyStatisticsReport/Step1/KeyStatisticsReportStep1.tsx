import React from "react";
import { Container } from "@mui/material";
import AcademicYear from "./RecordsAndAdmissions/UBAcademicYear";
import StudentsEnrolled from "./RecordsAndAdmissions/UBStudentsEnrolled";
import StudentsEnrollmentTrend from "./RecordsAndAdmissions/UBStudentsEnrollmentTrend";

export const KeyStatisticsReportStep1: React.FC = () => {
    return (
        <Container>
            <AcademicYear />
            <StudentsEnrolled />
            <StudentsEnrollmentTrend />
        </Container>
    )
}
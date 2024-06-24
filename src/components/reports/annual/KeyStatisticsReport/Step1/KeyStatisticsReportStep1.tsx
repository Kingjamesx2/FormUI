import React from "react";
import { Container } from "@mui/material";
import AcademicYear from "./RecordsAndAdmissions/AcademicYear";
import StudentsEnrolled from "./RecordsAndAdmissions/StudentsEnrolled";
import StudentsEnrollmentTrend from "./RecordsAndAdmissions/StudentsEnrollmentTrend";

export const KeyStatisticsReportStep1: React.FC = () => {
    return (
        <Container>
            <AcademicYear />
            <StudentsEnrolled />
            <StudentsEnrollmentTrend />
        </Container>
    )
}
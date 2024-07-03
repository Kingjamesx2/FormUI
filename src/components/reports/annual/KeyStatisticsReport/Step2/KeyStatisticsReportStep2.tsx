import React from "react";
import { Container } from "@mui/material";
import CampusStatistics from "./RecordsAndAdmissionsStep2/UBCampusStatistics"
import GraduationStatistics from "./RecordsAndAdmissionsStep2/UBGraduationStatistics";
import OriginOfStudents from "./RecordsAndAdmissionsStep2/UBOriginOfStudents";
import StudentsEnrollmentTrendPerFaculty from "./RecordsAndAdmissionsStep2/UBStudentEnrollmentTrendPerFaculty";

export const KeyStatisticsReportStep2: React.FC = () => {
    return (
        <Container>
            <StudentsEnrollmentTrendPerFaculty />
            <GraduationStatistics />
            <OriginOfStudents/>
            <CampusStatistics />
        </Container>
    )
}
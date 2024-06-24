import React from "react";
import { Container } from "@mui/material";
import CampusStatistics from "./RecordsAndAdmissionsStep2/CampusStatistics"
import GraduationStatistics from "./RecordsAndAdmissionsStep2/GraduationStatistics";
import OriginOfStudents from "./RecordsAndAdmissionsStep2/OriginOfStudents";
import StudentsEnrollmentTrendPerFaculty from "./RecordsAndAdmissionsStep2/StudentEnrollmentTrendPerFaculty";

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
import React from "react";
import { Container } from "@mui/material";
import CampusStatistics from "./UBCampusStatistics"
import GraduationStatistics from "./UBGraduationStatistics";
import OriginOfStudents from "./UBOriginOfStudents";
import StudentsEnrollmentTrendPerFaculty from "./UBStudentEnrollmentTrendPerFaculty";
import UBGraduatesByAgeAndDistrict from "./UBGraduatesByAgeAndDistrict";

export const RecordsAndAdmissionsStep2: React.FC = () => {
    return (
        <Container>
            <StudentsEnrollmentTrendPerFaculty />
            <GraduationStatistics />
            <OriginOfStudents />
            <CampusStatistics />
            <UBGraduatesByAgeAndDistrict/>
        </Container>
    )
}

export default RecordsAndAdmissionsStep2;
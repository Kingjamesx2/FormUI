import React from "react";
import Container from "@mui/material/Container";
import { Faculty } from "./Faculty";
import { FacultyMissionStatement } from "./FacultyMissionStatement";

export const AnnualAcademicReportStep1: React.FC = () => {
  
  return (
      <Container> 
          <Faculty />          
          <FacultyMissionStatement />
      </Container>
  );
};

export default AnnualAcademicReportStep1;

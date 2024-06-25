import React from "react";
import Container from "@mui/material/Container";
import { Faculty } from "./Faculty";
import { FacultyMissionStatement } from "./FacultyMissionStatement";
import { UBPaper } from "../../../../common/UBPaper/UBPaper";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export const AnnualAcademicReportStep1: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Container maxWidth="lg" sx={{ padding: isSmallScreen ? '8px' : '16px' }}>
        <UBPaper>
          <Faculty />
          <FacultyMissionStatement />
        </UBPaper>
      </Container>
    </div>
  );
};

export default AnnualAcademicReportStep1;

import React, { useState } from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
// import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import {
  setDivision,
  setReportsTo,
  setMissionStatement,
} from "../../../../../store/features/annualNonReportSlice";
import { selectAnnualNonReport } from "../../../../../store/features/annualNonReportSlice";



export const AnnualNonAcademicReportStep1: React.FC = () => {
  const dispatch = useDispatch();
 
  const annualNonReport = useSelector(selectAnnualNonReport)
  const [summary, setSummary] = useState<string>(
    "The annual report provides a comprehensive summary of the University’s activities for the academic year, which is from August to July. The specific outputs/outcomes are based on the Annual Implementation Plan for the period under review."
  );
  const [academicYear, setAcademicYear] = useState<string>(
    "Academic Year: 2023-2024"
  );

  return (
    <Container>
      <Box>
        <Box
          sx={{
            ml: "15%",
            mt: "10%",
            p: "2%",
            width: "66%",
            backgroundColor: "#FFD954",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          {summary}
        </Box>
        <Box
          sx={{
            ml: "15%",
            mt: "-1%",
            p: "2%",
            width: "66%",
            backgroundColor: "#FFD954",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>{academicYear}</Typography>
        </Box>
        <Box
          sx={{
            width: "70%",
            marginTop: "-2px",
            marginLeft: "15%",
            paddingBottom: "2%",
            paddingTop: "3%",
            backgroundColor: "#FFD954",
            borderBottomLeftRadius: "none",
            borderBottomRightRadius: "none",
          }}
        >
          <UbDropdown
            label="Division (Department, Centres/Institute)"
            options={[
              { value: "ICT", label: "ICT" },
              { value: "Student Affairs", label: "Student Affairs" },
              { value: "Library", label: "Library" },
              { value: "Quality Assurance", label: "Quality Assurance" },
            ]}
            SetAnswer={(e) => dispatch(setDivision(e.target.value as string))}
            value={annualNonReport.division}
         
          />
        </Box>
        <Box
          sx={{
            width: "70%",
            marginTop: "-2px",
            marginLeft: "15%",
            paddingBottom: "2%",
            paddingTop: "3%",
            backgroundColor: "#FFD954",
            borderBottomLeftRadius: "none",
            borderBottomRightRadius: "none",
          }}
        >
          <UbDropdown
            label="Reports To:"
            options={[
              { value: "FEA", label: "Faculty of Education and Arts" },
              {
                value: "FMSS",
                label: "Faculty of Management and Social Sciences",
              },
              { value: "FHS", label: "Faculty of Health Sciences" },
              { value: "FST", label: "Faculty of Science & Technology" },
            ]}
            SetAnswer={(e) => dispatch(setReportsTo(e.target.value as string))}
            value={annualNonReport.reportsTo}
          />
        </Box>
      </Box>

      <Box sx={{ mt: "-50px", mb: "40px" }}>
        <UBTextArea
          question="State your Mission Statement"
          SetAnswer={(e) => dispatch(setMissionStatement(e.target.value))}
          value={annualNonReport.missionStatement}
        />
      </Box>
    </Container>
  );
};

export default AnnualNonAcademicReportStep1;

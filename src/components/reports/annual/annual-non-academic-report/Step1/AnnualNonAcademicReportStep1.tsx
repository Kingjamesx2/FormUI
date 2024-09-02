import React, { useState } from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
// import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import {
  setDepartment,
  setReportsTo,
  setMissionStatement,
  selectAnnualNonReport,
} from "../../../../../store/features/annualNonReportSlice";

export const AnnualNonAcademicReportStep1: React.FC = () => {
  const dispatch = useDispatch();

  const annualNonReport = useSelector(selectAnnualNonReport);
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
              {
                value: "Registrar/Admissions ",
                label: "Registrar/Admissions ",
              },
              {
                value: "Quality Assurance Office",
                label: "Quality Assurance Office",
              },
              { value: "Student Affairs ", label: "Student Affairs " },
              {
                value: "Environmental Research Institute (ERI) ",
                label: "Environmental Research Institute (ERI) ",
              },
              {
                value: "Open and Distance Learning (ODL)",
                label: "Open and Distance Learning (ODL)",
              },
              {
                value: "Campus Administrator, Punta Gorda",
                label: "Campus Administrator, Punta Gorda",
              },
              { value: "Chief Librarian", label: "Chief Librarian" },
              {
                value: "Director, Central Farm Agriculture",
                label: "Director, Central Farm Agriculture",
              },
              {
                value: "Regional Language Center",
                label: "Regional Language Center",
              },
              {
                value: "Marketing & Communications Department",
                label: "Marketing & Communications Department",
              },
              {
                value: "Director, Office of Human Resources ",
                label: "Director, Office of Human Resources ",
              },
              {
                value: "Director, Office of Finance",
                label: "Director, Office of Finance",
              },
              { value: "Chief Public Safety", label: "Chief Public Safety" },
              {
                value: "Director of Physical Plant",
                label: "Director of Physical Plant",
              },
              {
                value:
                  "Director, Information, Communication and Technology Department",
                label:
                  "Director, Information, Communication and Technology Department",
              },
              {
                value: "Director, Research Office",
                label: "Director, Research Office",
              },
              {
                value: "Coordinator of Intercultural Indigenous Language Institute",
                label: "Coordinator of Intercultural Indigenous Language Institute",
              },
              {
                value: "Coordinator, Institute of Banking & Finance",
                label: "Coordinator, Institute of Banking & Finance",
              },
              {
                value: "Director, Institutional Advancement",
                label: "Director, Institutional Advancement",
              },
            ]}
            SetAnswer={(e) => dispatch(setDepartment(e.target.value as string))}
            value={annualNonReport.department}
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

import React, { useState} from "react";
import { Container } from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { selectAcademicYearID, setAcademicYearID, selectDivision, setDivision, setReportsTo, selectReportsTo, selectMissionStatement, setMissionStatement } from '../../../../../store/features/annualNonReportSlice';

const initialState = ["", "", "", ""];

export const AnnualNonAcademicReportStep1: React.FC = () => {
  const dispatch = useDispatch();
  const academicYearID = useSelector(selectAcademicYearID);
  const division = useSelector(selectDivision);
  const reportsTo = useSelector(selectReportsTo);
  const missionStatement = useSelector(selectMissionStatement);

  const [summary, setSummary] = useState<string>("The annual report provides a comprehensive summary of the University’s activities for the academic year, which is from August to July. The specific outputs/outcomes are based on the Annual Implementation Plan for the period under review.");

  return (
    <Container>
      <Box>
        <Box sx={{ ml: "15%", mt: "10%", p: "2%", width: "66%", backgroundColor: "#FFD954", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}>
          {summary}
        </Box>
        <Box sx={{ width: "70%", marginTop: "-2px", marginLeft: "15%", paddingBottom: "2%", paddingTop: "3%", backgroundColor: "#FFD954", borderBottomLeftRadius: "none", borderBottomRightRadius: "none" }}>
          <UbDropdown
            label="Division (Department, Centres/Institute)"
            options={[
              { value: "ICT", label: "ICT" },
              { value: "Student Affairs", label: "Student Affairs" },
              { value: "Library", label: "Library" },
              { value: "Quality Assurance", label: "Quality Assurance" },
            ]}
            SetAnswer={(e) => dispatch(setDivision(e.target.value as string))}
            value={division}
          />
        </Box>
        <Box sx={{ width: "70%", marginTop: "-2px", marginLeft: "15%", paddingBottom: "2%", paddingTop: "3%", backgroundColor: "#FFD954", borderBottomLeftRadius: "none", borderBottomRightRadius: "none" }}>
          <UbDropdown
            label="Reports To:"
            options={[
              { value: "FEA", label: "Faculty of Education and Arts" },
              { value: "FMSS", label: "Faculty of Management and Social Sciences"},
              { value: "FHS", label: "Faculty of Health Sciences"},
              { value: "FST", label: "Faculty of Science & Technology"},
            ]}
            SetAnswer={(e) => dispatch(setReportsTo(e.target.value as string))}
            value={reportsTo}
          />
        </Box>
      </Box>
      <Box sx={{ mt: "-4%", mb: "4%", width: "98.6%", ml: "0.7%" }}>
        <UBTextField
          question="Academic Year"
          SetAnswer={(e) => dispatch(setAcademicYearID(e.target.value))}
          value={academicYearID}
        />
      </Box>

      <Box sx={{ mt: "-50px", mb: "40px" }}>
        <UBTextArea
          question="State your Mission Statement"
          SetAnswer={(e) => dispatch(setMissionStatement(e.target.value))}
          value={missionStatement}
        />
      </Box>
    </Container>
  );
};

export default AnnualNonAcademicReportStep1;

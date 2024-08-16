import React, { useState, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";
import {  setDepartment, setDepartmentHead, selectRecordReport } from '../../../../../store/features/recordsReportSlice'

export const UBAcademicYear: React.FC = () => {
  const dispatch = useDispatch()
  const recordReport = useSelector(selectRecordReport)

  const [submissionDeadline, setSubmissionDeadline] = useState<string>(
    "Submission Deadline: Please return completed form to the Office of The Vice President by August 1, 2022"
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
            width: "68%",
            backgroundColor: "#FFD954",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>{academicYear}</Typography>
        </Box>

        <Box sx={{ color: "red", display: "flex", justifyContent: "left", width: "70%", ml: "15%", mt: "-3%", pb: "2%", pt: "3%", pl: "2%", backgroundColor: "#FFD954", borderRadius: "0 0 5px 5px" }}>
          {submissionDeadline}
        </Box>
      </Box>

      <Box sx={{width:"101.4%", ml: "0.29%", mb: "-2%", mt: "-3%"}}>
        <UBTextField
          question="Office/Department"
          SetAnswer={(e) => dispatch(setDepartment(e.target.value as string))}
          value={recordReport.department}
        />
      </Box>
    </Container>
  );
};

export default UBAcademicYear;

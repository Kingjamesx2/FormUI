import React, { useState, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";
import UbDropdown from "../../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";
import { selectAcademicYearID, setAcademicYearID, selectDepartment, setDepartment, selectDepartmentHead, setDepartmentHead } from '../../../../../../store/features/KeyStatisticsreportSlice/recordsReportSlice'

export const UBAcademicYear: React.FC = () => {
  const dispatch = useDispatch()
  const academicYear = useSelector(selectAcademicYearID)
  const department = useSelector(selectDepartment)
  const departmentHead = useSelector(selectDepartmentHead)

  const [submissionDeadline, setSubmissionDeadline] = useState<string>(
    "Submission Deadline: Please return completed form to the Office of The Vice President by August 1, 2022"
  );

  return (
    <Container>
      <Box>
        <Box sx={{ ml: "15%", mt: "7%", mb: "2%", pb: "2%", pt: "3%", width: "72%", backgroundColor: "#FFD954", borderRadius: "5px 5px 0 0" }}>
          <UbDropdown
            label="Academic Year"
            options={[
              { value: "2021/2022", label: "2021/2022" },
              { value: "2022/2023", label: "2022/2023" },
              { value: "2023/2024", label: "2023/2024" }
            ]}
            SetAnswer={(e) => dispatch(setAcademicYearID(e.target.value as string))}
            value={academicYear}
          />
        </Box>

        <Box sx={{ color: "red", display: "flex", justifyContent: "left", width: "70%", ml: "15%", mt: "-3%", pb: "2%", pt: "3%", pl: "2%", backgroundColor: "#FFD954", borderRadius: "0 0 5px 5px" }}>
          {submissionDeadline}
        </Box>
      </Box>

      <Box sx={{width:"101.5%", ml: "0.29%", mb: "-2%", mt: "-3%"}}>
        <UBTextField
          question="Office/Department"
          SetAnswer={(e) => dispatch(setDepartment(e.target.value as string))}
          value={department}
        />
      </Box>

      <Box sx={{width:"101.5%", ml: "0.29%", mb: "-%", mt: "-5%"}}>
      <UBTextField
        question="Office/Department Head"
        SetAnswer={(e) => dispatch(setDepartmentHead(e.target.value as string))}
        value={departmentHead}
      />
      </Box>
    </Container>
  );
};

export default UBAcademicYear;

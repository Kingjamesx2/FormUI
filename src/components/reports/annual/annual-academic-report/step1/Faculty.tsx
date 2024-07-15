import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { useSelector, useDispatch } from 'react-redux';
import { setAcademicYearID, selectAcademicYearID, setDepartmentList, selectDepartmentList, setFaculty, selectFaculty, setDean, selectDean } from '../../../../../store/features/annualReportSlice';

export const Faculty = () => {
  const dispatch = useDispatch();
  const academicYearID = useSelector(selectAcademicYearID);
  const departmentList = useSelector(selectDepartmentList);
  const faculty = useSelector(selectFaculty);
  const dean = useSelector(selectDean);

  const [summary, setSummary] = useState<string>("The annual report provides a comprehensive summary of the University’s activities for the academic year, which is from August to July. The specific outputs/outcomes are based on the Annual Implementation Plan for the period under review.");

  return (
    <Container>
      <Box>
        <Box sx={{ ml: "15%", mt: "10%", p: "2%", width: "66%", backgroundColor: "#FFD954", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}>
          {summary}
        </Box>
        <Box sx={{ width: "70%", marginTop: "-2px", marginLeft: "15%", paddingBottom: "2%", paddingTop: "3%", backgroundColor: "#FFD954", borderBottomLeftRadius: "none", borderBottomRightRadius: "none" }}>
          <UbDropdown
            label="Faculty"
            options={[
              { value: "FEA", label: "Faculty of Education and Arts" },
              { value: "FMSS", label: "Faculty of Management and Social Sciences" },
              { value: "FHS", label: "Faculty of Health Sciences" },
              { value: "FST", label: "Faculty of Science & Technology" },
            ]}
            SetAnswer={(e) => dispatch(setFaculty(e.target.value as string))}
            value={faculty}
          />
        </Box>
        <Box sx={{ width: "70%", marginTop: "-2px", marginLeft: "15%", paddingBottom: "2%", paddingTop: "3%", backgroundColor: "#FFD954", borderBottomLeftRadius: "none", borderBottomRightRadius: "none" }}>
          <UbDropdown
            label="Dean"
            options={[
              { value: "Dr Nadine Tun", label: "Dr Nadine Tun" },
              { value: "Dr Somanandevi Thiagarajan", label: "Dr Somanandevi Thiagarajan" },
              { value: "Dr Lisa Johnson", label: "Dr Lisa Johnson" },
              { value: "Dr Apolonio Aguilar", label: "Dr Apolonio Aguilar" },
            ]}
            SetAnswer={(e) => dispatch(setDean(e.target.value as string))}
            value={dean}
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
      <Box sx={{ mt: "-11%", mb: "4%" }}>
        <UBTextArea
          question="List all units/departments/centres/institutes within the Faculty"
          SetAnswer={(e) => dispatch(setDepartmentList(e.target.value as string))}
          value={departmentList}
        />
      </Box>
    </Container>
  );
};

export default Faculty;

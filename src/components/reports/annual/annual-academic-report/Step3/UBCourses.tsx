import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
// import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { useSelector, useDispatch } from "react-redux";
import { selectAnnualReport, setCourses } from "../../../../../store/features/annualReportSlice";

// const initialState = ["", "", ""];

export const UBCourses: React.FC = () => {
  const dispatch = useDispatch();
  const annualReport = useSelector(selectAnnualReport)

  // const [state, setState] = useState<string[]>(initialState);

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginTop: "60px", marginBottom: "10px" }}><center>Courses</center></h3>
      <Box mb={"-5.4%"}>
        <UBTextField
          question="1. Total number of new courses added to the Faculty"
          SetAnswer={(e) => dispatch(setCourses({ totalNewCourses: e.target.value }))}
          value={annualReport.courses.totalNewCourses}
          type="number"
          />
      </Box>
      <Box mb={"-5.4%"}>
        <UBTextField
          question="2. Number of courses offered through online"
          SetAnswer={(e) => dispatch(setCourses({ totalCoursesOnline: e.target.value }))}
          value={annualReport.courses.totalCoursesOnline}
          type="number"
        />
      </Box>
      <Box mb={"-5.4%"}>
        <UBTextField
          question="3. Number of courses offered through face to face"
          SetAnswer={(e) => dispatch(setCourses({ totalCourseFaceToFace: e.target.value }))}
          value={annualReport.courses.totalCourseFaceToFace}
          type="number"
        />
      </Box>
    </Container>
  );
};

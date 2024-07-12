import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { useSelector, useDispatch } from "react-redux";
import { selectCourse, setCourse } from "../../../../../store/features/annualReportSlice";

const initialState = ["", "", ""];

export const UBCourses: React.FC = () => {
  const dispatch = useDispatch();
  const courses = useSelector(selectCourse);

  const [state, setState] = useState<string[]>(initialState);

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginTop: "60px", marginBottom: "10px" }}><center>Courses</center></h3>
      <Box mb={"-5.4%"}>
        <UBTextField
          question="1. Total number of new courses added to the Faculty"
          SetAnswer={(e) => dispatch(setCourse({ totalNewCourses: e.target.value }))}
          value={courses.totalNewCourses}
        />
      </Box>
      <Box mb={"-5.4%"}>
        <UBTextField
          question="2. Number of courses offered through online"
          SetAnswer={(e) => dispatch(setCourse({ totalCoursesOnline: e.target.value }))}
          value={courses.totalCoursesOnline}
        />
      </Box>
      <Box mb={"-5.4%"}>
        <UBTextField
          question="3. Number of courses offered through face to face"
          SetAnswer={(e) => dispatch(setCourse({ totalCourseFaceToFace: e.target.value }))}
          value={courses.totalCourseFaceToFace}
        />
      </Box>
    </Container>
  );
};

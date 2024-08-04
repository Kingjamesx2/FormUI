import React from "react";
import { Container } from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { useSelector, useDispatch } from "react-redux";
import { setStudentInternships, selectAnnualReport } from "../../../../../store/features/annualReportSlice";

// const initialState = [""];

export const UBStudentIntership: React.FC = () => {
  const dispatch = useDispatch();
  const annualReport = useSelector(selectAnnualReport)
  // const [state, setState] = useState<string[]>(initialState);

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginBottom: "-3%" }}><center>Student Internship</center></h3>
      <UBTextArea
        question="1. List internships that the Faculty offers and indicate partnership agencies/organizations."
        SetAnswer={(e) => dispatch(setStudentInternships(e.target.value))}
        value={annualReport.studentInternships}
        />
    </Container>
  );
};

export default UBStudentIntership;

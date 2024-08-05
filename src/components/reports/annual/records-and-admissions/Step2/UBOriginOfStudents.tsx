import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setStudentOrigin } from "../../../../../store/features/recordsReportSlice";
import { Container, Box } from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import UBInfoTable from "../../../../common/UBInfoTable/UBInfoTable";

const initialState = ["", "", ""];

const columns = ['5. Origin of Students(Number)', ''];
const initialRows = [
  { degree: 'Belize', '': ''},
  { degree: 'Central American Countries', '': ''},
  { degree: 'Other Countries', '': ''},
];

export const UBOriginOfStudents: React.FC = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState<string[]>(initialState);
  const [enrollmentTrend, setEnrollmentTrend] = useState<string>("");

  const questions = [
    {
      question: "2. Student Enrolment Trend (Academic Level)",
      handleSetAnswer: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState((prevState) => [prevState[0], prevState[1], value]);      },
      type: "table",
      value: state[0],
    },
  ];

  const handleSetValue = (value: any) => {
    let _newValues = { Belize: 0, CentralAmericanCountries: 0, OtherCountries: 0}

    value.forEach(r => {
      const _v = Object.values(r)[1] as number
      if (r.degree === 'Belize') _newValues.Belize = _v
      if (r.degree === 'Central American Countries') _newValues.CentralAmericanCountries = _v 
      if (r.degree === 'Other Countries') _newValues.OtherCountries = _v
    })
    
    dispatch(setStudentOrigin(_newValues))
  }

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      {/* <h3><center>I. Records and Admissions</center></h3> */}
      {questions.map((q, index) => {
        if (q.type === "textarea") {
          return (
            <UBTextArea
              key={index}
              question={q.question}
              SetAnswer={q.handleSetAnswer}
              value={q.value}
            />
          );
        } else if (q.type === "dropdown") {
          return (
            <UbDropdown
              key={index}
              label={q.question}
              options={q.options}
              handleSetValue={q.handleSetAnswer}
              value={q.value}
            />
          );
        } else if (q.type === "table") {
          return (
            <UBInfoTable
              key={index}
              columns={columns}
              initialRows={initialRows}
              SetValue={handleSetValue}
            />
          );
        } else if (q.type === "input") {
          return (
            <UBTextField
              key={index}
              question={q.question}
              SetAnswer={q.handleSetAnswer}
              value={q.value}
            />
          );
        }
        return null;
      })}
    </Container>
  );
};

export default UBOriginOfStudents;

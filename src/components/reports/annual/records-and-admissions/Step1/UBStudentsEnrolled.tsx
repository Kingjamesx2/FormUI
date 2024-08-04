import React, { useState, ChangeEvent } from "react";
import { Container, Box } from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import UBInfoTable from "../../../../common/UBInfoTable/UBInfoTable";
import { useSelector, useDispatch } from "react-redux";
const initialState = ["", "", ""];


const columns = ['1. Students Enrolment for the Academic Year under review', ''];
const initialRows = [
  { degree: 'Associates', '': ''},
  { degree: 'Undergraduates', '': ''},
  { degree: 'Graduates', '': ''},
];

export const UBStudentsEnrolled: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);
  const [enrollmentTrend, setEnrollmentTrend] = useState<string>("2. Student Enrolment Trend (Academic Level)");
  const dispatch = useDispatch()
  const recordReport = useSelector(selectRecordReport)




  const questions = [
    {
      question: "",
      handleSetAnswer: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState((prevState) => [prevState[0], prevState[1], value]);
        console.log(value);
      },
      type: "table",
      value: state[0],
    },
  ];

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{marginBottom: "-2%"}}><center>I. Records and Admissions</center></h3>
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

export default UBStudentsEnrolled;

import React, { useState, ChangeEvent } from "react";
import { Container, Box } from "@mui/material";
import { UBTextArea } from "../../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../../common/UBTextField/UBTextField";
import UBInfoTable from "../../../../../common/UBInfoTable/UBInfoTable";

const initialState = ["", "", ""];

const columns = ['Degree Program', '2021/2022', '2022/2023', '2023/2024'];
const initialRows = [
  { degree: 'Associates', '2021/2022': '', '2022/2023': '', '2023/2024': '' },
  { degree: 'Undergraduate', '2021/2022': '', '2022/2023': '', '2023/2024': '' },
  { degree: 'Graduate (MBA - 19 + MEDL - 47)', '2021/2022': '', '2022/2023': '', '2023/2024': '' },
  { degree: 'Other', '2021/2022': '', '2022/2023': '', '2023/2024': '' },
];

export const UBStudentsEnrollmentTrend: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);
  const [enrollmentTrend, setEnrollmentTrend] = useState<string>("2. Student Enrolment Trend (Per Faculty)");

  const questions = [
    {
      question: "Student Enrolment Trend (Academic Level)",
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
      <Box sx={{ mt: "3%", width: "68%", ml: "15%", mb: "-5%", pt: "3%", pb:"2%", pl: "2%", backgroundColor: "#FFD954", fontWeight: "bold", borderRadius: "5px 5px 0 0"}}>
        {enrollmentTrend}
      </Box>
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

export default UBStudentsEnrollmentTrend;

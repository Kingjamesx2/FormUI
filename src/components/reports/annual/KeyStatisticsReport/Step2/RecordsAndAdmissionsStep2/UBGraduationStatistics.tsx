import React, { useState, ChangeEvent } from "react";
import { Container, Box, Typography } from "@mui/material";
import { UBTextArea } from "../../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../../common/UBTextField/UBTextField";
import UBInfoTable from "../../../../../common/UBInfoTable/UBInfoTable";

const initialState = ["", "", ""];

const columns = ['Faculty', 'Associates', 'Bachelors', 'Honors'];
const initialRows = [
  { degree: 'Education and Arts', 'Associates': '', 'Bachelors': '', 'Honors': '' },
  { degree: 'Management and Social Science', 'Associates': '', 'Bachelors': '', 'Honors': '' },
  { degree: 'Health Science', 'Associates': '', 'Bachelors': '', 'Honors': '' },
  { degree: 'Science and Technology', 'Associates': '', 'Bachelors': '', 'Honors': '' },
];

export const UBGraduationStatistics: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);
  const [enrollmentTrend, setEnrollmentTrend] = useState<string>("2. Student Enrolment Trend (Per Faculty)");
  const [specify, setSpecify] = useState<string>("*Please specify number of students graduating with honors in Bachelors programs");

  const questions = [
    {
      year: "2021/2022",
      handleSetAnswer: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState((prevState) => [prevState[0], prevState[1], value]);
        console.log(value);
      },
      type: "table",
      value: state[0],
    },
    {
      year: "2022/2023",
      handleSetAnswer: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState((prevState) => [prevState[0], prevState[1], value]);
        console.log(value);
      },
      type: "table",
      value: state[1],
    },
    {
      year: "2023/2024",
      handleSetAnswer: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState((prevState) => [prevState[0], prevState[1], value]);
        console.log(value);
      },
      type: "table",
      value: state[2],
    },
  ];

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      {questions.map((q, index) => {
        if (q.type === "textarea") {
          return (
            <UBTextArea
              key={index}
              question={q.year}
              SetAnswer={q.handleSetAnswer}
              value={q.value}
            />
          );
        } else if (q.type === "dropdown") {
          return (
            <UbDropdown
              key={index}
              label={q.year}
              options={q.options}
              handleSetValue={q.handleSetAnswer}
              value={q.value}
            />
          );
        } else if (q.type === "table") {
          return (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {q.year}
              </Typography>
              <UBInfoTable
                columns={columns}
                initialRows={initialRows}
              />
              <Box>
                {specify}
              </Box>
            </Box>
          );
        } else if (q.type === "input") {
          return (
            <UBTextField
              key={index}
              question={q.year}
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

export default UBGraduationStatistics;

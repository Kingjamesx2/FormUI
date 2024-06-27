import React, { useState, ChangeEvent } from "react";
import { Container } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { UBTextArea } from "../../../../../../components/common/Textarea/UBTextArea"
import UbDropdown from "../../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";

const initialState = ["FST", "", ""];

export const StudentsEnrolled: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);
  const [studentsEnrolled, setStudentsEnrolled] = useState<string>(
    "1. Students Enrolled Academic Year 2023/2024"
  );

  const questions = [
    {
      question: "Associate",
      handleSetAnswer: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState((prevState) => [prevState[0], prevState[1], value]);
        console.log(value);
      },
      type: "input",
      value: state[0],
    },

    {
      question: "Undergraduate",
      handleSetAnswer: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState((prevState) => [prevState[0], prevState[1], value]);
        console.log(value);
      },
      type: "input",
      value: state[1],
    },

    {
      question: "Graduate (please specify)",
      handleSetAnswer: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState((prevState) => [prevState[0], prevState[1], value]);
        console.log(value);
      },
      type: "input",
      value: state[2],
    },
    {
        question: "Total",
        handleSetAnswer: (e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setState((prevState) => [prevState[0], prevState[1], value]);
          console.log(value);
        },
        type: "input",
        value: state[3],
      },
  ];

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h2><center>I. Records and Admissions</center></h2>
      <Box>
        <Box sx={{ mb: 2, p: 1 }}>
          {studentsEnrolled}
        </Box>
        <UbDropdown
          label={questions[0].question}
          options={questions[0].options}
          handleSetValue={questions[0].handleSetAnswer as (e: SelectChangeEvent<string>) => void}
          value={questions[0].value}
        />
      </Box>
      {questions.slice(1).map((q, index) => {
        if (q.type === "textarea") {
          return (
            <UBTextArea
              key={index}
              question={q.question}
              SetAnswer={q.handleSetAnswer as (e: ChangeEvent<HTMLTextAreaElement>) => void}
              value={q.value}
            />
          );
        } else if (q.type === "input") {
          return (
            <UBTextField
              key={index}
              question={q.question}
              SetAnswer={q.handleSetAnswer as (e: ChangeEvent<HTMLInputElement>) => void}
              value={q.value}
            />
          );
        }
      })}
    </Container>
  );
};

export default StudentsEnrolled;

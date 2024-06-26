import React, { useState } from "react";
import { Container } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";

const initialState = ["", ""];

export const UBStudentSuccess = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "a. List Student Clubs",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log(e.target.value);
        setState((prevState) => {
          const newState = [...prevState];
          newState[0] = value;
          return newState;
        });
      },
      type: "textarea",
      value: state[0],
    },
    {
        question: "b. State results of any student surveys at UB, including surveys on student success, student satisfaction, etc.",
        handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          console.log(e.target.value);
          setState((prevState) => {
            const newState = [...prevState];
            newState[1] = value;
            return newState;
          });
        },
        type: "textarea",
        value: state[1],
      },
      {
        question: "c. All new initiatives at UB regarding student success.",
        handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          console.log(e.target.value);
          setState((prevState) => {
            const newState = [...prevState];
            newState[1] = value;
            return newState;
          });
        },
        type: "textarea",
        value: state[1],
      },
  ];

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
    <h3><center>Student Success</center></h3>
    {questions.map((q, index) => (
          <Box key={index} mb={-4.5}>
            {q.type === "textarea" ? (
              <UBTextArea
                question={q.question}
                SetAnswer={q.handleSetAnswer}
                value={q.value}
              />
            ) : q.type === "dropdown" ? (
              <UbDropdown
                label={q.question}
                options={q.options}
                handleSetValue={q.handleSetAnswer}
                value={q.value}
              />
            ) : (
              <UBTextField
                question={q.question}
                SetAnswer={q.handleSetAnswer}
                value={q.value}
              />
            )}
          </Box>
        ))}
  </Container>
  );
};

export default UBStudentSuccess;

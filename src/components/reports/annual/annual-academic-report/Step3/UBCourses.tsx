import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UBPaper from "../../../../common/UBPaper/UBPaper";

const initialState = ["", "", "", "", ""];

export const UBCourses: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "1. Total number of new courses added to the Faculty",
      handleSetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        console.log(e.target.value);
        setState((prevState) => {
          const newState = [...prevState];
          newState[0] = value;
          return newState;
        });
      },
      type: "input",
      value: state[0],
    },
    {
      question: "2. Number of courses offered through online",
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
      question: "3. Number of courses offered through face to face",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log(e.target.value);
        setState((prevState) => {
          const newState = [...prevState];
          newState[2] = value;
          return newState;
        });
      },
      type: "textarea",
      value: state[2],
    },
  ];

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
    <h3>Courses</h3>
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
            label={q.question}
            options={q.options}
            handleSetValue={q.handleSetAnswer}
            value={q.value}
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
    })}
  </Container>
  );
};

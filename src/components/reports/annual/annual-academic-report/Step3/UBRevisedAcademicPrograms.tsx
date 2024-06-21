import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";


const initialState = ["", "", "", "", ""];

export const UBRevisedAcademicPrograms: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "1. List total number of programs offered at the Faculty (inclusive of certificates, major, minors)",
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
      question:
        "2. List new programmes added to the Faculty (inclusive of graduate programs)",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log(e.target.value);
        setState((prevState) => {
          const newState = [...prevState];
          newState[1] = value;
          return newState;
        });
      },
      type: "input",
      value: state[1],
    },
    {
      question:
        "3. List revised programmes added to the Faculty (inclusive of graduate programs)",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log(e.target.value);
        setState((prevState) => {
          const newState = [...prevState];
          newState[1] = value;
          return newState;
        });
      },
      type: "input",
      value: state[1],
    },
  ];

  return (
    <div>
      <Container sx={{ width: 1, m: 1, p: 1 }}>
        <h3>Research & Partnership</h3>
        {questions.map((q, index) => (
          <UBTextField
            key={index}
            question={q.question}
            SetAnswer={q.handleSetAnswer}
            value={q.value}
          />
        ))}
      </Container>
    </div>
  );
};

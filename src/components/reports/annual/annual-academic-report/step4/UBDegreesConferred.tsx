import React, { useState } from "react";
import { Container } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";

const initialState = ["", ""];

export const UBDegreesConferred = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "a. Total number of degrees conferred for most recent academic year",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
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
        question: "b. Total number of degrees conferred for most recent academic year per department and/or program.",
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
    <Container sx={{ width: 1, m: 1, p: 1 }}>
    <h3>Degrees conferred</h3>
    {questions.map((q, index) => (
      <UBTextField
        key={index}
        question={q.question}
        SetAnswer={q.handleSetAnswer}
        value={q.value}
      />
    ))}
  </Container>
  );
};

export default UBDegreesConferred;

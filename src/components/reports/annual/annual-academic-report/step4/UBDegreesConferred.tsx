import React, { useState } from "react";
import { Container } from "@mui/material";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";

const initialState = ["", ""];

export const UBDegreesConferred = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question:
        "a. Total number of degrees conferred for most recent academic year",
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
      question:
        "b. Total number of degrees conferred for most recent academic year per department and/or program.",
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
      <h3 style={{ marginBottom: "1%"}}>
        <center>Degrees conferred</center>
      </h3>
      {questions.map((q, index) => (
        <Box key={index} mb={"-5%"}>
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

export default UBDegreesConferred;

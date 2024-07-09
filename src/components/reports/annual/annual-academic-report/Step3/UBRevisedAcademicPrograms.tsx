import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import Box from "@mui/material/Box";

const initialState = ["", "", ""];

export const UBRevisedAcademicPrograms: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "1. List total number of programs offered at the Faculty (inclusive of certificates, major, minors)",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
          setState((prevState) => {
            const newState = [...prevState];
            newState[0] = value;
            return newState;
          });
        }
      },
      type: "input",
      value: state[0],
    },
    {
      question:
        "2. List new programmes added to the Faculty (inclusive of graduate programs)",
      handleSetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
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
      question:
        "3. List revised programmes added to the Faculty (inclusive of graduate programs)",
      handleSetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
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
    <div>
      <Container sx={{ width: 1, m: 1, p: 1 }}>
        <h3 style={{ marginBottom: "5%", marginTop: "60px" }}>
          <center>Number of new and revised academic programs</center>
        </h3>
        {questions.map((q, index) => (
          <Box key={index} mb={-4.7}>
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
              <Box sx={{ mb: "-5%", mt: "-30px" }}>
                <UBTextField
                  question={q.question}
                  SetAnswer={q.handleSetAnswer}
                  value={q.value}
                />
              </Box>
            )}
          </Box>
        ))}
      </Container>
    </div>
  );
};

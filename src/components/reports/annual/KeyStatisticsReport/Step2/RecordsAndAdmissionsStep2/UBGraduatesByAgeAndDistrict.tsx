import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../../UbDropdown/UbDropdown";
import Box from "@mui/material/Box";

const initialState = ["", "", "", ""];

export const UBGraduatesByAgeAndDistrict: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question:
        "7. Graduates by age (for the last Academic year)",
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
      question:
        "8. Graduates by Districts in Belize and other International Countries",
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
<Container sx={{ width: 1, m: "auto", p: 1, }}>
      {questions.map((q, index) => (
        <Box key={index} mb={-4.7} sx={{ml: "2%", mt: "-5%"}}>
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

export default UBGraduatesByAgeAndDistrict;

import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { UBTextField } from "../../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../../common/Textarea/UBTextArea";
import { UbDropdown } from "../../../../../UbDropdown/UbDropdown";

const initialState = ["", "", ""];

export const CapitalExpenditureProjects: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "10. Major Capital Expenditure Projects / Investments (buildings etc.)",
      handleSetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
   
  ];

  return (
    <div>
      <Container sx={{ width: 1, m: 1, p: 1 }}>
        {questions.map((q, index) => {
          if (q.type === "textarea") {
            return (
              <Box sx={{ mt:"-5%"}}>
              <UBTextArea
                key={index}
                question={q.question}
                SetAnswer={q.handleSetAnswer}
                value={q.value}
              />
              </Box>
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
    </div>
  );
};

export default CapitalExpenditureProjects;

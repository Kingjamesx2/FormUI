import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBRadioButton } from "../../../../common/UBRadioButton/UBRadioButton";

const initialState = ["", "", "", ""];

export const UBFinancial: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "a. State sources of funding, for example, department activities, research fund",
      handleSetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
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
      question: "Identify the most impactful change/initiative by your faculty for the academic year and give reasons why.",
      handleSetAnswerRadio: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState((prevState) => {
          const newState = [...prevState];
          newState[2] = value;
          return newState;
        });
      },
      type: "radiobutton",
      options: [
        { value: "yes", label: "yes" },
        { value: "no", label: "no" },
      ],
      value: state[2],
    }
  ];

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3><center>Financial/Budget</center></h3>
      {questions.map((q, index) => (
        <Box key={index} mb={-4}>
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
          ) : q.type === "radiobutton" ? (
            <>
              <UBRadioButton
                label={q.question}
                options={q.options}
                handleSetValue={q.handleSetAnswerRadio}
                value={q.value}
              />
              {q.additionalText && (
                <UBTextField
                  question="Please specify:"
                  SetAnswer={q.handleSetAnswerText}
                  value={q.textValue}
                />
              )}
            </>
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

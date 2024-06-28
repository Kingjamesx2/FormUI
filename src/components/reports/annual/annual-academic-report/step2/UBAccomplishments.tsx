import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import Box from "@mui/material/Box";
import { UBRadioButton } from "../../../../common/UBRadioButton/UBRadioButton";
import Stack from '@mui/material/Stack';

const initialState = ["", "", "", "", "", ""];

export const UBAccomplishments: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "1. List significant accomplishments of the Faculty.",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
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
      question:
        "2. Explain/Describe how each of the above has advanced Faculty goals as well as those of the University.",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
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
        "3. Identify the most impactful change/initiative by your faculty for the academic year and give reasons why.",
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
        { value: "Teaching and Learning", label: "Teaching and Learning" },
        { value: "Institutional Development (partnerships, funding, visibility etc.)", label: "Institutional Development (partnerships, funding, visibility etc.)" },
        { value: "Training, webinars, conference and/or projects of improvement and other majorachievements for your department.", label: "Training, webinars, conference and/or projects of improvement and other major achievements for your department." },
        { value: "National development", label: "National development" },
      ],
      value: state[2],
    },
    {
      question:
        "Why",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState((prevState) => {
          const newState = [...prevState];
          newState[3] = value;
          return newState;
        });
      },
      type: "input",
      value: state[3],
    },
    {
      question:
        "4. What were the opportunities gained from this academic year that can be applicable to the upcoming academic year? Please be as specific as possible.",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState((prevState) => {
          const newState = [...prevState];
          newState[4] = value;
          return newState;
        });
      },
      type: "textarea",
      value: state[4],
    },
  ];

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3><center>Accomplishments for the reporting period</center></h3>
      {questions.map((q, index) => (
        <Stack key={index} mb={-4.7} >
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
            </>
          ) : (
            
            <UBTextField
              question={q.question}
              SetAnswer={q.handleSetAnswer}
              value={q.value}
            />
          )}
        </Stack>
      ))}
    </Container>
  );
};

export default UBAccomplishments;

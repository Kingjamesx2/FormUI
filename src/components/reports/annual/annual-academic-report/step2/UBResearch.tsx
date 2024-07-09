import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";


const initialState = ["", "", "", "", ""];

export const UBresearch: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "1. Please list any external funding received by the faculty, include research and training grant proposals and awards, as well as any other support.",
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
        "2. Please list research and publications generated as a result of the faculty’s activities (full citations).",
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
      question:
        "3. List any partnership agencies/organizations which your faculty engaged with during the year in review.",
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
    {
      question:
        "4. List any scholarships, fellowships or exchange programmes received or offered by the Faculty.",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log(e.target.value);
        setState((prevState) => {
          const newState = [...prevState];
          newState[3] = value;
          return newState;
        });
      },
      type: "textarea",
      value: state[3],
    },
    {
      question:
        "5. List research and publications generated as a result of the Faculty’s activity (full citations).",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log(e.target.value);
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
      <Container sx={{ width: 1, m: 1, mb: "100px", p: 1 }}>
        <h3 style={{marginBottom: "-20px", marginTop: "60px"}}><center>Research & Partnership</center></h3>
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

export default UBresearch;
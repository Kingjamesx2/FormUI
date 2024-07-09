import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import Box from "@mui/material/Box";

const initialState = ["", "", "", ""];

export const UBStrategicGoals: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question:
        "1. List accomplished Initiative for the previous Academic Year (AY) 23-24",
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
        "2. List Corresponding Strategic Plan Goal & Strategy",
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
    // {
    //   question: "4. List goals for the upcoming academic year.",
    //   handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = e.target.value;
    //     console.log(e.target.value);
    //     setState((prevState) => {
    //       const newState = [...prevState];
    //       newState[2] = value;
    //       return newState;
    //     });
    //   },
    //   type: "textarea",
    //   value: state[2],
    // },
    // {
    //   question:
    //     "5. What is the way forward for the Faculty as it enters into its new academic year? How will this assist the University in the long term?",
    //   handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = e.target.value;
    //     console.log(e.target.value);
    //     setState((prevState) => {
    //       const newState = [...prevState];
    //       newState[3] = value;
    //       return newState;
    //     });
    //   },
    //   type: "textarea",
    //   value: state[3],
    // },
  ];

  return (
<Container sx={{ width: 1, m: "auto", p: 1, }}>
      <h3 style={{ marginBottom: "-20px", marginTop: "50px"}}><center>Strategic Initiatives & Goals</center></h3>
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

export default UBStrategicGoals;

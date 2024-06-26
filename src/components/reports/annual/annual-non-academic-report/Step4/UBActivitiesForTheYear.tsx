import React, { useState } from "react";
import { Container } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";


const initialState = ["", "","",""];

export const UBActivitiesForTheYear = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "Name Of event: ",
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
      question: "Name of person/s in the pictures",
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
      question: "Summary of Events",
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
      question: "Add Image",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log(e.target.value);
        setState((prevState) => {
          const newState = [...prevState];
          newState[3] = value;
          return newState;
        });
      },
      type: "input",
      value: state[3],
    },
  ];

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3>
       <center> Activities for the year - List activities conducted during the year under review. </center>
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

export default UBActivitiesForTheYear;

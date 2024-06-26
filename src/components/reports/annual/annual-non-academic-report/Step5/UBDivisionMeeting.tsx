import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import Box from "@mui/material/Box";

const initialState = ["","",""];

export const UBFacultyMeetings: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "Type of Meeting",
      handleSetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        console.log(e.target.value);
        setState((prevState) => {
          const newState = [...prevState];
          newState[0] = value;
          return newState;
        });
      },
      type: "dropdown",
      value: state[0],
    },
    {
        question: "Date of Meeting: ",
        handleSetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      {
        question: "Minutes of Meeting (please attach the minutes of meetings)",
        handleSetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
  ];

  return (
    <div>
      <Container sx={{ width: 1, m: 1, p: 1 }}>
        <h3><center>Division Meetings</center></h3>
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
    </div>
  );
};

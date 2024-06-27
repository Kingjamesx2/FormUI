import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import { UBDate } from "../../../../common/UBDate/UBDate";

const initialState = ["", "", ""];

export const UBFacultyMeetings: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "Faculty",
      handleSetAnswer: (e: SelectChangeEvent<string>) => {
        const selectedValue = e.target.value;
        setState((prevState) => [selectedValue, "", ""]);
        console.log(selectedValue);
      },
      type: "dropdown",
      options: [
        {
          value: "Online",
          label: "Online",
        },
        {
          value: "Face to face",
          label: "Face to face",
        },
      ],
      value: state[0],
    },
    {
      question: "Date of Meeting: ",
      handleSetAnswer: (date: string) => {
        console.log(date);
        setState((prevState) => {
          const newState = [...prevState];
          newState[1] = date;
          return newState;
        });
      },
      type: "date",
      value: state[1],
    },
    {
      question: "Minutes of Meeting (please attach the minutes of meetings)",
      handleSetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        console.log(value);
        setState((prevState) => {
          const newState = [...prevState];
          newState[2] = value;
          return newState;
        });
      },
      type: "input",
      value: state[2],
    },
  ];

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3>
        <center>Faculty meetings</center>
      </h3>
      {questions.map((q, index) => (
        <Box key={index} mb={-2}
        sx={{
          backgroundColor: '#FFD954',
          p: 2,
          borderTopLeftRadius: 20
        }}
        >
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
          ) : q.type === "input" ? (
            <UBTextField
              question={q.question}
              SetAnswer={q.handleSetAnswer}
              value={q.value}
            />
          ) : (
            <UBDate
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

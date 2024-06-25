import React, { useState, ChangeEvent } from "react";
import Container from "@mui/material/Container";
import { SelectChangeEvent } from "@mui/material/Select";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";

const initialState = ["FST", "", ""];

export const FacultyMissionStatement = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "Faculty Mission Statement",
      handleSetAnswer: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState((prevState) => [prevState[0], prevState[1], value]);
        console.log(value);
      },
      type: "input",
      value: state[2],
    },
  ];

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3>Faculty Mission Statement</h3>
        {questions.map((q, index) => {
          if (q.type === "textarea") {
            return (
              <UBTextArea
                key={index}
                question={q.question}
                SetAnswer={q.handleSetAnswer}
                value={q.value}
              />
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
  );
};

export default FacultyMissionStatement;

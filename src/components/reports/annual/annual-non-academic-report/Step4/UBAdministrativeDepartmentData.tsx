import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";


const initialState = ["","",""];

export const UBAdministrativeDepartmentData: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "a. List number of full-time staff",
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
    {
        question: "b. List number of part-time staf",
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
        question: "c. Has there been significant change/s in staffing?",
        handleSetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
          const value = e.target.value;
          console.log(e.target.value);
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
    <div>
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3>
      Administrative Department Data (Inclusive of the Head of Department)
      </h3>
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
    </div>
  );
};


export default UBAdministrativeDepartmentData;
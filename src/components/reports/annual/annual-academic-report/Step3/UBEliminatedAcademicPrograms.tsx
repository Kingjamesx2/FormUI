import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";


const initialState = [""];

export const UBEliminatedAcademicPrograms: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "1. List eliminated academic programs",
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
        <h3>List eliminated academic programs</h3>
        {questions.map((q, index) => (
          <UBTextField
            key={index}
            question={q.question}
            SetAnswer={q.handleSetAnswer}
            value={q.value}
          />
        ))}
      </Container>{" "}
    </div>
  );
};

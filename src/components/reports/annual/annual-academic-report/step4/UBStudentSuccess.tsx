import React, { useState } from "react";
import { Container } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import UBPaper from "../../../../common/UBPaper/UBPaper";
import Box from "@mui/material/Box";



const initialState = ["", "", "", "", "", "", ""];

export const UBStudentSuccess = () => {
  const [state, setState] = useState<string[]>(initialState);

  const handleStudentChange = (index: number, field: "name" | "reason") => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setState((prevState) => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
  };

  const questions = [
    {
      question: "1. List internships that the Faculty offers and indicate partnership agencies/organizations.",
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
        question: "2. List clubs, associations, teams, etc. affiliated with the Faculty.",
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
          "3. Identify three students that model the Faculty ideals in their academic and community life. Provide a brief explanation.",
        handleSetAnswer: handleStudentChange,
        type: "studentInputs",
        values: [
          { name: state[2], reason: state[3] },
          { name: state[4], reason: state[5] },
          { name: state[6], reason: state[7] },
        ],
      },
  ];

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
    <h3><center>Student Success</center></h3>
    {questions.map((q, index) => (
        <Box key={index} mb={-4.6}>
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
          ) : q.type === "studentInputs" ? (
            <>
              <p>{q.question}</p>
              {q.values.map((student, idx) => (
                <div key={idx}>
                  <UBTextField
                    question={`Student ${idx + 1} Name:`}
                    SetAnswer={handleStudentChange(idx * 2, "name")}
                    value={student.name}
                  />
                  <UBTextField
                    question={`Reason for Student ${idx + 1}:`}
                    SetAnswer={handleStudentChange(idx * 2 + 1, "reason")}
                    value={student.reason}
                  />
                </div>
              ))}
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
export default UBStudentSuccess;

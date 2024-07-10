import React, { useState } from "react";
import { Container } from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";

const initialState = ["", "", "", "", "", "", "", "", "", "", ""];

export const UBStudentSuccess = () => {
  const [state, setState] = useState<string[]>(initialState);

  const handleStudentChange =
    (index: number, field: "name" | "reason") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setState((prevState) => {
        const newState = [...prevState];
        newState[index] = value;
        return newState;
      });
    };

  const questions = [
    {
      question:
        "1. Highlight activities or programmes that engaged students of the Faculty and indicate how they contributed to student learning.",
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
        "2. List clubs, associations, teams, etc. affiliated with the Faculty.",
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
      type: "header",
    },
    {
      question: "Student 1",
      handleSetAnswer: handleStudentChange(2, "name"),
      type: "input",
      value: state[2],
    },
    {
      question: "Reason",
      handleSetAnswer: handleStudentChange(3, "reason"),
      type: "input",
      value: state[3],
    },
    {
      question: "Student 2",
      handleSetAnswer: handleStudentChange(4, "name"),
      type: "input",
      value: state[4],
    },
    {
      question: "Reason",
      handleSetAnswer: handleStudentChange(5, "reason"),
      type: "input",
      value: state[5],
    },
    {
      question: "Student 3",
      handleSetAnswer: handleStudentChange(6, "name"),
      type: "input",
      value: state[6],
    },
    {
      question: "Reason",
      handleSetAnswer: handleStudentChange(7, "reason"),
      type: "input",
      value: state[7],
    },
  ];

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginBottom: "-20px", marginTop: "70px" }}>
        <center>Student Success</center>
      </h3>
      {questions.map((q, index) => (
        <Box key={index} >
          {q.type === "textarea" ? (
            <Box mb={-4.7}>
            <UBTextArea
              question={q.question}
              SetAnswer={q.handleSetAnswer}
              value={q.value}
            />
            </Box>
          ) : q.type === "dropdown" ? (
            <UbDropdown
              label={q.question}
              options={q.options}
              handleSetValue={q.handleSetAnswer}
              value={q.value}
            />
          ) : q.type === "header" ? (
            <p style={{ marginTop: "10%", marginBottom: "-4%", marginLeft:"14.5%", padding: "2% 2% 2% 1.5%", width: "67.5%", backgroundColor: "#FFD954", borderRadius:"5px 5px 0 0"}}>
              {q.question}
            </p>
          ) : (
            <Box mb={"-5%"}>
            <UBTextField
              question={q.question}
              SetAnswer={q.handleSetAnswer}
              value={q.value}
            />
            </Box>
          )}
        </Box>
      ))}
    </Container>
  );
};

export default UBStudentSuccess;

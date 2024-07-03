import React, { useState, ChangeEvent } from "react";
import Container from "@mui/material/Container";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import { Flex } from "antd";

const initialState = ["", "", ""];

export const FacultyMissionStatement = () => {
  const [state, setState] = useState<string[]>(initialState);
  const [deadline, setDeadline] = useState<string>("* Deadline is Friday of the first week in August");

  const questions = [
    {
      question: "Faculty Mission Statement",
      handleSetAnswer: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState((prevState) => [prevState[0], prevState[1], value]);
        console.log(value);
      },
      type: "input",
      value: state[0],
    },
  ];

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
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
              <Box sx={{mt: "0%", ml: "15%", pb: "4%", border: "1px solid", width: "70%", backgroundColor: "#FFD954", borderRadius: "20px"}}>
              <UBTextField
                key={index}
                question={q.question}
                SetAnswer={q.handleSetAnswer}
                value={q.value}
              />
              </Box>
            );
          }
        })}
         <Box sx={{ mb: 5, p: 1, mt: 4, ml: "10%", color: 'red', width: "60%"}}>
            {deadline}
          </Box>
    </Container>
  );
};

export default FacultyMissionStatement;

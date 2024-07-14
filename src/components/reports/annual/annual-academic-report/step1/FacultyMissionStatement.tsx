import React, { useState, ChangeEvent } from "react";
import { axiosInstance } from '../../../../../../axiosInstance';
import Container from "@mui/material/Container";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectMissionStatement, setMissionStatement } from "../../../../../store/features/annualReportSlice"


const initialState = ["", "", ""];

export const FacultyMissionStatement = () => {
  const dispatch = useDispatch()
  const missionStatement = useSelector(selectMissionStatement)
  const [state, setState] = useState<string[]>(initialState);
  const [deadline, setDeadline] = useState<string>("* Deadline is Friday of the first week in August");
  
  
  
  axiosInstance.get('/staffReport/668c5b32e15b11267102aa13') 
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })



  const questions = [
    {
      question: "Faculty Mission Statement",
      // handleSetAnswer: (e: ChangeEvent<HTMLInputElement>) => {
      //   const value = e.target.value;
      //   setState((prevState) => [value, prevState[1], prevState[2]]);
      //   console.log(value);
      // },
      type: "textarea",
      // value: state[0],
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
              SetAnswer={(e) => dispatch(setMissionStatement(e.target.value as string)) }
              value={missionStatement}
            />
          );
        } else if (q.type === "dropdown") {
          return (
            <UbDropdown
              key={index}
              label={q.question}
              options={q.options}
              handleSetValue={q.handleSetAnswer}
              value={q.value}
            />
          );
        } else if (q.type === "input") {
          return (
            <Box
              key={index}
              sx={{
                mt: "-2%",
                ml: "14%",
                pb: "2%",
                width: "70%",
                backgroundColor: "#FFD954",
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
              }}
            >
              <UBTextField
                question={q.question}
                SetAnswer={q.handleSetAnswer}
                value={q.value}
              />
            </Box>
          );
        }
      })}
      <Box
        sx={{
          mb: "2%",
          p: "2%",
          mt: "%",
          ml: "15%",
          color: "red",
          width: "66%",
          backgroundColor: "#FFD954",
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
      >
        {deadline}
      </Box>
    </Container>
  );
};

export default FacultyMissionStatement;

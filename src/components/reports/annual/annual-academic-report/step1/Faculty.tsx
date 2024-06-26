import React, { useState, ChangeEvent } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { SelectChangeEvent } from "@mui/material/Select";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const initialState = ["FST", "", ""];

export const Faculty = () => {
  const [state, setState] = useState<string[]>(initialState);
  const [summary, setSummary] = useState<string>("The annual report provides a comprehensive summary of the University’s activities for the academic year, which is from August to July. The specific outputs/outcomes are based on the Annual Implementation Plan for the period under review.");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
          value: "FEA",
          label: "Faculty of Education and Arts",
          dean: "Dr Nadine Tun",
        },
        {
          value: "FMSS",
          label: "Faculty of Management and Social Sciences",
          dean: "Dr Somanandevi Thiagarajan",
        },
        {
          value: "FHS",
          label: "Faculty of Health Sciences",
          dean: "Dr Lisa Johnson",
        },
        {
          value: "FST",
          label: "Faculty of Science & Technology",
          dean: "Dr. Apolonio Aguilar",
        },
      ],
      value: state[0],
    },
    {
      question: "List all units/departments/centres/institutes within the Faculty",
      handleSetAnswer: (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setState((prevState) => [prevState[0], value, prevState[2]]);
        console.log(value);
      },
      type: "textarea",
      value: state[1],
    },
  ];

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <Box
        sx={{
          backgroundColor: '#FFD954',
          p: isSmallScreen ? 1 : 2,
          ml: isSmallScreen ? 0 : 2,
          mb: isSmallScreen ? 2 : -3,
          width: isSmallScreen ? '100%' : '94.23%',
        }}
      >
        <Box sx={{ mb: 5, p: 1 }}>
          {summary}
        </Box>
        <UbDropdown
          label={questions[0].question}
          options={questions[0].options}
          handleSetValue={questions[0].handleSetAnswer as (e: SelectChangeEvent<string>) => void}
          value={questions[0].value}
        />
      </Box>
      {questions.slice(1).map((q, index) => {
        if (q.type === "textarea") {
          return (
            <UBTextArea
              key={index}
              question={q.question}
              SetAnswer={q.handleSetAnswer as (e: ChangeEvent<HTMLTextAreaElement>) => void}
              value={q.value}
            />
          );
        } else if (q.type === "input") {
          return (
            <UBTextField
              key={index}
              question={q.question}
              SetAnswer={q.handleSetAnswer as (e: ChangeEvent<HTMLInputElement>) => void}
              value={q.value}
            />
          );
        }
      })}
    </Container>
  );
};

export default Faculty;

import React, { useState, ChangeEvent } from "react";
import { Container } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";

const initialState = ["FST", "", ""];



export const AnnualNonAcademicReportStep1: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);
  const [summary, setSummary] = useState<string>("The annual report provides a comprehensive summary of the University’s activities for the academic year, which is from August to July. The specific outputs/outcomes is based on the Annual Implementation Plan forthe period under review.");

  const questions = [
    {
      question: "Division(Department, Centres/ Institure)",
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
      question: "Reports To:",
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
      question: "State your Mission Statement ",
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
    <Container>
    <Box>
      <Box sx={{ml:21, mt: 10, mb: 5, p: 1, border: "1px solid black", width: "68%", }}>
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
          <Box sx={{mt: "-25px"}}>            <UBTextArea
            key={index}
            question={q.question}
            SetAnswer={q.handleSetAnswer as (e: ChangeEvent<HTMLTextAreaElement>) => void}
            value={q.value}
          />
          </Box>
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
}

export default AnnualNonAcademicReportStep1;
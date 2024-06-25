import React, { useState, ChangeEvent } from "react";
import Container from "@mui/material/Container";
import { SelectChangeEvent } from "@mui/material/Select";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const initialState = ["FST", "", ""];

export const Faculty = () => {
  const [state, setState] = useState<string[]>(initialState);
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
    <Container
      sx={{
        m: isSmallScreen ? 0.5 : 1,
        p: isSmallScreen ? 0.5 : 1,
        width: '100%',
      }}
    >
      {questions.map((q, index) => {
        if (q.type === "textarea") {
          return (
            <UBTextArea
              key={index}
              question={q.question}
              SetAnswer={q.handleSetAnswer as (e: ChangeEvent<HTMLTextAreaElement>) => void}
              value={q.value}
            />
          );
        } else if (q.type === "dropdown") {
          return (
            <UbDropdown
              key={index}
              label={q.question}
              options={q.options}
              handleSetValue={q.handleSetAnswer as (e: SelectChangeEvent<string>) => void}
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

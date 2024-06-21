import React, { useState } from "react";
import { Container } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";

const initialState = ["FST", "", ""];

export const AnnualAcademicReportStep1 = () => {
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "Faculty",
      handleSetAnswer: (e: SelectChangeEvent<string>) => {
        const selectedValue = e.target.value;
        setState([selectedValue, "", ""]);
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
      question:
        "List all units/departments/centres/institutes within the Faculty",
      handleSetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setState([state[0], value, state[2]]);
        console.log(value);
      },
      type: "textarea",
      value: state[1],
    },
    {
      question: "Faculty Mission Statement ",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => {
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

export default AnnualAcademicReportStep1;

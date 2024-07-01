import React, { useState, ChangeEvent } from "react";
import { Container } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { UBTextArea } from "../../../../../../components/common/Textarea/UBTextArea";
import UbDropdown from "../../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const initialState = ["FST", "", ""];

export const AcademicYear: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);
  const [summary, setSummary] = useState<string>(
    "The annual report provides a comprehensive summary of the University’s activities for the academic year, which is from August to July. The specific outputs/outcomes are based on the Annual Implementation Plan for the period under review."
  );
  const [submissionDeadline, setSubmissionDeadline] = useState<string>(
    "Submission Deadline: Please return completed form to the Office of The Vice President by August 1, 2022"
  );

  const questions = [
    {
      question: "Academic Year",
      handleSetAnswer: (e: SelectChangeEvent<string>) => {
        const selectedValue = e.target.value;
        setState((prevState) => [selectedValue, "", ""]);
        console.log(selectedValue);
      },
      type: "dropdown",
      options: [
        {
          value: "none",
          label: "none",
        },
        {
          value: "2021/2022",
          label: "2021/2022",
        },
        {
          value: "2022/2023",
          label: "2022/2023",
        },
        {
          value: "2023/2024",
          label: "2023/2024",
        },
      ],
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

export default AcademicYear;

import React, { useState, ChangeEvent } from "react";
import { Container } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { UBTextArea } from "../../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const initialState = ["FST", "", ""];

export const UBAcademicYear: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);
  const [departmentHead, setDepartmentHead] = useState<string>("Department Head: Registrar, Office of Human Resource and Office of Finance");
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
    <Container>
      <Box>
        <Box sx={{ mt: "20px", mb: "20px" }}>
          <UbDropdown
            label={questions[0].question}
            options={questions[0].options}
            handleSetValue={questions[0].handleSetAnswer as (e: SelectChangeEvent<string>) => void}
            value={questions[0].value}
          />
        </Box>
        <Box sx={{ mb: "30px", display: "flex", justifyContent: "left", width: "70%", ml: "15%"}}>
          {departmentHead}
        </Box>
        <Box sx={{ color: "red", display: "flex", justifyContent: "left", width: "70%", ml: "15%" }}>
          {submissionDeadline}
        </Box>
      </Box>

      {questions.slice(1).map((q, index) => {
        if (q.type === "textarea") {
          return (
            <Box sx={{ mt: "-25px" }}>            <UBTextArea
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
};

export default UBAcademicYear;

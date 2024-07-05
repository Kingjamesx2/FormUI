import React, { useState, ChangeEvent } from "react";
import { Container, Box } from "@mui/material";
import { UBTextArea } from "../../../../../../components/common/Textarea/UBTextArea";
import UbDropdown from "../../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../../common/UBTextField/UBTextField";
import UBInfoTable from "../../../../../../components/common/UBInfoTable/UBInfoTable";

const initialState = ["", "", ""];

const columns = ['Faculty', 'Full-time faculty', 'Adjunct faculty', 'Non-teaching staff'];
const initialRows = [
  { degree: 'Education and Arts', 'Full-time faculty': '', 'Adjunct faculty': '', 'Non-teaching staff': '' },
  { degree: 'Management and Social Sciences', 'Full-time faculty': '', 'Adjunct faculty': '', 'Non-teaching staff': '' },
  { degree: 'Health Sciences', 'Full-time faculty': '', 'Adjunct faculty': '', 'Non-teaching staff': '' },
  { degree: 'Science and Technology', 'Full-time faculty': '', 'Adjunct faculty': '', 'Non-teaching staff': '' },
];

export const UBNumberOfStaff: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);
  const [numberStaff, setNumberStaff] = useState<string>("7. Number of Staff Academic Year 2021/2022");

  const questions = [
    {
      question: "7. Number of Staff Academic Year 2021/2022",
      handleSetAnswer: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState((prevState) => [prevState[0], prevState[1], value]);
        console.log(value);
      },
      type: "table",
      value: state[0],
    },
  ];

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ margin: "5% 0 -4% 0"}}><center> II. Human Resource Statistics</center></h3>
      <Box sx={{ mt: "6%", width: "68%", ml: "15%", mb: "-6%", pt: "3%", pb: "2%", pl: "2%", backgroundColor: "#FFD954", fontWeight: "bold", borderRadius: "5px 5px 0 0" }}>
        {numberStaff}
      </Box>
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
              key={index}
              label={q.question}
              options={q.options}
              handleSetValue={q.handleSetAnswer}
              value={q.value}
            />
          );
        } else if (q.type === "table") {
          return (
            <UBInfoTable
              key={index}
              columns={columns}
              initialRows={initialRows}
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
        return null;
      })}
    </Container>
  );
};

export default UBNumberOfStaff;

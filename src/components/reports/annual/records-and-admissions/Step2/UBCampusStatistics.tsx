import React, { useState, ChangeEvent } from "react";
import { Container, Box, Typography } from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import UBInfoTable from "../../../../common/UBInfoTable/UBInfoTable";

const initialState = ["", "", ""];

const columns = ['6. Campus Statistics (Number of Students) Academic Year 2023-2024', ''];
const initialRows = [
  { degree: 'Belize City', '': '' },
  { degree: 'Belmopan', '': ''},
  { degree: 'Punta Gorda', '': '' },
  { degree: 'Central Farm', '': '' },
  { degree: 'Satellite Programs', '': '' },

];

export const UBCampusStatistics: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);
  
  const questions = [
    {
      question: "2021/2022",
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
      {questions.map((q, index) => {
        if (q.type === "textarea") {
          return (
            <UBTextArea
              key={index}
              question={q.year}
              SetAnswer={q.handleSetAnswer}
              value={q.value}
            />
          );
        } else if (q.type === "dropdown") {
          return (
            <UbDropdown
              key={index}
              label={q.year}
              options={q.options}
              handleSetValue={q.handleSetAnswer}
              value={q.value}
            />
          );
        } else if (q.type === "table") {
          return (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {q.year}
              </Typography>
              <UBInfoTable
                columns={columns}
                initialRows={initialRows}
              />
              
            </Box>
          );
        } else if (q.type === "input") {
          return (
            <UBTextField
              key={index}
              question={q.year}
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

export default UBCampusStatistics;

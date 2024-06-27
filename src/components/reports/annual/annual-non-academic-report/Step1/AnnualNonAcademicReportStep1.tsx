import React, { useState, ChangeEvent } from "react";
import { Container } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";

const initialState = ["FST", "", ""];



export const AnnualNonAcademicReportStep1: React.FC = () =>{
    const [state, setState] = useState<string[]>(initialState);

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
         <Container sx={{ width: 1, m: 1, p: 1 }}>
       {questions.map((q, index) => (
        <Box key={index} mb={-4.7}>
          {q.type === "textarea" ? (
            <UBTextArea
              question={q.question}
              SetAnswer={q.handleSetAnswer}
              value={q.value}
            />
          ) : q.type === "dropdown" ? (
            <UbDropdown
              label={q.question}
              options={q.options}
              handleSetValue={q.handleSetAnswer}
              value={q.value}
            />
          ) : (
            <UBTextField
              question={q.question}
              SetAnswer={q.handleSetAnswer}
              value={q.value}
            />
          )}
        </Box>
      ))}
    </Container>
     );
}

export default AnnualNonAcademicReportStep1;
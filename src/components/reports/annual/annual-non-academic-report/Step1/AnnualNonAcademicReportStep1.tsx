import React, { useState, ChangeEvent } from "react";
import { Container } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBContainerFluid } from "../../../../common/UBContainerFluid/UBContainerFluid";
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
        <UBContainerFluid>
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
        </UBContainerFluid>
     );
}

export default AnnualNonAcademicReportStep1;
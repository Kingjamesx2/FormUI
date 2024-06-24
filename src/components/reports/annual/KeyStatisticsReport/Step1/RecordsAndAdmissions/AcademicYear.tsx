import React, { useState, ChangeEvent } from "react";
import { Container } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { UBTextArea } from "../../../../../../components/common/Textarea/UBTextArea"
import UbDropdown from "../../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../../common/UBTextField/UBTextField";

const initialState = ["FST", "", ""];



export const AcademicYear: React.FC = () =>{
    const [state, setState] = useState<string[]>(initialState);

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
}

export default AcademicYear;
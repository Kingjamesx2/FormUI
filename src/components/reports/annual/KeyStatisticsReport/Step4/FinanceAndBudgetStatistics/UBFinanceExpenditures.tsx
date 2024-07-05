import React, { useState, ChangeEvent } from "react";
import { Container, Box } from "@mui/material";
import { UBTextArea } from "../../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../../common/UBTextField/UBTextField";
import UBInfoTable from "../../../../../common/UBInfoTable/UBInfoTable";

const initialState = ["", "", ""];

const columns = ['9. Finance-Expenditures Bz$', ''];
const initialRows = [
  { degree: 'Teaching Staff Costs', '': ''},
  { degree: 'Non-Teaching Staff Costs', '': ''},
  { degree: 'Administrative Cost', '': ''},
  { degree: 'Capital Expenditures(List major projects below)', '': ''},
];

export const UBFinanceExpenditures: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);
  const [enrollmentTrend, setEnrollmentTrend] = useState<string>("2. Student Enrolment Trend (Academic Level)");

  const questions = [
    {
      question: "2. Student Enrolment Trend (Academic Level)",
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
      {/* <Box sx={{ mt: "10%", width: "70%", ml: "15%", mb: "-30px" }}>
        {enrollmentTrend}
      </Box> */}
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
            <Box sx={{ mt: "-5%"}}>
            <UBInfoTable
              key={index}
              columns={columns}
              initialRows={initialRows}
            />
            </Box>
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

export default UBFinanceExpenditures;

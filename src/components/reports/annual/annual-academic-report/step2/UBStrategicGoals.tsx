import React, { useState, ChangeEvent } from "react";
import Container from "@mui/material/Container";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import {
  setStrategicGoals,
  selectStrategicGoals,
} from "../../../../../store/features/annualReportSlice";

const initialState = ["", "", "", ""];

export const UBStrategicGoals: React.FC = () => {
  const dispatch = useDispatch();
  const strategicGoals = useSelector(selectStrategicGoals);
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question:
        "1. List accomplished Initiative for the previous Academic Year (AY) 23-24",
      type: "textarea",
    },
    {
      question: "2. List Corresponding Strategic Plan Goal & Strategy",
      type: "textarea",
    },
  ];

  return (
    <Container sx={{ width: 1, m: "auto", p: 1 }}>
      <h3 style={{ marginBottom: "-20px", marginTop: "50px" }}>
        <center>Strategic Initiatives & Goals</center>
      </h3>
      {questions.map((q, index) => (
        <Box key={index} mb={-4.7}>
            <UBTextArea
              question={q.question}
              SetAnswer={(e) => dispatch(
                  setStrategicGoals({ previousAcademicYear: e.target.value }),
                  setStrategicGoals({ plans: e.target.value })
                )
              }
              value={strategicGoals.previousAcademicYear}
              // value={strategicGoals.plans}
            />  
        </Box>
      ))}
    </Container>
  );
};

export default UBStrategicGoals;

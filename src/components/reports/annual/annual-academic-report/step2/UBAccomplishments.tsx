import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import Box from "@mui/material/Box";
import { UBRadioButton } from "../../../../common/UBRadioButton/UBRadioButton";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import {
  setAccomplishments,
  selectAccomplishments,
} from "../../../../../store/features/annualReportSlice";

const initialState = ["", "", "", "", "", ""];

export const UBAccomplishments: React.FC = () => {
  const dispatch = useDispatch();
  const accomplishments = useSelector(selectAccomplishments);
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "1. List significant accomplishments of the Faculty.",
      type: "textarea",
    },
    {
      question:
        "2. Explain/Describe how each of the above has advanced Faculty goals as well as those of the University.",
      type: "textarea",
    },
    {
      question:
        "3. Identify the most impactful change/initiative by your faculty for the academic year and give reasons why.",
      type: "radiobutton",
      options: [
        { value: "Teaching and Learning", label: "Teaching and Learning" },
        {
          value:
            "Institutional Development (partnerships, funding, visibility etc.)",
          label:
            "Institutional Development (partnerships, funding, visibility etc.)",
        },
        {
          value:
            "Training, webinars, conference and/or projects of improvement and other majorachievements for your department.",
          label:
            "Training, webinars, conference and/or projects of improvement and other major achievements for your department.",
        },
        { value: "National development", label: "National development" },
      ],
    },
    {
      question: "",
      type: "textarea",
    },
    {
      question:
        "4. What were the opportunities gained from this academic year that can be applicable to the upcoming academic year? Please be as specific as possible.",
      type: "textarea",
    },
  ];

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginBottom: "-20px", marginTop: "50px" }}>
        <center>Accomplishments for the Reporting Period</center>
      </h3>
      {questions.map((q, index) => (
        <Box
          key={index}
          mb={-4.7}
          sx={
            q.question === "" ? { ml: "-0.7%", mt: "-6%", width: "101.4%" } : {}
          }
        >
          {q.type === "textarea" ? (
            <UBTextArea
              question={q.question}
              SetAnswer={(e) =>
                dispatch(
                  setAccomplishments({ accomplishmentList: e.target.value}),
                  setAccomplishments({ accomplishmentAdvancement: e.target.value }),
                  setAccomplishments({ teachingLearningImpact: e.target.value }),                   setAccomplishments({ accomplishmentAdvancement: e.target.value }),                  setAccomplishments({ accomplishmentAdvancement: e.target.value }),
                  setAccomplishments({ institutionalDevelopmentImpact: e.target.value }),                  setAccomplishments({ accomplishmentAdvancement: e.target.value }),
                  setAccomplishments({ trainingImpact: e.target.value }),                  setAccomplishments({ accomplishmentAdvancement: e.target.value }),
                  setAccomplishments({ nationalDevelopmentImpact: e.target.value }),                  setAccomplishments({ accomplishmentAdvancement: e.target.value }),
                  setAccomplishments({ why: e.target.value }),                 
                  setAccomplishments({ applicableOpportunities: e.target.value }),
                )
              }
              value={accomplishments.accomplishmentList}

              // value={strategicGoals.plans}
            />
          ) : q.type === "dropdown" ? (
            <UbDropdown
              label={q.question}
              options={q.options}
              handleSetValue={q.handleSetAnswer}
              value={q.value}
            />
          ) : q.type === "radiobutton" ? (
            <Box sx={{ mt: "-9%" }}>
              <UBRadioButton
                label={q.question}
                options={q.options}
                handleSetValue={q.handleSetAnswerRadio}
                value={q.value}
              />
            </Box>
          ) : (
            <Box sx={{ mt: "-5%", mb: "-5%" }}>
              <UBTextField
                question={q.question}
                SetAnswer={q.handleSetAnswer}
                value={q.value}
              />
            </Box>
          )}
        </Box>
      ))}
    </Container>
  );
};

export default UBAccomplishments;

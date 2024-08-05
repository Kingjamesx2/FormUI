import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNumberOfStaff } from "../../../../store/features/HRReportSlice";
import { Container, Box } from "@mui/material";
import { UBTextArea } from "../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../common/UBTextField/UBTextField";
import UBInfoTable from "../../../../components/common/UBInfoTable/UBInfoTable";
import { setNumberOfStaff } from "../../../../store/features/HRReportSlice";

const initialState = ["", "", ""];

const columns = ['Faculty', 'Full-time faculty', 'Adjunct faculty', 'Non-teaching staff'];
const initialRows = [
  { degree: 'Education and Arts', 'Full-time faculty': '', 'Adjunct faculty': '', 'Non-teaching staff': '' },
  { degree: 'Management and Social Sciences', 'Full-time faculty': '', 'Adjunct faculty': '', 'Non-teaching staff': '' },
  { degree: 'Health Sciences', 'Full-time faculty': '', 'Adjunct faculty': '', 'Non-teaching staff': '' },
  { degree: 'Science and Technology', 'Full-time faculty': '', 'Adjunct faculty': '', 'Non-teaching staff': '' },
];

export const HumanResourceStatistics: React.FC = () => {
  const dispatch = useDispatch()
  const numberOfStaff = useSelector(selectNumberOfStaff)
  const [state, setState] = useState<string[]>(initialState);

  const questions = [
    {
      question: "7. Number of Staff Academic Year 2023/2024",
      handleSetAnswer: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState((prevState) => [prevState[0], prevState[1], value]);
      },
      type: "table",
      value: state[0],
    },
  ];

  const handleSetValue = (value: any) => {
    const _v = [JSON.parse(JSON.stringify(numberOfStaff))]


    value.forEach((_newValue: any) => {
      const row = Object.values(_newValue)
      
      _v.forEach((v) => {
        if (row[0] == 'Education and Arts') {
          v.FulltimeFaculty.EducationAndArts = row[1]
          v.AdjunctFaculty.EducationAndArts = row[2]
          v.NonTeachingStaff.EducationAndArts = row[3]
        }
        else if (row[0] == 'Management and Social Sciences') {
          v.FulltimeFaculty.ManagementAndSocialSciences = row[1]
          v.AdjunctFaculty.ManagementAndSocialSciences = row[2]
          v.NonTeachingStaff.ManagementAndSocialSciences = row[3]
        }
        else if (row[0] == 'Health Sciences') {
          v.FulltimeFaculty.HealthSciences = row[1]
          v.AdjunctFaculty.HealthSciences = row[2]
          v.NonTeachingStaff.HealthSciences = row[3]
        }
        else if (row[0] == 'Science and Technology') {
          v.FulltimeFaculty.ScienceAndTechnology = row[1]
          v.AdjunctFaculty.ScienceAndTechnology = row[2]
          v.NonTeachingStaff.ScienceAndTechnology = row[3]
        }
      })
    })

    dispatch(setNumberOfStaff(_v[0]))
  }

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ margin: "5% 0 -4% 0" }}><center> Human Resource Statistics</center></h3>
      <Box sx={{ mt: "6%", width: "68%", ml: "15%", mb: "-6%", pt: "3%", pb: "2%", pl: "2%", backgroundColor: "#FFD954", fontWeight: "bold", borderRadius: "5px 5px 0 0" }}>
        7. Number of Staff Academic Year 2023/2024
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
              SetValue={handleSetValue}
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

export default HumanResourceStatistics;

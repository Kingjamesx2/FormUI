import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Box} from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import UBInfoTable from "../../../../common/UBInfoTable/UBInfoTable";
import { setGraduationStatistics, selectGraduationStatistics } from "../../../../../store/features/recordsReportSlice";

const initialState = ["", "", ""];

const getColumns = (year: string) => [
  `Faculty (${year})`,
  'Associates',
  'Bachelors',
  'Honors',
];

export const UBGraduationStatistics: React.FC = () => {
  const dispatch = useDispatch()
  const graduatStatistics = useSelector(selectGraduationStatistics)
  const [state, setState] = useState<string[]>(initialState);
  const [specify, setSpecify] = useState<string>("*Please specify number of students graduating with honors in Bachelors programs");

  const initialRows = [[...graduatStatistics[0].faculties], [...graduatStatistics[1].faculties], [...graduatStatistics[2].faculties]]

  const questions = [
    {
      year: "2021/2022",
      handleSetAnswer: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setState((prevState) => [value, prevState[1], prevState[2]]);
      },
      type: "table",
      value: initialRows[0],
    },
    {
      year: "2022/2023",
      handleSetAnswer: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setState((prevState) => [prevState[0], value, prevState[2]]);
      },
      type: "table",
      value: initialRows[1],
    },
    {
      year: "2023/2024",
      handleSetAnswer: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setState((prevState) => [prevState[0], prevState[1], value]);
      },
      type: "table",
      value: initialRows[2],
    },
  ];

  const handleSetValue = (value: any, year: number) => {
    let academicYear = '2021/2022'
    let _v = JSON.parse(JSON.stringify(graduatStatistics))
    
    switch(year) {
      case 0:
        _v[0].faculties = value 
      break;
      case 1:
        academicYear = '2022/2023'
        _v[1].faculties = value
      break;
      case 2:
        academicYear = '2023/2024'
        _v[2].faculties = value
      break;
    }

    dispatch(setGraduationStatistics(_v))
  }

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <Box>
        <h4 style={{width: "69%", marginLeft: "15%", marginBottom: "-5%", padding: "2% 0 1% 1%", backgroundColor: "#FFD954", borderRadius: "5px 5px 0 0" }}>
          4. Graduation Statistics
        </h4>
      </Box>
      {questions.map((q, index) => {
       /* if (q.type === "textarea") {
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
        }*/ if (q.type === "table") {
          return (
            <Box key={index} sx={{ mb: "-4.5%" }}>
              <Box sx={{ ml: "15%", mt: "5%", mb: "-6%", pb: "1%", pt: "2%", pl: "1%", width: "69%", backgroundColor: "#FFD954" }}>
                {specify}
              </Box>
              <UBInfoTable
                columns={getColumns(q.year)}
                initialRows={q.value}
                SetValue={(v) => handleSetValue(v, index)}
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

export default UBGraduationStatistics;

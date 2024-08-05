import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { Container, Box } from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import UBInfoTable from "../../../../common/UBInfoTable/UBInfoTable";
import { setEnrollmentTrendPerFaculty } from "../../../../../store/features/recordsReportSlice";

const initialState = ["", "", ""];

const columns = ['Faculty', '2021/2022', '2022/2023', '2023/2024'];
const initialRows = [
  { degree: 'Education and Arts', '2021/2022': '', '2022/2023': '', '2023/2024': '' },
  { degree: 'Management and Social Science', '2021/2022': '', '2022/2023': '', '2023/2024': '' },
  { degree: 'Health Science', '2021/2022': '', '2022/2023': '', '2023/2024': '' },
  { degree: 'Science and Technology', '2021/2022': '', '2022/2023': '', '2023/2024': '' },
];

export const StudentsEnrollmentTrendPerFaculty: React.FC = () => {
  const [state, setState] = useState<string[]>(initialState);
  const [enrollmentTrend, setEnrollmentTrend] = useState<string>("3. Student Enrolment Trend (Per Faculty)");
  const dispatch = useDispatch()

  const questions = [
    {
      question: "",
      handleSetAnswer: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState((prevState) => [prevState[0], prevState[1], value]);
      },
      type: "table",
      value: state[0],
    },
  ];

  const handleSetValue = (value: any) => {
    let _v = [{
      academicYear: '2021/2022',
      educationAndArts: 0,
      managementAndSocialScience: 0,
      healthScience: 0,
      scienceAndTechnology: 0
  },
  {
      academicYear: '2022/2023',
      educationAndArts: 0,
      managementAndSocialScience: 0,
      healthScience: 0,
      scienceAndTechnology: 0
  },
  {
      academicYear: '2023/2024',
      educationAndArts: 0,
      managementAndSocialScience: 0,
      healthScience: 0,
      scienceAndTechnology: 0
  }]

    value.forEach((r, i) => {
      const p = Object.values(r)

      _v.forEach((__v, j) => {
        if (p[0] === 'Education and Arts')
          _v[j].educationAndArts = p[1+j] as number
        if (p[0] === 'Management and Social Science')
          _v[j].managementAndSocialScience = p[1+j] as number
        if (p[0] === 'Health Science')
          _v[j].healthScience = p[1+j] as number
        if (p[0] === 'Science and Technology')
          _v[j].scienceAndTechnology = p[1+j] as number
      })
    })

    dispatch(setEnrollmentTrendPerFaculty(_v))
  }

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <Box sx={{ mt: "3%", width: "68%", ml: "15%", mb: "-5%", pt: "3%", pb:"2%", pl: "2%", backgroundColor: "#FFD954", fontWeight: "bold", borderRadius: "5px 5px 0 0"}}>
        {enrollmentTrend}
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

export default StudentsEnrollmentTrendPerFaculty;

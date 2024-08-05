import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Box } from "@mui/material";
import UBInfoTable from "../../../../common/UBInfoTable/UBInfoTable";
import {
  selectStudentEnrollmentTrend,
  setStudentEnrollmentTrend,
} from "../../../../../store/features/recordsReportSlice";

const columns = ['Degree Program', '2021/2022', '2022/2023', '2023/2024'];
const initialRows = [
  { degree: 'Associates', '2021/2022': '', '2022/2023': '', '2023/2024': '' },
  { degree: 'Undergraduate', '2021/2022': '', '2022/2023': '', '2023/2024': '' },
  { degree: 'Graduate (MBA - 19 + MEDL - 47)', '2021/2022': '', '2022/2023': '', '2023/2024': '' },
  { degree: 'Other', '2021/2022': '', '2022/2023': '', '2023/2024': '' },
];

export const UBStudentsEnrollmentTrend: React.FC = () => {
  const dispatch = useDispatch();
  const studentEnrollmentTrend = useSelector(selectStudentEnrollmentTrend);

  const handleSetAnswer = (value: any) => {
    let _v = [{
      academicYear: '2021/2022',
      associate: 0,
      undergraduate: 0,
      graduate: 0,
      other: 0
  },
  {
      academicYear: '2022/2023',
      associate: 0,
      undergraduate: 0,
      graduate: 0,
      other: 0
  },
  {
      academicYear: '2023/2024',
      associate: 0,
      undergraduate: 0,
      graduate: 0,
      other: 0
  }]

    value.forEach((r, i) => {
      const p = Object.values(r)

      _v.forEach((__v, j) => {
        if (p[0] === 'Associates')
          _v[j].associate = p[1+j] as number
        if (p[0] === 'Undergraduate')
          _v[j].undergraduate = p[1+j] as number
        if (p[0] === 'Graduate (MBA - 19 + MEDL - 47)')
          _v[j].graduate = p[1+j] as number
        if (p[0] === 'Other')
          _v[j].other = p[1+j] as number
      })
    })

    dispatch(setStudentEnrollmentTrend(_v));
  };

  const [enrollmentTrend, setEnrollmentTrend] = useState<string>("2. Student Enrolment Trend (Per Faculty)");

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <Box sx={{ mt: "3%", width: "68%", ml: "15%", mb: "-5%", pt: "3%", pb: "2%", pl: "2%", backgroundColor: "#FFD954", fontWeight: "bold", borderRadius: "5px 5px 0 0" }}>
        {enrollmentTrend}
      </Box>
      <UBInfoTable
        columns={columns}
        initialRows={initialRows}
        SetValue={handleSetAnswer}
      />
    </Container>
  );
};

export default UBStudentsEnrollmentTrend;

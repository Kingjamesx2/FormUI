import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Box } from "@mui/material";
import UBInfoTable from "../../../../common/UBInfoTable/UBInfoTable";
import { selectEnrollmentTrendPerFaculty ,setEnrollmentTrendPerFaculty } from "../../../../../store/features/recordsReportSlice";


const columns = ['Faculty', '2021/2022', '2022/2023', '2023/2024'];

export const StudentsEnrollmentTrendPerFaculty: React.FC = () => {
  const [enrollmentTrend, setEnrollmentTrend] = useState<string>("3. Student Enrolment Trend (Per Faculty)");
  const dispatch = useDispatch();
  const enrollmentTrendPerFaculty = useSelector(setEnrollmentTrendPerFaculty);
  const initialRows = [
    { degree: 'Education and Arts', '2021/2022': '', '2022/2023': '', '2023/2024': '' },
    { degree: 'Management and Social Science', '2021/2022': '', '2022/2023': '', '2023/2024': '' },
    { degree: 'Health Science', '2021/2022': '', '2022/2023': '', '2023/2024': '' },
    { degree: 'Science and Technology', '2021/2022': '', '2022/2023': '', '2023/2024': '' },
  ];
  

  const handleSetValue = (value: any) => {
    let _v = [
      {
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
      }
    ];

    value.forEach((r, i) => {
      const p = Object.values(r);

      _v.forEach((__v, j) => {
        if (p[0] === 'Education and Arts')
          _v[j].educationAndArts = p[1 + j] as number;
        if (p[0] === 'Management and Social Science')
          _v[j].managementAndSocialScience = p[1 + j] as number;
        if (p[0] === 'Health Science')
          _v[j].healthScience = p[1 + j] as number;
        if (p[0] === 'Science and Technology')
          _v[j].scienceAndTechnology = p[1 + j] as number;
      });
    });

    dispatch(setEnrollmentTrendPerFaculty(_v));
  };

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <Box sx={{ mt: "3%", width: "68%", ml: "15%", mb: "-5%", pt: "3%", pb: "2%", pl: "2%", backgroundColor: "#FFD954", fontWeight: "bold", borderRadius: "5px 5px 0 0" }}>
        {enrollmentTrend}
      </Box>
      <UBInfoTable
        columns={columns}
        initialRows={initialRows}
        SetValue={handleSetValue}
      />
    </Container>
  );
};

export default StudentsEnrollmentTrendPerFaculty;

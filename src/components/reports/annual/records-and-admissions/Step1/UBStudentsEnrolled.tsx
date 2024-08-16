import React from "react";
import { Container } from "@mui/material";
import UBInfoTable from "../../../../common/UBInfoTable/UBInfoTable";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentStudentEnrollment, setCurrentStudentEnrollmentTrend } from "../../../../../store/features/recordsReportSlice";

const columns = ['1. Students Enrolment for the Academic Year under review', ''];

export const UBStudentsEnrolled: React.FC = () => {
  const dispatch = useDispatch();
  const currentStudentEnrollment = useSelector(selectCurrentStudentEnrollment);
  const initialRows = [
    { degree: 'Associates', '': currentStudentEnrollment.associates },
    { degree: 'Undergraduates', '': currentStudentEnrollment.undergraduate },
    { degree: 'Graduates', '': currentStudentEnrollment.graduate },
    { degree: 'Total', '': currentStudentEnrollment.Total },

  ];

  const handleSetValue = (value: any) => {
    let _newValues = { associates: 0, undergraduate: 0, graduate: 0, Total: 0 };

    value.forEach((r: any) => {
      const _v = Object.values(r)[1] as number;
      if (r.degree === 'Associates') _newValues.associates = _v;
      if (r.degree === 'Undergraduates') _newValues.undergraduate = _v;
      if (r.degree === 'Graduates') _newValues.graduate = _v;
      if (r.degree === 'Total') _newValues.Total = _v;

    });

    dispatch(setCurrentStudentEnrollmentTrend(_newValues));
  };

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginBottom: "-2%" }}><center>Records and Admissions</center></h3>
      <UBInfoTable
        columns={columns}
        initialRows={initialRows}
        SetValue={(newValues) => handleSetValue(newValues)}
      />
    </Container>
  );
};

export default UBStudentsEnrolled;

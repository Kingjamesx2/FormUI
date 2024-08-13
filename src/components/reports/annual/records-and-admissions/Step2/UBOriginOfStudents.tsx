import React from "react";
import { useDispatch } from "react-redux";
import { selectStudentOrigin, setStudentOrigin } from "../../../../../store/features/recordsReportSlice";
import { Container, Box } from "@mui/material";
import UBInfoTable from "../../../../common/UBInfoTable/UBInfoTable";
import { useSelector } from "react-redux";


const columns = ['5. Origin of Students(Number)', ''];


export const UBOriginOfStudents: React.FC = () => {
  const dispatch = useDispatch();
  const studentOrigin = useSelector(selectStudentOrigin)
  const initialRows = [
    { degree: 'Belize', '': studentOrigin.Belize },
    { degree: 'Central American Countries', '': studentOrigin.CentralAmericanCountries},
    { degree: 'Other Countries', '': studentOrigin.OtherCountries},
  ];

  const handleSetValue = (value: any) => {
    let _newValues = { Belize: 0, CentralAmericanCountries: 0, OtherCountries: 0 };

    value.forEach((r: any) => {
      const _v = Object.values(r)[1] as number;
      if (r.degree === 'Belize') _newValues.Belize = _v;
      if (r.degree === 'Central American Countries') _newValues.CentralAmericanCountries = _v;
      if (r.degree === 'Other Countries') _newValues.OtherCountries = _v;
    });

    dispatch(setStudentOrigin(_newValues));
  };

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <UBInfoTable
        columns={columns}
        initialRows={initialRows}
        SetValue={handleSetValue}
      />
    </Container>
  );
};

export default UBOriginOfStudents;

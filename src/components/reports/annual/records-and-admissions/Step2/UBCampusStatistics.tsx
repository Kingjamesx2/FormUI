import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import UBInfoTable from "../../../../common/UBInfoTable/UBInfoTable";
import { setCampusStatistics, selectCampusStatistics } from "../../../../../store/features/recordsReportSlice";

const columns = ['6. Campus Statistics (Number of Students) Academic Year 2023-2024', ''];


export const UBCampusStatistics: React.FC = () => {
  const dispatch = useDispatch();
  const campusStatistics = useSelector(selectCampusStatistics);
  const initialRows = [
    { degree: 'Belize City', '': campusStatistics.BelizeCity },
    { degree: 'Belmopan', '': campusStatistics.Belmopan  },
    { degree: 'Punta Gorda', '': campusStatistics.PuntaGorda },
    { degree: 'Central Farm', '': campusStatistics.CentralFarm},
    { degree: 'Satellite Programs', '': campusStatistics.SatellitePrograms},
  ];

  const handleSetValue = (value: any) => {
    let _newValues = { BelizeCity: 0, Belmopan: 0, PuntaGorda: 0, CentralFarm: 0, SatellitePrograms: 0 };

    value.forEach((r: any) => {
      const _v = Object.values(r)[1] as number;
      if (r.degree === 'Belize City') _newValues.BelizeCity = _v;
      if (r.degree === 'Belmopan') _newValues.Belmopan = _v;
      if (r.degree === 'Punta Gorda') _newValues.PuntaGorda = _v;
      if (r.degree === 'Central Farm') _newValues.CentralFarm = _v;
      if (r.degree === 'Satellite Programs') _newValues.SatellitePrograms = _v;
    });

    dispatch(setCampusStatistics(_newValues));
  };

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <Box sx={{ mb: 2 }}>
        <UBInfoTable
          columns={columns}
          initialRows={initialRows}
          SetValue={handleSetValue}
        />
      </Box>
    </Container>
  );
};

export default UBCampusStatistics;

import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import {
  // selectGraduates,
  setGraduates,
  selectRecordReport
} from "../../../../../store/features/recordsReportSlice";
import { RootState } from "../../../../../store/store"; // Import your RootState or relevant type

export const UBGraduatesByAgeAndDistrict: React.FC = () => {
  const dispatch = useDispatch();
  const recordReport = useSelector(selectRecordReport);
  const reportId = recordReport._id;

  return (
    <Container sx={{ width: 1, m: "auto", p: 1 }}>
      <Box mb={-4.7} sx={{ ml: "2%", mt: "-5%" }}>
        <UBTextArea
          question="7. Graduates by age (for the last Academic year)"
          SetAnswer={(e) =>
            dispatch(setGraduates({ GraduatesByAge: e.target.value }))
          }
          value={recordReport.graduates.GraduatesByAge}
        />
      </Box>
      <Box mb={-4.7} sx={{ ml: "2%", mt: "-5%" }}>
        <UBTextArea
          question="8. Graduates by Districts in Belize and other International Countries"
          SetAnswer={(e) =>
            dispatch(setGraduates({ GraduatesByDistrict: e.target.value }))
          }
          value={recordReport.graduates.GraduatesByDistrict}
        />
      </Box>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "7rem",
          position: "relative",
          top: "5.8rem",
        }}
      >
      </div>
    </Container>
  );
};

export default UBGraduatesByAgeAndDistrict;

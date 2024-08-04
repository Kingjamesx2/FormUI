import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import {
  setAdministrativeData,
  selectAnnualReport,
} from "../../../../../store/features/annualReportSlice";

const initialState = ["", "", ""];

export const UBAdministrativeDepartmentData: React.FC = () => {
  const dispatch = useDispatch();
  const annualReport = useSelector(selectAnnualReport)

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginBottom: "1%", marginTop: "7%" }}>
        <center>
          Administrative Department Data (Inclusive of the Head of Department)
        </center>
      </h3>

      <Box mb={"-4.8%"}>
        <UBTextField
          question="a. List number of full-time staff"
          SetAnswer={(e) =>
            dispatch(setAdministrativeData({ fullTimeStaff: e.target.value }))
          }
          value={annualReport.administrativeData.fullTimeStaff}
          type="number"
        />
      </Box>

      <Box mb={"-4.8%"}>
        <UBTextField
          question="b. List number of part-time staff"
          SetAnswer={(e) =>
            dispatch(setAdministrativeData({ partTimeStaff: e.target.value }))
          }
          value={annualReport.administrativeData.partTimeStaff}
          type="number"
        />
      </Box>

      <Box mb={"-4.8%"}>
        <UBTextField
          question="c. Has there been significant change/s in staffing?"
          SetAnswer={(e) =>
            dispatch(
              setAdministrativeData({ significantStaffChanges: e.target.value })
            )
          }
          value={annualReport.administrativeData.significantStaffChanges}
        />
      </Box>
    </Container>
  );
};

export default UBAdministrativeDepartmentData;

import React from "react";
import Container from "@mui/material/Container";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { useSelector, useDispatch } from "react-redux";
import {
  setEliminatedAcademicProgram, selectAnnualReport } from "../../../../../store/features/annualReportSlice";

export const UBEliminatedAcademicPrograms: React.FC = () => {
  const dispatch = useDispatch();
  const annualReport = useSelector(selectAnnualReport)

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginTop: "5%", marginBottom: "-3%" }}>
        <center>List eliminated academic programs</center>
      </h3>
      <UBTextArea
        question="1. List eliminated academic programs"
        SetAnswer={(e) => dispatch(setEliminatedAcademicProgram(e.target.value))}
        value={annualReport.eliminatedAcademicPrograms}
      />
    </Container>
  );
};

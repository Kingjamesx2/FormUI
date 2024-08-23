import React from "react";
import Container from "@mui/material/Container";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setOtherComments,
  selectAnnualReport,
} from "../../../../../store/features/annualReportSlice";

export const UBOtherComponents: React.FC = () => {
  const dispatch = useDispatch();
  const annualReport = useSelector(selectAnnualReport);

  return (
    <Container sx={{ /*height: "100%"*/ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginBottom: "-2%", marginTop: "-5%" }}>
        <center>Other Components</center>
      </h3>
      <Box mb={-4.5}>
        <UBTextArea
          question="Use this section to provide information not included in the previous sections but which you believe is pertinent for this report. (optional)"
          SetAnswer={(e) => dispatch(setOtherComments(e.target.value))}
          value={annualReport.otherComments}
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

export default UBOtherComponents;

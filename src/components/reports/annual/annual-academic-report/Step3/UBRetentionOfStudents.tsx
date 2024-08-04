import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { useSelector, useDispatch } from "react-redux";
import { setRetentionOfStudents, selectAnnualReport } from "../../../../../store/features/annualReportSlice";


export const UBRetentionOfStudents: React.FC = () => {
  const dispatch = useDispatch();
  const annualReport = useSelector(selectAnnualReport);

  const [retention, setRetention] = useState<string>("1. List retention initiatives for the following:");

  return (
    <div>
      <Container sx={{ width: 1, m: 1, p: 1 }}>
        <h3 style={{ marginBottom: "1%" }}><center>Retention of Students</center></h3>
        <Box sx={{ width: "70%", ml: "15%", mb: "-5%", pb: "2%", pt: "2%", backgroundColor: "#FFD954", borderRadius: "5px 5px 0 0" }}>
          {retention}
        </Box>
        <Box mb={"-5.3%"}>
          <UBTextArea
            question="a. Current students"
            SetAnswer={(e) => dispatch(setRetentionOfStudents({ currentStudents: e.target.value }))}
            value={annualReport.retentionOfStudents.currentStudents}
          />
        </Box>
        <Box mb={"-5.3%"}>
          <UBTextArea
            question="b. Transfer students"
            SetAnswer={(e) => dispatch(setRetentionOfStudents({ transferStudents: e.target.value }))}
            value={annualReport.retentionOfStudents.transferStudents}
          />
        </Box>
      </Container>
    </div>
  );
};

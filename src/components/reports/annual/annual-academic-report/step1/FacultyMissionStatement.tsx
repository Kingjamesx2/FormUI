import { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {setMissionStatement, selectAnnualReport } from "../../../../../store/features/annualReportSlice";


export const FacultyMissionStatement = () => {
  const dispatch = useDispatch();
  const annualReport = useSelector(selectAnnualReport)
  const [deadline, setDeadline] = useState<string>("* Deadline is Friday of the first week in August");
  

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <UBTextArea
        question="Faculty Mission Statement"
        SetAnswer={(e) => dispatch(setMissionStatement(e.target.value as string))}
        value={annualReport.missionStatement}
      />
      {/* If you have other components like UbDropdown and UBTextField, you can add them here directly */}
      <Box
        sx={{
          mb: "2%",
          p: "2%",
          mt: "%",
          ml: "15%",
          color: "red",
          width: "66%",
          backgroundColor: "#FFD954",
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
      >
        {deadline}
      </Box>
    </Container>
  );
};

export default FacultyMissionStatement;

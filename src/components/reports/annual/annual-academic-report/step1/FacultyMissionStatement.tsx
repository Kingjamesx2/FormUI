import { useState } from "react";
import { axiosInstance } from '../../../../../../axiosInstance';
import Container from "@mui/material/Container";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectMissionStatement, setMissionStatement } from "../../../../../store/features/annualReportSlice";


export const FacultyMissionStatement = () => {
  const dispatch = useDispatch();
  const missionStatement = useSelector(selectMissionStatement);
  const [deadline, setDeadline] = useState<string>("* Deadline is Friday of the first week in August");
  
  axiosInstance.get('/staffReport/668c5b32e15b11267102aa13')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <UBTextArea
        question="Faculty Mission Statement"
        SetAnswer={(e) => dispatch(setMissionStatement(e.target.value as string))}
        value={missionStatement}
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

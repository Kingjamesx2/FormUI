import React from "react";
import Container from "@mui/material/Container";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { setOtherComments, selectOtherComments } from "../../../../../store/features/annualNonReportSlice";


export const UBOtherComponents: React.FC = () => {
  const dispatch = useDispatch();
  const otherComments = useSelector(selectOtherComments);

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginBottom: "-2%", marginTop: "10%" }}>
        <center>Other Components</center>
      </h3>
      <Box mb={-4.5}>
        <UBTextArea
          question="1. Use this section to provide information not included in the previous sections but which you believe is pertinent for this report. (optional)"
          SetAnswer={(e) => dispatch(setOtherComments(e.target.value))}
          value={otherComments}
        />
      </Box>
    </Container>
  );
};

export default UBOtherComponents;

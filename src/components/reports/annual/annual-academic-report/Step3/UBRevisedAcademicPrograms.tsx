import React from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { setRevisedAcademics, selectRevisedAcademics } from "../../../../../store/features/annualReportSlice";

export const UBRevisedAcademicPrograms: React.FC = () => {
  const dispatch = useDispatch();
  const revisedAcademicsProgram = useSelector(selectRevisedAcademics);

  return (
    <div>
      <Container sx={{ width: 1, m: 1, p: 1 }}>
        <h3 style={{ marginBottom: "5%", marginTop: "60px" }}>
          <center>Number of new and revised academic programs</center>
        </h3>

        <Box mb={-4.7}>
          <UBTextField
            question="1. List total number of programs offered at the Faculty (inclusive of certificates, major, minors)"
            SetAnswer={(e) =>
              dispatch(setRevisedAcademics({ programsOffered: e.target.value }))
            }
            value={revisedAcademicsProgram.programsOffered}
            type="number"
          />
        </Box>

        <Box mb={-4.7}>
          <UBTextArea
            question="2. List new programmes added to the Faculty (inclusive of graduate programs)"
            SetAnswer={(e) =>
              dispatch(setRevisedAcademics({ newProgrammesAdded: e.target.value }))
            }
            value={revisedAcademicsProgram.newProgrammesAdded}
          />
        </Box>

        <Box mb={-4.7}>
          <UBTextArea
            question="3. List revised programmes added to the Faculty (inclusive of graduate programs)"
            SetAnswer={(e) =>
              dispatch(setRevisedAcademics({ revisedPrograms: e.target.value }))
            }
            value={revisedAcademicsProgram.revisedPrograms}
          />
        </Box>
      </Container>
    </div>
  );
};

export default UBRevisedAcademicPrograms;

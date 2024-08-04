import React from "react";
import { Container } from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAnnualReport,
  setStudentSuccess,
} from "../../../../../store/features/annualReportSlice";

export const UBStudentSuccess = () => {
  const dispatch = useDispatch();
  const annualReport = useSelector(selectAnnualReport)

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginBottom: "-20px", marginTop: "70px" }}>
        <center>Student Success</center>
      </h3>
        <Box mb={-4.7}>
          <UBTextArea
            question="1. Highlight activities or programmes that engaged students of the Faculty and indicate how they contributed to student learning."
            SetAnswer={(e) =>
              dispatch(setStudentSuccess({ studentLearning: e.target.value }))
            }
            value={annualReport.studentSuccess.studentLearning}
          />
        </Box>

        <Box mb={-4.7}>
          <UBTextArea
            question="2. List clubs, associations, teams, etc. affiliated with the Faculty."
            SetAnswer={(e) =>
              dispatch(setStudentSuccess({ studentClubs: e.target.value }))
            }
            value={annualReport.studentSuccess.studentClubs}
          />
        </Box>
        <Box sx= {{mt: "-9%"}}>
        <p
          style={{
            marginTop: "10%",
            marginBottom: "-4%",
            marginLeft: "14.5%",
            padding: "2% 2% 2% 1.5%",
            width: "67.5%",
            backgroundColor: "#FFD954",
            borderRadius: "5px 5px 0 0",
          }}
        >
          3. Identify three students that model the Faculty ideals in their
          academic and community life. Provide a brief explanation.
        </p>

        <Box mb={"-8%"} sx={{ width: "100%" }}>
          <UBTextField
            question="Student 1"
            SetAnswer={(e) =>
              dispatch(setStudentSuccess({ student1: e.target.value }))
            }
            value={annualReport.studentSuccess.student1}
          />
        </Box>

        <Box mb={-4.7} sx={{ width: "101.45%", ml: "-0.70%" }}>
          <UBTextArea
            question=""
            SetAnswer={(e) =>
              dispatch(setStudentSuccess({ reason1: e.target.value }))
            }
            value={annualReport.studentSuccess.reason1}
          />
        </Box>

        <Box mb={"-8%"}>
          <UBTextField
            question="Student 2"
            SetAnswer={(e) =>
              dispatch(setStudentSuccess({ student2: e.target.value }))
            }
            value={annualReport.studentSuccess.student2}
          />
        </Box>

        <Box mb={-4.7} sx={{ width: "101.45%", ml: "-0.70%" }}>
          <UBTextArea
            question=""
            SetAnswer={(e) =>
              dispatch(setStudentSuccess({ reason2: e.target.value }))
            }
            value={annualReport.studentSuccess.reason2}
          />
        </Box>

        <Box mb={"-8%"}>
          <UBTextField
            question="Student 3"
            SetAnswer={(e) =>
              dispatch(setStudentSuccess({ student3: e.target.value }))
            }
            value={annualReport.studentSuccess.student3}
          />
        </Box>

        <Box mb={-4.7} sx={{ width: "101.45%", ml: "-0.70%" }}>
          <UBTextArea
            question=""
            SetAnswer={(e) =>
              dispatch(setStudentSuccess({ reason3: e.target.value }))
            }
            value={annualReport.studentSuccess.reason3}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default UBStudentSuccess;

import { Container } from "@mui/material";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { setDegreesConferred, selectAnnualReport } from "../../../../../store/features/annualReportSlice";

export const UBDegreesConferred = () => {
  const dispatch = useDispatch();
  const annualReport = useSelector(selectAnnualReport);


  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginBottom: "1%" }}>
        <center>Degrees Conferred</center>
      </h3>
      <Box mb={"-5%"}>
        <UBTextField
          question="a. Total number of degrees conferred for most recent academic year"
          SetAnswer={(e) => dispatch(setDegreesConferred({ degreesConferredForMostRecentAcademicYear: e.target.value }))}
          value={annualReport.degreesConferred.degreesConferredForMostRecentAcademicYear}
          type="number"
        />
      </Box>
      <Box mb={"-5%"}>
        <UBTextField
          question="b. Total number of degrees conferred for most recent academic year per department and/or program."
          SetAnswer={(e) => dispatch(setDegreesConferred({ degreesConferredForMostRecentAcademicYearPerDepartment: e.target.value }))}
          value={annualReport.degreesConferred.degreesConferredForMostRecentAcademicYearPerDepartment}
          type="number"
        />
      </Box>
    </Container>
  );
};

export default UBDegreesConferred;

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { UbDropdown } from "../../../../UbDropdown/UbDropdown";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import { selectAnnualReport } from "../../../../../store/features/annualReportSlice";

import {
  setUnits,
  setFaculty,
} from "../../../../../store/features/annualReportSlice";

export const Faculty = () => {
  const dispatch = useDispatch();
  const annualReport = useSelector(selectAnnualReport);

  return (
    <Container>
      <Box>
        <Box
          sx={{
            ml: "15%",
            mt: "10%",
            p: "2%",
            width: "66%",
            backgroundColor: "#FFD954",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          The annual report provides a comprehensive summary of the University’s
          activities for the academic year, which is from August to July. The
          specific outputs/outcomes are based on the Annual Implementation Plan
          for the period under review.
        </Box>
        <Box
          sx={{
            ml: "15%",
            mt: "-1%",
            p: "2%",
            width: "66%",
            backgroundColor: "#FFD954",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            Academic Year: 2023-2024
          </Typography>
        </Box>
        <Box
          sx={{
            width: "70%",
            marginTop: "-2%",
            marginLeft: "15%",
            paddingBottom: "2%",
            paddingTop: "3%",
            backgroundColor: "#FFD954",
            borderBottomLeftRadius: "none",
            borderBottomRightRadius: "none",
          }}
        >
          <UbDropdown
            label="Faculty"
            options={[
              { value: "", label: "Choose One" },
              { value: "FEA", label: "Faculty of Education and Arts" },
              {
                value: "FMSS",
                label: "Faculty of Management and Social Sciences",
              },
              { value: "FHS", label: "Faculty of Health Sciences" },
              { value: "FST", label: "Faculty of Science & Technology" },
            ]}
            SetAnswer={(e) => dispatch(setFaculty(e.target.value as string))}
            value={annualReport.faculty}
          />
        </Box>
      </Box>
      <Box sx={{ mt: "-4.5%", mb: "4%" }}>
        <UBTextArea
          question="List all units/departments/centres/institutes within the Faculty"
          SetAnswer={(e) => dispatch(setUnits(e.target.value as string))}
          value={annualReport.units}
        />
      </Box>
    </Container>
  );
};

export default Faculty;

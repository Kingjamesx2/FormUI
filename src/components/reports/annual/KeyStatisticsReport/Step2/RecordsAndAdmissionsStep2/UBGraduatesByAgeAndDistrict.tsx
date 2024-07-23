import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../../UbDropdown/UbDropdown";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { selectGraduates, setGraduates } from "../../../../../../store/features/KeyStatisticsreportSlice/recordsReportSlice";

const initialState = ["", "", "", ""];

export const UBGraduatesByAgeAndDistrict: React.FC = () => {
  const dispatch = useDispatch();
  const graduates = useSelector(selectGraduates);

  const [state, setState] = useState<string[]>(initialState);

  return (
    <Container sx={{ width: 1, m: "auto", p: 1 }}>
      <Box mb={-4.7} sx={{ ml: "2%", mt: "-5%" }}>
        <UBTextArea
          question="7. Graduates by age (for the last Academic year)"
          SetAnswer={(e) => dispatch(setGraduates({ GraduatesByAge: e.target.value }))}
          value={graduates.GraduatesByAge}
        />
      </Box>
      <Box mb={-4.7} sx={{ ml: "2%", mt: "-5%" }}>
        <UBTextArea
          question="8. Graduates by Districts in Belize and other International Countries"
          SetAnswer={(e) => dispatch(setGraduates({ GraduatesByDistrict: e.target.value }))}
          value={graduates.GraduatesByDistrict}
        />
      </Box>
    </Container>
  );
};

export default UBGraduatesByAgeAndDistrict;

import React  from "react";
import Container from "@mui/material/Container";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import {
  setStrategicGoals,
  selectStrategicGoals,
} from "../../../../../store/features/annualReportSlice";

// const initialState = ["", "", "", ""];

export const UBStrategicGoals: React.FC = () => {
  const dispatch = useDispatch();
  const strategicGoals = useSelector(selectStrategicGoals);
  // const [state, setState] = useState<string[]>(initialState);

  return (
    <Container sx={{ width: 1, m: "auto", p: 1 }}>
      <h3 style={{ marginBottom: "-20px", marginTop: "50px" }}>
        <center>Strategic Initiatives & Goals</center>
      </h3>
      <Box mb={-4.7}>
        <UBTextArea
          question="1. List accomplished Initiative for the previous Academic Year (AY) 23-24"
          SetAnswer={(e) => dispatch(
            setStrategicGoals({ previousAcademicYear: e.target.value })
          )}
          value={strategicGoals.previousAcademicYear}
        />
      </Box>
      <Box mb={-4.7}>
        <UBTextArea
          question="2. List Corresponding Strategic Plan Goal & Strategy"
          SetAnswer={(e) => dispatch(
            setStrategicGoals({ plans: e.target.value })
          )}
          value={strategicGoals.plans}
        />
      </Box>
    </Container>
  );
};

export default UBStrategicGoals;

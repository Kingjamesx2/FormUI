import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { useSelector, useDispatch } from "react-redux";
import { selectInvestments, setInvestments } from "../../../../../store/features/financeReportSlice"


export const CapitalExpenditureProjects: React.FC = () => {
  const dispatch = useDispatch();
  const investments = useSelector(selectInvestments);

  const handleSetAnswer = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setInvestments({ projectInvestment1: e.target.value }));
  };

  return (
    <div>
      <Container sx={{ width: 1, m: 1, p: 1 }}>
        <Box sx={{ mt:"-2.5%"}}>
          <UBTextArea
            question="12. Major Capital Expenditure Projects / Investments (buildings etc.)"
            SetAnswer={handleSetAnswer}
            value={investments.projectInvestment1}
          />
        </Box>
      </Container>
    </div>
  );
};

export default CapitalExpenditureProjects;

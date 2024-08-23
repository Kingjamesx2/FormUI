import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFinanceReport,
  setInvestments,
} from "../../../../../store/features/financeReportSlice";

export const CapitalExpenditureProjects: React.FC = () => {
  const dispatch = useDispatch();
  const financeReport = useSelector(selectFinanceReport);

  const handleSetAnswer = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setInvestments({ projectInvestment1: e.target.value }));
  };

  return (
    <div>
      <Container sx={{ width: 1, m: 1, p: 1 }}>
        <Box sx={{ mt: "-2.5%" }}>
          <UBTextArea
            question="5. Major Capital Expenditure Projects / Investments (buildings etc.)"
            SetAnswer={handleSetAnswer}
            value={financeReport.investments.projectInvestment1}
          />
        </Box>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "7rem",
            position: "relative",
            top: "5.8rem",
          }}
        >
        </div>
      </Container>
    </div>
  );
};

export default CapitalExpenditureProjects;

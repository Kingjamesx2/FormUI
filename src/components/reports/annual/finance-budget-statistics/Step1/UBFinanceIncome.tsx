import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Box } from "@mui/material";
import UBInfoTable from "../../../../common/UBInfoTable/UBInfoTable";
import {
  setIncome,
  selectFinanceReport,
  setDepartment,
} from "../../../../../store/features/financeReportSlice";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import Typography from "@mui/material/Typography";

const columns = ["1. Finance-Income Bz$", ""];

export const UBFinanceIncome: React.FC = () => {
  const dispatch = useDispatch();
  const financeReport = useSelector(selectFinanceReport);
  const initialRows = [
    {
      degree: "Funding from the Government of Belize",
      "": financeReport.income.fundingFromGoB,
    },
    { degree: "Tuition Fees", "": financeReport.income.tuitionFees },
    { degree: "Contracts", "": financeReport.income.contracts },
    { degree: "Research Grants", "": financeReport.income.researchGrants },
    {
      degree: "Endowment and Investment Income",
      "": financeReport.income.endowmentAndInvestmentIncome,
    },
    { degree: "Other", "": financeReport.income.other },
    { degree: "total", "": financeReport.income.total },
  ];

  const handleSetValue = (value: any) => {
    let _newValues = {
      fundingFromGoB: 0,
      tuitionFees: 0,
      contracts: 0,
      researchGrants: 0,
      endowmentAndInvestmentIncome: 0,
      other: 0,
      total: 0,
    };

    value.forEach((r: any) => {
      const _v = Object.values(r)[1] as number;
      if (r.degree === "Funding from the Government of Belize")
        _newValues.fundingFromGoB = _v;
      if (r.degree === "Tuition Fees") _newValues.tuitionFees = _v;
      if (r.degree === "Contracts") _newValues.contracts = _v;
      if (r.degree === "Research Grants") _newValues.researchGrants = _v;
      if (r.degree === "Endowment and Investment Income")
        _newValues.endowmentAndInvestmentIncome = _v;
      if (r.degree === "Other") _newValues.other = _v;
      if (r.degree === "total") _newValues.total = _v;
    });

    dispatch(setIncome(_newValues));
  };

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ margin: "5% 0 -2% 0" }}>
        <center>Finance and Budget Statistics</center>
      </h3>

      <Box>
        <Box
          sx={{
            ml: "15%",
            mt: "5%",
            p: "2%",
            width: "68%",
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
            color: "red",
            display: "flex",
            justifyContent: "left",
            width: "70%",
            ml: "15%",
            mt: "-3%",
            pb: "2%",
            pt: "3%",
            pl: "2%",
            backgroundColor: "#FFD954",
            borderRadius: "0 0 5px 5px",
          }}
        >
          The annual report Key statistics provides significant statistics for
          the University of Belize for the academic year.
        </Box>

        <Box sx={{ width: "101.4%", ml: "0.29%", mb: "-2%", mt: "-3%" }}>
          <UBTextField
            question="Office/Department"
            SetAnswer={(e) => dispatch(setDepartment(e.target.value as string))}
            value={financeReport.department}
          />
        </Box>
      </Box>
      <UBInfoTable
        columns={columns}
        initialRows={initialRows}
        SetValue={handleSetValue}
      />
    </Container>
  );
};

export default UBFinanceIncome;

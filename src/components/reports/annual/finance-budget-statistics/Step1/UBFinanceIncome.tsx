import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Container } from "@mui/material";
import UBInfoTable from "../../../../common/UBInfoTable/UBInfoTable";
import { setIncome, selectIncome } from "../../../../../store/features/financeReportSlice";


const columns = ['8. Finance-Income Bz$', ''];


export const UBFinanceIncome: React.FC = () => {
  const dispatch = useDispatch();
  const income = useSelector(selectIncome)
  const initialRows = [
    { degree: 'Funding from the Government of Belize', '': income.fundingFromGoB},
    { degree: 'Tuition Fees', '': income.tuitionFees },
    { degree: 'Contracts', '': income.contracts },
    { degree: 'Research Grants', '': income.researchGrants },
    { degree: 'Endowment and Investment Income', '': income.endowmentAndInvestmentIncome },
    { degree: 'Other', '': income.other },

  ];

  const handleSetValue = (value: any) => {
    let _newValues = { 
      fundingFromGoB: 0,
      tuitionFees: 0,
      contracts: 0,
      researchGrants: 0,
      endowmentAndInvestmentIncome: 0,
      other: 0,
      total: 0 
    };

    value.forEach((r:any ) => {
      const _v = Object.values(r)[1] as number;
      if (r.degree === 'Funding from the Government of Belize') _newValues.fundingFromGoB = _v;
      if (r.degree === 'Tuition Fees') _newValues.tuitionFees = _v;
      if (r.degree === 'Contracts') _newValues.contracts = _v;
      if (r.degree === 'Research Grants') _newValues.researchGrants = _v;
      if (r.degree === 'Endowment and Investment Income') _newValues.endowmentAndInvestmentIncome = _v;
      if (r.degree === 'Other') _newValues.other = _v;
    });

    dispatch(setIncome(_newValues));
  };

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ margin: "5% 0 -2% 0" }}>
        <center>III. Finance and Budget Statistics</center>
      </h3>
      <UBInfoTable
        columns={columns}
        initialRows={initialRows}
        SetValue={handleSetValue}
      />
    </Container>
  );
};

export default UBFinanceIncome;

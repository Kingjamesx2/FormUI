import React, { ChangeEvent } from "react";
import { Container, Box } from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UBInfoTable from "../../../../common/UBInfoTable/UBInfoTable";
import { useSelector, useDispatch } from "react-redux";
import {
  selectExpenditure,
  setExpenditure,
} from "../../../../../store/features/financeReportSlice";

const columns = ["2. Finance-Expenditures Bz$", ""];


export const UBFinanceExpenditures: React.FC = () => {
  const dispatch = useDispatch();
  const expenditures = useSelector(selectExpenditure);
  const initialRows = [
    { degree: "Teaching Staff Costs", "": expenditures.teachingStaffCosts},
    { degree: "Non-Teaching Staff Costs", "": expenditures.nonTeachingStaffCosts},
    { degree: "Administrative Cost", "":expenditures.administrationCosts},
  ];

  const handleCapitalExpendituresChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setExpenditure({ capitalExpenditures: e.target.value }));
  };

  const handleOtherExpendituresChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setExpenditure({ otherExpenditures: e.target.value }));
  };

  const handleSetValue = (value: any) => {
    let _newValues = { ...expenditures };

    value.forEach((r: any) => {
      const _v = Object.values(r)[1] as number;
      if (r.degree === "Teaching Staff Costs")
        _newValues.teachingStaffCosts = _v;
      if (r.degree === "Non-Teaching Staff Costs")
        _newValues.nonTeachingStaffCosts = _v;
      if (r.degree === "Administrative Cost")
        _newValues.administrationCosts = _v;
    });

    dispatch(setExpenditure(_newValues));
  };

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      {/* Section for Finance Expenditures */}
      <Box sx={{ mt: "-5%" }}>
        <UBInfoTable
          columns={columns}
          initialRows={initialRows}
          SetValue={handleSetValue}
        />
      </Box>

      {/* Section for Capital Expenditures */}
      <Box mb={-4.7}>
        <UBTextArea
          question="3. Capital Expenditures (List major projects below)"
          SetAnswer={handleCapitalExpendituresChange}
          value={expenditures.capitalExpenditures}
        />
      </Box>

      {/* Section for Other Expenditures */}
      <Box mb={-4.7}>
        <UBTextArea
          question="4. Other expenditures"
          SetAnswer={handleOtherExpendituresChange}
          value={expenditures.otherExpenditures}
        />
      </Box>
    </Container>
  );
};

export default UBFinanceExpenditures;

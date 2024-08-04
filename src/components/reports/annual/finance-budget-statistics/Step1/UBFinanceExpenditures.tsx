import React, { useState, ChangeEvent } from "react";
import { Container, Box } from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import UBInfoTable from "../../../../common/UBInfoTable/UBInfoTable";
import { useSelector, useDispatch } from "react-redux";
import { selectExpenditure, setExpenditure } from "../../../../../store/features/financeReportSlice";

const initialState = ["", "", ""];

const columns = ['9. Finance-Expenditures Bz$', ''];
const initialRows = [
  { degree: 'Teaching Staff Costs', '': ''},
  { degree: 'Non-Teaching Staff Costs', '': ''},
  { degree: 'Administrative Cost', '': ''},
];

export const UBFinanceExpenditures: React.FC = () => {
  const dispatch = useDispatch();
  const expenditures = useSelector(selectExpenditure);

  const [state, setState] = useState<string[]>(initialState);

  const handleCapitalExpendituresChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setExpenditure({ capitalExpenditures: e.target.value }));
  };

  const handleOtherExpendituresChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setExpenditure({ otherExpenditures: e.target.value }));
  };

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      {/* Section for Finance Expenditures */}
      <Box sx={{ mt: "-5%" }}>
        <UBInfoTable columns={columns} initialRows={initialRows} />
      </Box>

      {/* Section for Capital Expenditures */}
      <Box mb={-4.7}>
        <UBTextArea
          question="10. Capital Expenditures (List major projects below)"
          SetAnswer={handleCapitalExpendituresChange}
          value={expenditures.capitalExpenditures}
        />
      </Box>

      {/* Section for Other Expenditures */}
      <Box mb={-4.7}>
        <UBTextArea
          question="11. Other expenditures"
          SetAnswer={handleOtherExpendituresChange}
          value={expenditures.otherExpenditures}
        />
      </Box>
    </Container>
  );
};

export default UBFinanceExpenditures;

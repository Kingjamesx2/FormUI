import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";

export const UBDate: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "94.23%", backgroundColor: '#FFD954', ml: 2, p: 2, borderRadius: '8px'  }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label=""
          slotProps={{
            textField: {
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default UBDate;

import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";

export const UBDate: React.FC = () => {
  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "left",
      alignItems: "Left",
      // border: "1px solid black",
      width: "70%"
    }}
  >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label=""
        slotProps={{
          textField: {
            sx: {
              marginLeft: 20.5, // Adjust the margin for the TextField here
            },
          },
        }}
      />
    </LocalizationProvider>
  </Box>
  );
};

export default UBDate;

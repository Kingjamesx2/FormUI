import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

interface IUbDropdownProps {
  label: string;
  value: string;
  SetAnswer: (event: React.ChangeEvent<{ value: unknown }>) => void;
  options: { value: string; label: string }[];
}

export const UbDropdown: React.FC<IUbDropdownProps> = ({
  label,
  value,
  SetAnswer,
  options,
}) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
      }}
    >
      <Box
        style={{
          width: "50%", // Set the width to a shorter value
          marginLeft: "2%"
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-autowidth-label">
            {label}
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={value}
            onChange={SetAnswer}
            autoWidth
            label={label}
          >
            {options.map((o) => (
              <MenuItem key={o.value} value={o.value}>
                {o.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default UbDropdown;

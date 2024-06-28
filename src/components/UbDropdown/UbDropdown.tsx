import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Margin } from "@mui/icons-material";

interface ISelectComponentProps {
  label: string;
  value: string;
  handleSetValue: (event: React.ChangeEvent<{ value: unknown }>) => void;
  options: { value: string; label: string }[];
}

const SelectComponent: React.FC<ISelectComponentProps> = ({
  label,
  value,
  handleSetValue,
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
          marginLeft: "15%"
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
            onChange={handleSetValue}
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

export default SelectComponent;

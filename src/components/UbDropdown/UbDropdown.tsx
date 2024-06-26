import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";

interface IOption {
  value: string;
  label: string;
}

interface IDropdownProps {
  label: string;
  options?: IOption[];
  value?: string | undefined;
  handleSetValue?: (event: SelectChangeEvent) => void;
}

export const UbDropdown: React.FC<IDropdownProps> = ({
  label,
  options = [],
  value,
  handleSetValue,
}) => {
  return (
    <Box 
      sx={{  
        mt: 2,
        ml: 0,
        width: { xs: "100%", sm: "60%", md: "40%" }, 
        borderRadius: 1,
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={handleSetValue}
          autoWidth
          label={label}
        >
          {options.map((o) => (
            <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default UbDropdown;

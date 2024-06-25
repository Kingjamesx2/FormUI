import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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
    <div>
      <FormControl sx={{ m: 1, minWidth: 80, width: "40%" }}>
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
            <MenuItem value={o.value}>{o.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default UbDropdown;

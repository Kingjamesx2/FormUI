import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface IUBRadioButton {
  label: string;
  options: { value: string, label: string }[];
  handleSetValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const UBRadioButton: React.FC<IUBRadioButton> = ({ label, options, handleSetValue, value }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup value={value} onChange={handleSetValue}>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

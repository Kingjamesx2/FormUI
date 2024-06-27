import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from "@mui/material/Box";

interface IUBRadioButton {
  label: string;
  options: { value: string, label: string }[];
  handleSetValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  containerStyle?: React.CSSProperties;
}

export const UBRadioButton: React.FC<IUBRadioButton> = ({ label, options, handleSetValue, value }) => {
  return (
    <Box sx={{ 
      display: "flex", 
      flexDirection: "column", 
      width: "95.67%", 
      backgroundColor: '#FFD954', 
      ml: 2, 
      pt: 6,
      pl: 2,
      pb: 3, 
      borderRadius: '8px' 
    }}>
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
    </Box>
  );
};

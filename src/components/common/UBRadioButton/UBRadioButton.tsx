import React from "react";
import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

interface IUBRadioButtonProp {
  label: string;
  value: string;
  handleSetValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: { value: string; label: string }[];
}

export const UBRadioButton: React.FC<IUBRadioButtonProp> = ({
  label,
  value,
  handleSetValue,
  options,
}) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
      }}
      sx={{
        borderRadius: '8px',
      }}
    >
      <FormControl
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "9%",
          width: "30%"
        }}
      >
        <FormLabel>{label}</FormLabel>
        <RadioGroup value={value} onChange={handleSetValue}>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option.value}
              control={<Radio />}
              label={
                <span style={{ whiteSpace: 'normal', overflow: 'visible', textOverflow: 'clip' }}>
                  {option.label}
                </span>
              }
              sx={{
                '& .MuiFormControlLabel-label': {
                  whiteSpace: 'normal',
                  overflow: 'visible',
                  textOverflow: 'clip',
                },
              }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default UBRadioButton;

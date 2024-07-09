import React from "react";
import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Grid } from "@mui/material";

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
        marginTop: "10%",
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
          width: "65%",
          padding: "3%",
          backgroundColor: "#FFD954",
          borderRadius: "5px"
        }}
      >
        <FormLabel sx={{ color:"black", pb:"2%"}}>{label}</FormLabel>
        <RadioGroup value={value} onChange={handleSetValue}>
          <Grid container spacing={2}>
            {options.map((option, index) => (
              <Grid item xs={6} key={index}>
                <FormControlLabel
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
              </Grid>
            ))}
          </Grid>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default UBRadioButton;

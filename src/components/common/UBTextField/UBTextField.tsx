import React, { FC, InputHTMLAttributes } from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

interface IUBTextField extends InputHTMLAttributes<HTMLInputElement> {
  question?: string;
  SetAnswer: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  width?: number;
}

export const UBTextField: FC<IUBTextField> = ({
  question = "Faculty Mission Statement",
  SetAnswer,
  value = "",
  width = 800,
}) => {
  const theme = useTheme();

  return (
    <Box  style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      
    }}    
    sx={{ borderRadius: '10px'  }}>
      <FormControl
        fullWidth
        variant="standard"
        style={{
          width: width ? `${width}px` : "100%",
          maxWidth: "100%",
          borderRadius: '8px',
          marginTop: "5%",
          marginLeft: "1%", // Adjust the margin here
        }}
      >
        <InputLabel 
          htmlFor="standard-adornment-amount" 
          sx={{ fontSize: '20px', color: "black"
           }} // Adjust the font size here
        >
          {question}
        </InputLabel>
        <Input
          id="standard-adornment-amount"
          value={value}
          onChange={SetAnswer}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>
    </Box>
  );
};

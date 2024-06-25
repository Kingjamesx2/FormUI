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
    <Box sx={{ display: "flex", flexDirection: "column", width: "80%" }}>
      <FormControl
        fullWidth
        sx={{ m: 1 }}
        variant="standard"
        style={{
          width: width ? `${width}px` : "100%",
          maxWidth: "100%",
          [theme.breakpoints.down("sm")]: {
            width: "100%", // Full width on small screens
          },
          [theme.breakpoints.up("md")]: {
            width: width ? `${width}px` : "100%", // Custom width on medium and larger screens
          },
        }}
      >
        <InputLabel htmlFor="standard-adornment-amount">{question}</InputLabel>
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

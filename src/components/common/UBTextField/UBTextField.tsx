import React, { FC, InputHTMLAttributes } from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

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
  width = 80,
}) => {
  return (
    <FormControl
      fullWidth
      sx={{ m: 1 }}
      variant="standard"
      style={{ width: `${width}%` }}
    >
      <InputLabel htmlFor="standard-adornment-amount">{question}</InputLabel>
      <Input
        id="standard-adornment-amount"
        value={value}
        onChange={SetAnswer}
        startAdornment={<InputAdornment position="start"></InputAdornment>}
      />
    </FormControl>
  );
};

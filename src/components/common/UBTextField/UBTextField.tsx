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
  value?: string | number;
  width?: number;
  type?: string;
}

export const UBTextField: FC<IUBTextField> = ({
  question = "Faculty Mission Statement",
  SetAnswer,
  value = "",
  width = 800,
  type = "",
}) => {
  const theme = useTheme();

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "71%",
        marginTop: "10%",
        margin: "auto",
        padding: "2%",
      }}
      sx={{ borderRadius: "" }}
    >
      <FormControl
        fullWidth
        variant="standard"
        style={{
          width: width ? `${width}px` : "100%",
          maxWidth: "100%",
          borderRadius: "5px",
          padding: "4%",
          backgroundColor: "#FFD954",
        }}
      >
        <InputLabel
          htmlFor="standard-adornment-amount"
          sx={{ fontSize: "20px", color: "black", m: "3% 0% 8% 3%" }}
        >
          {question}
        </InputLabel>
        <Input
          sx={{ ml: "2%" }}
          id="standard-adornment-amount"
          value={value ?? ""}
          onChange={(e) => {
            if (type === "number" && !/^\d*$/.test(e.target.value)) {
              return;
            }
            SetAnswer(e);
          }}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          inputProps={type === "number" ? { inputMode: "numeric" } : {}}
          autoComplete="off"
        />
      </FormControl>
    </Box>
  );
};

import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface INextButtonProp {
  title: string;
  backgroundColor: string;
}

export const NextButton: React.FC<INextButtonProp> = () => {
  return (
    <Stack>
      <Button variant="contained" href="#contained-buttons">
        Next
      </Button>
    </Stack>
  );
};

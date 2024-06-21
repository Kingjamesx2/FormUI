import React from "react";
import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

interface IUBTextAreaProps {
  question?: string;
  SetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  maxRows?: number;
  minRows?: number;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export const UBTextArea: React.FC<IUBTextAreaProps> = ({
  question = "Ask a question?",
  SetAnswer,
  value = "",
  maxRows = 20,
  minRows = 8,
}) => {
  return (
    <Stack sx={{ backgroundColor: '#FFF', my: 2 }}>
      <Item sx={{ my: 1 }}>{question}</Item>
      <Item>
        <TextareaAutosize
          maxRows={maxRows}
          minRows={minRows}
          style={{ width: "100%", margin: '1px', boxSizing: 'border-box' }}
          value={value}
          onChange={SetAnswer}
          placeholder="Type your answer here"
        />
      </Item>
    </Stack>
  );
};

export default UBTextArea;

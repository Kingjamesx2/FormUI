import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Paper from "@mui/material/Paper";
// import div from "@mui/material/div";
import { Stack } from "@mui/material";
import { autoBatchEnhancer } from "@reduxjs/toolkit";

interface IUBTextAreaProps {
  question?: string;
  SetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  maxRows?: number;
  minRows?: number;
}

const QuestionItem = styled(Paper)(({ theme }) => ({
  backgroundColor: "#FFD954",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  boxShadow: "none",
  marginTop: theme.spacing(6), // Reduced margin top
  marginBottom: theme.spacing(0), // Reduced margin bottom
  borderBottomLeftRadius: "0",
  borderBottomRightRadius: "0",
}));

const AnswerItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "white" : "#FFD954",
  ...theme.typography.body2,
  textAlign: "left",
  padding: "10px",
  marginTop: theme.spacing(-2), // Reduced margin top
  borderBottomLeftRadius: "10",
  borderBottomRightRadius: "10",
}));

export const UBTextArea: React.FC<IUBTextAreaProps> = ({
  question = "Ask a question?",
  SetAnswer,
  value = "",
  maxRows = 10,
  minRows = 8,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
      }}
    >
      <div
        style={{
          width: "70%",
          boxSizing: "border-box",
        }}
      >
        <Stack>
          <QuestionItem>{question}</QuestionItem>
        </Stack>

        <AnswerItem>
          <TextareaAutosize
            maxRows={maxRows}
            minRows={minRows}
            style={{
              width: "100%",
              boxSizing: "border-box",
            }}
            value={value}
            onChange={SetAnswer}
            placeholder="Type your answer here"
          />
        </AnswerItem>
      </div>
    </div>
  );
};

export default UBTextArea;

import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Paper from "@mui/material/Paper";

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
  marginBottom: theme.spacing(0), // Reduced margin bottom
  borderBottomLeftRadius: '0',
  borderBottomRightRadius: '0',
}));

const AnswerItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#FFD954",
  ...theme.typography.body2,
  textAlign: "left",
  padding: "10px",
  marginTop: theme.spacing(0), // Reduced margin top
  borderBottomLeftRadius: '10',
  borderBottomRightRadius: '10',
}));

export const UBTextArea: React.FC<IUBTextAreaProps> = ({
  question = "Ask a question?",
  SetAnswer,
  value = "",
  maxRows = 20,
  minRows = 8,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{ padding: isSmallScreen ? "8px" : "16px" }}>
      <QuestionItem sx={{ fontSize: isSmallScreen ? "0.875rem" : "1rem" }}>
        {question}
      </QuestionItem>
      <AnswerItem>
        <TextareaAutosize
          maxRows={maxRows}
          minRows={minRows}
          style={{
            width: "100%",
            boxSizing: 'border-box',
            fontSize: isSmallScreen ? "0.875rem" : "0.8rem",
            padding: isSmallScreen ? "8px" : "16px"
          }}
          value={value}
          onChange={SetAnswer}
          placeholder="Type your answer here"
        />
      </AnswerItem>
    </div>
  );
};

export default UBTextArea;

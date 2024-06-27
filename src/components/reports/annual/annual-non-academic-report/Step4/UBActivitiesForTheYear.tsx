import React, { useState } from "react";
import { Container, IconButton, Box } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBUploadFile } from "../../../../common/UBUploadFile/UBUploadFile";

const initialState = ["", "", "", ""];

export const UBActivitiesForTheYear = () => {
  const [state, setState] = useState<string[]>(initialState);

  const handleSetAnswer = (
    index: number,
    value: string | FileList | null
  ) => {
    setState((prevState) => {
      const newState = [...prevState];
      newState[index] = value as string; // Assuming value is a string or file name/path
      return newState;
    });
  };

  const questions = [
    {
      question: "Name Of event: ",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleSetAnswer(0, e.target.value),
      type: "input",
      value: state[0],
    },
    {
      question: "Name of person/s in the pictures",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleSetAnswer(1, e.target.value),
      type: "textarea",
      value: state[1],
    },
    {
      question: "Summary of Events",
      handleSetAnswer: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleSetAnswer(2, e.target.value),
      type: "textarea",
      value: state[2],
    },
    {
      question: "Add Image",
      handleSetAnswer: (files: FileList | null) => {
        handleSetAnswer(3, files ? files[0].name : null); // Assuming handling file name here
      },
      type: "uploadFile",
      value: state[3],
    },
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    handleSetAnswer(3, files ? files[0].name : null);
  };

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3>
        <center>
          Activities for the year - List activities conducted during the year
          under review.
        </center>
      </h3>
      {questions.map((q, index) => (
        <Box key={index}  mb={-4.5}>
          {q.type === "textarea" ? (
            <UBTextArea
              question={q.question}
              SetAnswer={q.handleSetAnswer}
              value={q.value}
            />
          ) : q.type === "uploadFile" ? (
            <>
              <label>{q.question}</label>
              <IconButton component="label">
                <AddPhotoAlternateIcon />
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageUpload}
                />
              </IconButton>
              {q.value && <span>{q.value}</span>}
            </>
          ) : (
            <UBTextField
              question={q.question}
              SetAnswer={q.handleSetAnswer}
              value={q.value}
            />
          )}
        </Box>
      ))}
    </Container>
  );
};

export default UBActivitiesForTheYear;

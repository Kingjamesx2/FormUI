import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import UBRadioButton from "../../../../common/UBRadioButton/UBRadioButton";
import Box from "@mui/material/Box";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import IconButton from '@mui/material/IconButton';

const initialState = ["", "", ""];

const createNewContainerState = () => ({
  state: [...initialState],
  id: Date.now()
});

export const UBFacultyMeetings: React.FC = () => {
  const [containers, setContainers] = useState([{...createNewContainerState()}]);

  const handleSetAnswer = (containerId: number, index: number, value: string) => {
    setContainers((prevContainers) =>
      prevContainers.map((container) =>
        container.id === containerId
          ? { ...container, state: container.state.map((item, i) => (i === index ? value : item)) }
          : container
      )
    );
  };

  const questions = (containerId: number, state: string[]) => [
    {
      question: "Type of Meeting",
      handleSetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleSetAnswer(containerId, 0, e.target.value);
      },
      type: "dropdown",
      value: state[0],
      options: ["Option 1", "Option 2"], // Add appropriate options
    },
    {
      question: "Date of Meeting: ",
      handleSetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleSetAnswer(containerId, 1, e.target.value);
      },
      type: "input",
      value: state[1],
    },
    {
      question: "Minutes of Meeting (please attach the minutes of meetings)",
      handleSetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleSetAnswer(containerId, 2, e.target.value);
      },
      type: "input",
      value: state[2],
    },
  ];

  const handleAddContainer = () => {
    setContainers((prevContainers) => [...prevContainers, createNewContainerState()]);
  };

  const handleRemoveContainer = () => {
    setContainers((prevContainers) => {
      if (prevContainers.length > 1) {
        return prevContainers.slice(0, -1); // Remove the last container
      }
      return prevContainers; // Do nothing if there's only one container
    });
  };

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginBottom: "40px", marginTop: "50px" }}>
        <center>Faculty Meetings</center>
      </h3>
      {containers.map((container) => (
        <Box key={container.id} mb={4}>
          {questions(container.id, container.state).map((q, index) => (
            <Box key={index} mb={4}>
              {q.type === "textarea" ? (
                <UBTextArea
                  question={q.question}
                  SetAnswer={q.handleSetAnswer}
                  value={q.value}
                />
              ) : q.type === "dropdown" ? (
                <UbDropdown
                  label={q.question}
                  options={q.options}
                  handleSetValue={q.handleSetAnswer}
                  value={q.value}
                />
              ) : q.type === "radiobutton" ? (
                <Box sx={{ marginTop: "-50px" }}>
                  <UBRadioButton
                    label={q.question}
                    options={q.options}
                    handleSetValue={q.handleSetAnswerRadio}
                    value={q.value}
                  />
                  {q.additionalText && (
                    <UBTextField
                      question="Please specify:"
                      SetAnswer={q.handleSetAnswerText}
                      value={q.textValue}
                    />
                  )}
                </Box>
              ) : (
                <Box sx={{marginTop: "-60px"}}>
                <UBTextField
                  question={q.question}
                  SetAnswer={q.handleSetAnswer}
                  value={q.value}
                />
                </Box>
              )}
            </Box>
          ))}
        </Box>
      ))}
       <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <IconButton onClick={handleAddContainer} color="primary">
          <AddCircleRoundedIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={handleRemoveContainer} color="primary">
          <RemoveCircleOutlinedIcon fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  );
};

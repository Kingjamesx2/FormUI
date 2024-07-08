import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
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
      question: "Type of meeting",
      handleSetAnswer: (e: React.ChangeEvent<{ value: unknown }>) => {
        const selectedValue = e.target.value as string;
        handleSetAnswer(containerId, 0, selectedValue);
      },
      type: "dropdown",
      options: [
        {
          value: "Online",
          label: "Online",
        },
        {
          value: "Face to face",
          label: "Face to Face",
        },
      ],
      value: state[0],
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
    <Container>
        <h3 style={{ marginBottom: "4%", marginTop: "5%" }}>
        <center>Division Meetings</center>
      </h3>
      {containers.map((container) => (
        <Box key={container.id} mb={"2%"}>
          {questions(container.id, container.state).map((q, index) => (
            <Box key={index} mb={"-1%"}>
              {q.type === "textarea" ? (
                <UBTextArea
                  question={q.question}
                  SetAnswer={q.handleSetAnswer}
                  value={q.value}
                />
              ) : q.type === "dropdown" ? (
                <Box sx={{mb: "-4%", ml: "14.4%", pb:"5%", pt:"5%", width: "71%", backgroundColor:"#FFD954", borderRadius: "5px 5px 0 0"}}>
                <UbDropdown
                  label={q.question}
                  options={q.options}
                  handleSetValue={q.handleSetAnswer}
                  value={q.value}
                />
                </Box>
              ) : (
                <Box sx={{ marginTop: "-4%", ml:"14.5%", pb: "4%", width: "71%" , backgroundColor: "#FFD954", borderRadius: "0 0 5px 5px"}}>
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
        <IconButton onClick={handleAddContainer}>
          <AddCircleRoundedIcon fontSize="medium" />
        </IconButton>
        <IconButton onClick={handleRemoveContainer}>
          <RemoveCircleOutlinedIcon fontSize="medium" />
        </IconButton>
      </Box>
    </Container>
  );
};

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
import { useSelector, useDispatch } from "react-redux";
import { selectMeetings, setMeetings } from "../../../../../store/features/annualNonReportSlice";


const initialState = ["", "", ""];

const createNewContainerState = () => ({
  state: [...initialState],
  id: Date.now()
});

export const UBFacultyMeetings: React.FC = () => {
  const dispatch = useDispatch();
  const meetings = useSelector(selectMeetings);

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
      type: "input",
    },
    {
      question: "Date of Meeting: ",
      handleSetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleSetAnswer(containerId, 1, e.target.value);
      },
      type: "input",
    },
    {
      question: "Minutes of Meeting (please attach the minutes of meetings)",
      handleSetAnswer: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleSetAnswer(containerId, 2, e.target.value);
      },
      type: "input",
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
      <h3 style={{ marginBottom: "6%", marginTop: "5%" }}>
        <center>Faculty Meetings</center>
      </h3>
      {containers.map((container) => (
        <Box key={container.id} mb={"4.7%"}>
          {questions(container.id, container.state).map((q, index) => (
            <Box key={index} mb={"-1%"}>
              {q.type === "textarea" ? (
                <UBTextArea
                  question={q.question}
                  SetAnswer={(e) =>
                    dispatch(setMeetings({ meetingType: e.target.value}))
                  }                  
                  value={meetings.meetingType}
                />
              ) : q.type === "dropdown" ? (
                <Box sx={{mb: "-4%", ml: "14.4%", pb:"5%", pt:"5%", width: "71%", backgroundColor:"#FFD954", borderRadius: "5px 5px 0 0"}}>
                <UbDropdown
                  label={q.question}
                  options={q.options}
                  SetAnswer={(e) =>
                    dispatch(setMeetings({ meetingDate: e.target.value}))
                  }                  
                  value={meetings.meetingDate}
                />
                </Box>
              ) : (
                <Box sx={{ marginTop: "-4%", ml:"14.5%", pb: "4%", width: "71%" , backgroundColor: "#FFD954", borderRadius: "5px 5px 5px 5px"}}>
                <UBTextField
                  question={q.question}
                  SetAnswer={(e) =>
                    dispatch(setMeetings({ meetingMinutesURL: e.target.value}))
                  }                  
                  value={meetings.meetingMinutesURL}
                />
                </Box>
              )}
            </Box>
          ))}
        </Box>
      ))}
       <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <IconButton onClick={handleAddContainer}>
          <AddCircleRoundedIcon fontSize="medium" sx={{color: "#FFD954"}}/>
        </IconButton>
        <IconButton onClick={handleRemoveContainer}>
          <RemoveCircleOutlinedIcon fontSize="medium" sx={{color: "#FFD954"}}/>
        </IconButton>
      </Box>
    </Container>
  );
};

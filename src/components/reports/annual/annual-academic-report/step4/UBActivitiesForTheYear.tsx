import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import IconButton from '@mui/material/IconButton';

const initialQuestionState = {
  nameOfEvent: "",
  personInPictures: "",
  summaryOfEvents: "",
  image: "",
};

export const UBActivitiesForTheYear = () => {
  const [containers, setContainers] = useState([initialQuestionState]);

  const handleSetAnswer = (
    containerIndex: number,
    questionKey: keyof typeof initialQuestionState,
    value: string | FileList | null
  ) => {
    setContainers((prevContainers) => {
      const newContainers = [...prevContainers];
      newContainers[containerIndex] = {
        ...newContainers[containerIndex],
        [questionKey]: value as string, // Assuming value is a string or file name/path
      };
      return newContainers;
    });
  };

  const addContainer = () => {
    setContainers((prevContainers) => [...prevContainers, initialQuestionState]);
  };

  const removeContainer = (index: number) => {
    if (index > 0) { // Ensure the first container is not removed
      setContainers((prevContainers) =>
        prevContainers.filter((_, i) => i !== index)
      );
    }
  };

  const handleImageUpload = (containerIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    handleSetAnswer(containerIndex, "image", files ? files[0].name : null);
  };

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginTop: "5%", marginBottom: "1%" }}>
        <center>Activities for the year - List activities conducted during the year under review.</center>
      </h3>
      {containers.map((container, containerIndex) => (
        <Box key={containerIndex} mb={"5%"} p={"2%"} >
          <Box mb={"-4.4%"} display="flex" alignItems="Left" sx={{width: "69.9%", border: "1px solid", backgroundColor: "#FFD954", ml: "14.4%", borderTopLeftRadius: "5px", borderTopRightRadius: "5px"}}>
            <Box sx={{ display: "flex",  ml: "-10%", mb: "4%", width: "80%", }}>
              <UBTextField
                question="Name Of event: "
                SetAnswer={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleSetAnswer(containerIndex, "nameOfEvent", e.target.value)
                }
                value={container.nameOfEvent}
              />
            </Box>
            <Box sx={{ ml:"-5%", mt: "1.5%"}}>
              <label>Add Image</label>
              <IconButton component="label">
                <AddPhotoAlternateIcon />
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => handleImageUpload(containerIndex, e)}
                />
              </IconButton>
              {container.image && <span>{container.image}</span>}
            </Box>
          </Box>
          <Box mb={"-4.5%"} sx={{ ml:"0.2%" , width: "98.5%"}}>
            <UBTextField
              question="Name of person/s in the pictures"
              SetAnswer={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSetAnswer(containerIndex, "personInPictures", e.target.value)
              }
              value={container.personInPictures}
            />
          </Box>
          <Box mb={"-4.5%"} mt={"-7.2%"} ml={"-0.41%"} width={"99.84%"}>
            <UBTextArea
              question="Summary of Events"
              SetAnswer={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSetAnswer(containerIndex, "summaryOfEvents", e.target.value)
              }
              value={container.summaryOfEvents}
            />
          </Box>
          <Box display="flex" justifyContent="center" sx={{ mt: '5%' }}>
            <IconButton onClick={addContainer}>
              <AddCircleRoundedIcon />
            </IconButton>
            {containerIndex > 0 && (
              <IconButton onClick={() => removeContainer(containerIndex)}>
                <RemoveCircleOutlinedIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default UBActivitiesForTheYear;

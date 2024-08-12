import React, { useState, useEffect } from "react";
import { Container, Box, IconButton } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { useSelector, useDispatch } from "react-redux";
import {
  IActivity,
  selectActivities,
  addNewActivity,
  updateActivity,
} from "../../../../../store/features/annualReportSlice";

export const UBActivitiesForTheYear = () => {
  const dispatch = useDispatch();
  const activitiesFromStore = useSelector(selectActivities);
  const [activities, setActivitiesState] = useState([...activitiesFromStore]);

  useEffect(() => {
    setActivitiesState([...activitiesFromStore]);
  }, [activitiesFromStore]);

  const handleAddActivity = () => {
    dispatch(addNewActivity());
  };

  const handleRemoveActivity = (index: number) => {
    if (index > 0) {
      const newActivities = activities.filter((_, i) => i !== index);
      setActivitiesState(newActivities);
    }
  };

  const handleChange = (index: number, field: keyof IActivity, value: any) => {
    console.log(index,field, value)
    dispatch(updateActivity({ index, field, value }));
  };

  const handleImageChange = (index: number, files: FileList) => {
    console.log('files --->>. ', files)
    const imageURLs = Array.from(files).map((file) => URL.createObjectURL(file));
    handleChange(index, "eventPicture", imageURLs);
  };

  return (
    <Container sx={{ width: 1, m: 1, mb: "100px", p: 1 }}>
      <h3 style={{ marginBottom: "2%", marginTop: "6%" }}>
        <center>
          Activities for the year - List activities conducted during the year
          under review.
        </center>
      </h3>

      {activities.map((activity, index) => (
        <Box key={index} mb={4}>
          <Box mb={-6.5}>
            <UBTextField
              question="Name of Event"
              SetAnswer={(e) =>
                handleChange(index, "eventName", e.target.value)
              }
              value={activity.eventName}
            />
          </Box>

          <Box mb={-6.5}>
            <UBTextField
              question="Name of person/s in the pictures"
              SetAnswer={(e) =>
                handleChange(index, "personsInPicture", e.target.value)
              }
              value={activity.personsInPicture}
            />
          </Box>

         
          <Box mb={"0%"} sx={{ width: "101.4%", ml: "-0.7%", mt: "-7%"}}>
            <UBTextArea
              question="Summary of the event."
              SetAnswer={(e) =>
                handleChange(index, "eventSummary", e.target.value)
              }
              value={activity.eventSummary}
            />
          </Box>

          <Box sx={{ width: "69%", ml: "14.5%", mb: "0%", p: "1%", bgcolor: "#FFD954"}}>
            <IconButton
              size="small"
              aria-label="upload picture"
              component="label"
            >
              <AddPhotoAlternateOutlinedIcon
                sx={{ color: "", fontSize: 30 }}
              />
              <input
                hidden
                accept="image/*"
                type="file"
                multiple
                onChange={(e) =>
                  handleImageChange(index, e.target.files)
                }
              />
            </IconButton>
            <Box>
              {activity.eventPicture && activity.eventPicture.map((url, picIndex) => (
                <img
                  key={picIndex}
                  src={url}
                  alt={`Preview ${picIndex + 1}`}
                  style={{ width: "100px", height: "100px", margin: "5px" }}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: "2%" }}>
            <IconButton onClick={handleAddActivity}>
              <AddCircleRoundedIcon sx={{color: "#FFD954", cursor: "pointer" }} />
            </IconButton>
            {index > 0 && (
              <IconButton onClick={() => handleRemoveActivity(index)}>
                <RemoveCircleOutlinedIcon sx={{ color: "#FFD954", cursor: "pointer", ml: 1  }} />
              </IconButton>
            )}
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default UBActivitiesForTheYear;
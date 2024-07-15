import React, { useState } from "react";
import { Container, Box, Grid, IconButton } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { useSelector, useDispatch } from "react-redux";
import {
  IActivity,
  selectActivities,
  setActivities,
  addNewActivity,
  updateActivity
} from "../../../../../store/features/annualReportSlice";

export const UBActivitiesForTheYear = () => {
  const dispatch = useDispatch();
  const activitiesFromStore = useSelector(selectActivities);
  const [activities, setActivitiesState] = useState([...activitiesFromStore]);

  const handleAddActivity = () => {
    dispatch(addNewActivity())
  };

  const handleRemoveActivity = (index: number) => {
    if (index > 0) { // Prevent removing the first container
      const newActivities = activities.filter((_, i) => i !== index);
      setActivitiesState(newActivities);
    }
  };

  const handleChange = (index: number, field: keyof IActivity, value: any) => {
    dispatch(updateActivity({ index, field, value}))
  };

  return (
    <Container sx={{ width: 1, m: 1, mb: "100px", p: 1 }}>
      <h3 style={{ marginBottom: "6%", marginTop: "6%" }}>
        <center>
          Activities for the year - List activities conducted during the year
          under review.
        </center>
      </h3>

      {activities.map((activity, index) => (
        <Box key={index} mb={4}>
          <Grid container spacing={2} alignItems="center" sx={{ width: "71%", p: "1%", ml: "14.5%", mb: "-3%", bgcolor: "#FFD954", borderRadius: "5px" }}>
            <Grid item xs={10} sx={{ ml: "-10% " }}>
              <UBTextField
                question="Name of Event"
                SetAnswer={(e) =>
                  handleChange(index, "eventName", e.target.value)
                }
                value={activity.eventName}
              />
            </Grid>
            <Grid item xs={2}>
              <IconButton>
                <AddPhotoAlternateOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Box mb={-6.5}>
            <UBTextField
              question="Name of person/s in the pictures"
              SetAnswer={(e) =>
                handleChange(index, "personsInPicture", e.target.value)
              }
              value={activity.personsInPicture}
            />
          </Box>

          <Box mb={-6.5}>
            <UBTextField
              question="Month of Event."
              SetAnswer={(e) =>
                handleChange(index, "eventMonth", e.target.value)
              }
              value={activity.eventMonth}
            />
          </Box>

          <Box mb={"-4.7"} sx={{ width: "101.4%", ml: "-0.7%", mt: "-7%" }}>
            <UBTextArea
              question="Summary of events"
              SetAnswer={(e) =>
                handleChange(index, "eventSummary", e.target.value)
              }
              value={activity.eventSummary}
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: "2%" }}>
            <AddCircleRoundedIcon sx={{ color: "#FFD954", cursor: 'pointer' }} onClick={handleAddActivity} />
            {index > 0 && (
              <RemoveCircleOutlinedIcon sx={{ color: "#FFD954", cursor: 'pointer', ml: 2 }} onClick={() => handleRemoveActivity(index)} />
            )}
          </Box>
        </Box>
      ))}

      {/* <Box sx={{ display: 'flex', justifyContent: 'center', mt: "2%" }}>
        <AddCircleRoundedIcon sx={{ color: "#FFD954", cursor: 'pointer' }} onClick={handleAddActivity} />
      </Box> */}
    </Container>
  );
};

export default UBActivitiesForTheYear;

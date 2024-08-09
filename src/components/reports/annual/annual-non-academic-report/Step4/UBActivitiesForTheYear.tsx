import { useState, useEffect } from "react";
import { Container, Box, IconButton, CircularProgress } from "@mui/material";
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
  // selectAnnualNonReport,
  updateActivity,
} from "../../../../../store/features/annualNonReportSlice";
// import { useUploadFileMutation } from "./../../../../../store/services/uploadFileAPI";
import { RootState } from "../../../../../store/store"; // Import your RootState or relevant type

// Function to convert JSON to FormData
// function jsonToFormData(json: Record<string, any>): FormData {
//   const formData = new FormData();
//   Object.keys(json).forEach((key) => {
//     const value = json[key];
//     if (typeof value === "object" && !(value instanceof File)) {
//       formData.append(key, JSON.stringify(value));
//     } else {
//       formData.append(key, value);
//     }
//   });
//   return formData;
// }

export const UBActivitiesForTheYear = () => {
  const dispatch = useDispatch();
  const activitiesFromStore = useSelector(selectActivities);
  const [activities, setActivitiesState] = useState([...activitiesFromStore]);
  // const [uploadFile] = useUploadFileMutation();
  const [isUploading, setIsUploading] = useState(false);

  // Get token from the Redux store
  const token = useSelector((state: RootState) => state.auth.token);

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
    dispatch(updateActivity({ index, field, value }));
  };

  const handleImageChange = async (index: number, files: FileList | null) => {
    if (!files || !files.length) return;

    setIsUploading(true);

    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("file", file)); // Use 'file' as the key

    try {
      const response = await fetch("https://api.ub.edu.bz/api/uploadPhoto", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Add token to headers
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Upload response:", data); // Log the response for debugging

      // Check if the expected data structure is present
      if (data && Array.isArray(data.files)) {
        const imageURLs = data.files.map((file: any) => file.url); // Ensure this matches your response format
        handleChange(index, "eventPicture", imageURLs);
      } else {
        console.error("Unexpected response format:", data);
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    } finally {
      setIsUploading(false);
    }
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

          <Box mb={-6.5}>
            <UBTextField
              question="Month of Event."
              SetAnswer={(e) =>
                handleChange(index, "eventMonth", e.target.value)
              }
              value={activity.eventMonth}
            />
          </Box>

          <Box mb={"0%"} sx={{ width: "101.4%", ml: "-0.7%", mt: "-7%" }}>
            <UBTextArea
              question="Summary of the event."
              SetAnswer={(e) =>
                handleChange(index, "eventSummary", e.target.value)
              }
              value={activity.eventSummary}
            />
          </Box>

          <Box
            sx={{
              width: "69%",
              ml: "14.5%",
              mb: "0%",
              p: "1%",
              bgcolor: "#FFD954",
            }}
          >
            <IconButton
              size="small"
              aria-label="upload picture"
              component="label"
            >
              <AddPhotoAlternateOutlinedIcon sx={{ color: "", fontSize: 30 }} />
              <input
                hidden
                accept="image/*"
                type="file"
                multiple
                onChange={(e) => {
                  const files = e.target.files;
                  if (files) {
                    handleImageChange(index, files);
                  }
                }}
              />
            </IconButton>

            {isUploading && <CircularProgress size={24} />}

            <Box>
              {activity.eventPicture &&
                activity.eventPicture.map((picture, picIndex) => (
                  <img
                    key={picIndex}
                    src={picture.pictureURL}
                    alt={`Preview ${picIndex + 1}`}
                    style={{ width: "100px", height: "100px", margin: "5px" }}
                  />
                ))}
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: "2%" }}>
            <IconButton onClick={handleAddActivity}>
              <AddCircleRoundedIcon
                sx={{ color: "#FFD954", cursor: "pointer" }}
              />
            </IconButton>
            {index > 0 && (
              <IconButton onClick={() => handleRemoveActivity(index)}>
                <RemoveCircleOutlinedIcon
                  sx={{ color: "#FFD954", cursor: "pointer", ml: 1 }}
                />
              </IconButton>
            )}
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default UBActivitiesForTheYear;

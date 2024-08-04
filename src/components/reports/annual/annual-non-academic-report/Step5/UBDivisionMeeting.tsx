import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import UBRadioButton from "../../../../common/UBRadioButton/UBRadioButton";
import Box from "@mui/material/Box";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMeetings,
  addNewMeeting,
  updateMeeting,
  IMeeting,
} from "../../../../../store/features/annualNonReportSlice";


export const UBFacultyMeetings: React.FC = () => {
  const dispatch = useDispatch();
  const meetingsFromStore = useSelector(selectMeetings);
  const [meetings, setMeetingsState] = useState([...meetingsFromStore]);

  useEffect(() => {
    setMeetingsState([...meetingsFromStore]);
  }, [meetingsFromStore]);

  const handleAddMeetings = () => {
    dispatch(addNewMeeting());
  };

  const handleRemoveMeetings = (index: number) => {
    if (index > 0) {
      const newMeetings = meetings.filter((_, i) => i !== index);
      setMeetingsState(newMeetings);
    }
  };

  const handleChange = (index: number, field: keyof IMeeting, value: any) => {
    dispatch(updateMeeting({ index, field, value }));
  };
  return (
    <Container sx={{ width: 1, m: 1, mb: "-4%", p: 1 }}>
      <h3 style={{ marginBottom: "2%", marginTop: "5%" }}>
        <center>Division Meetings</center>
      </h3>

      {meetings.map((meetings, index) => (
        <Box key={index} mb={2}>
          <Box mb={-6.5}>
            <UBTextField
              question="Type of Meeting"
              SetAnswer={(e) =>
                handleChange(index, "meetingType", e.target.value)
              }
              value={meetings.meetingType}
            />
          </Box>

          <Box mb={-6.5}>
            <UBTextField
              question="Date of Meeting"
              SetAnswer={(e) =>
                handleChange(index, "meetingDate", e.target.value)
              }
              value={meetings.meetingDate}
            />
          </Box>

          <Box mb={-6.5}>
            <UBTextField
              question="Minutes of Meeting (please attach the minutes of meetings)"
              SetAnswer={(e) =>
                handleChange(index, "meetingMinutesURL", e.target.value)
              }
              value={meetings.meetingMinutesURL}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: "4%" }}>
            <IconButton onClick={handleAddMeetings}>
              <AddCircleRoundedIcon
                sx={{ color: "#FFD954", cursor: "pointer" }}
              />
            </IconButton>
            {index > 0 && (
              <IconButton onClick={() => handleRemoveMeetings(index)}>
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

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import Snackbar from "@mui/material/Snackbar";
import { useUpdateHRReportMutation } from "../../../../store/services/HRReportApi";
import { selectHRReport } from "../../../../store/features/HRReportSlice";

const UpdateHumanResourceStatisticsForm = () => {
  const [saveForm, { data, error, isSuccess, isLoading }] =
    useUpdateHRReportMutation();
  const HRReport = useSelector(selectHRReport);
  const [isOpen, setisOpen] = useState(false);
  const [message, setMessage] = useState("false");

  const handleFormUpdate = async () => {
    await saveForm(HRReport);
  };

  useEffect(() => {
    if (isSuccess && !isLoading) setMessage("Saved successfully");
    if (error && !isLoading) setMessage("Error saving form");
  }, [data, error, isSuccess]);

  return (
    <>
      <Button
        variant="contained"
        onClick={handleFormUpdate}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={isOpen}
          autoHideDuration={3000}
          onClose={() => setisOpen(false)}
          message={message}
        />
      </Box>
    </>
  );
};

export default UpdateHumanResourceStatisticsForm;

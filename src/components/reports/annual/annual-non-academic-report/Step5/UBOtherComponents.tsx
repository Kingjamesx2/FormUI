import React from "react";
import Container from "@mui/material/Container";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import {
  setOtherComments,
  selectAnnualNonReport,
} from "../../../../../store/features/annualNonReportSlice";
import { RootState } from "../../../../../store/store"; // Import your RootState or relevant type

export const UBOtherComponents: React.FC = () => {
  const dispatch = useDispatch();
  const annualNonReport = useSelector(selectAnnualNonReport);

  // Get token from the Redux store
  const token = useSelector((state: RootState) => state.auth.token);

  const downloadPDF = async (id: string) => {
    try {
      // Fetch the PDF file
      const response = await fetch(`https://api.ub.edu.bz/api/generateStaffPdf/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/pdf",
          Authorization: `Bearer ${token}`, // Add token to headers
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Convert the response to a blob
      const blob = await response.blob();

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link element
      const a = document.createElement("a");
      a.href = url;
      a.download = "Annual Report Non-Academic Division.pdf"; // The filename the user will see

      // Append the link to the body
      document.body.appendChild(a);

      // Programmatically click the link to trigger the download
      a.click();

      // Remove the link after triggering the download
      a.remove();

      // Optionally, revoke the object URL after a short delay to release memory
      setTimeout(() => window.URL.revokeObjectURL(url), 100);
    } catch (error) {
      console.error("Error downloading the PDF:", error);
    }


  };

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginBottom: "-2%", marginTop: "10%" }}>
        <center>Other Components</center>
      </h3>
      <Box mb={-4.5}>
        <UBTextArea
          question="1. Use this section to provide information not included in the previous sections but which you believe is pertinent for this report. (optional)"
          SetAnswer={(e) => dispatch(setOtherComments(e.target.value))}
          value={annualNonReport.otherComments}
        />
      </Box>

      {/* <button onClick={downloadPDF}>Generate PDF</button> */}
    </Container>
  );
};

export default UBOtherComponents;

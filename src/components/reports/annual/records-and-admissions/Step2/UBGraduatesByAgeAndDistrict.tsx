import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import {
  // selectGraduates,
  setGraduates,
  selectRecordReport
} from "../../../../../store/features/recordsReportSlice";
import { RootState } from "../../../../../store/store"; // Import your RootState or relevant type

export const UBGraduatesByAgeAndDistrict: React.FC = () => {
  const dispatch = useDispatch();
  const recordReport = useSelector(selectRecordReport);
  const reportId = recordReport._id;
  const token = useSelector((state: RootState) => state.auth.token);

  // const [state, setState] = useState<string[]>(initialState);
  const downloadPDF = async (id: string) => {
    try {
      // Fetch the PDF file
      const response = await fetch(
        `https://api.ub.edu.bz/api/generateRecordsPdf/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/pdf",
            Authorization: `Bearer ${token}`, // Add token to headers
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Check if the response is a PDF
      const contentType = response.headers.get("Content-Type");
      if (contentType !== "application/pdf") {
        throw new Error(`Unexpected content type: ${contentType}`);
      }

      // Convert the response to a blob
      const blob = await response.blob();

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link element
      const a = document.createElement("a");
      a.href = url;
      a.download = "Report and Records.pdf"; // The filename the user will see

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
    <Container sx={{ width: 1, m: "auto", p: 1 }}>
      <Box mb={-4.7} sx={{ ml: "2%", mt: "-5%" }}>
        <UBTextArea
          question="7. Graduates by age (for the last Academic year)"
          SetAnswer={(e) =>
            dispatch(setGraduates({ GraduatesByAge: e.target.value }))
          }
          value={recordReport.graduates.GraduatesByAge}
        />
      </Box>
      <Box mb={-4.7} sx={{ ml: "2%", mt: "-5%" }}>
        <UBTextArea
          question="8. Graduates by Districts in Belize and other International Countries"
          SetAnswer={(e) =>
            dispatch(setGraduates({ GraduatesByDistrict: e.target.value }))
          }
          value={recordReport.graduates.GraduatesByDistrict}
        />
      </Box>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "7rem",
          position: "relative",
          top: "5.8rem",
        }}
      >
        <button
          onClick={() => downloadPDF(reportId)}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
          }}
        >
          Download PDF
        </button>
      </div>
    </Container>
  );
};

export default UBGraduatesByAgeAndDistrict;

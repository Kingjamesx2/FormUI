import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import { useSelector, useDispatch } from "react-redux";
import {
  // selectInvestments,
  selectFinanceReport,
  setInvestments,
} from "../../../../../store/features/financeReportSlice";
import { RootState } from "../../../../../store/store"; // Import your RootState or relevant type

export const CapitalExpenditureProjects: React.FC = () => {
  const dispatch = useDispatch();
  const financeReport = useSelector(selectFinanceReport);
  const financeReportId = financeReport._id;
  const token = useSelector((state: RootState) => state.auth.token);

  const downloadPDF = async (id: string) => {
    try {
      // Fetch the PDF file
      const response = await fetch(
        `https://api.ub.edu.bz/api/generateFinancePdf/${id}`,
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
      a.download = " Finance and Budget Statistics Report.pdf"; // The filename the user will see

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

  const handleSetAnswer = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setInvestments({ projectInvestment1: e.target.value }));
  };

  return (
    <div>
      <Container sx={{ width: 1, m: 1, p: 1 }}>
        <Box sx={{ mt: "-2.5%" }}>
          <UBTextArea
            question="5. Major Capital Expenditure Projects / Investments (buildings etc.)"
            SetAnswer={handleSetAnswer}
            value={financeReport.investments.projectInvestment1}
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
            onClick={() => downloadPDF(financeReportId)}
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
            }}
          >
            Download PDF
          </button>
        </div>
      </Container>
    </div>
  );
};

export default CapitalExpenditureProjects;

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

// Custom styled DataGrid
const CustomDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "yellow", // Background color for the header
    color: theme.palette.text.primary,
  },
  "& .MuiDataGrid-cell": {
    backgroundColor: "#f5f5f5", // Background color for rows
  },
}));

export const UBFormsChecks: React.FC = () => {
  const [reports, setReports] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    // Fetch data from the API
    const fetchReports = async () => {
      try {
        const response = await fetch(
          "https://api.ub.edu.bz/api/allReports/faculty-finance-human_resources-records-staff",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Add token to headers
            },
          }
        );
        const result = await response.json();

        if (response.ok) {
          setReports(result.data.reportData || []);
        } else {
          setError(result.message || "Failed to fetch data");
        }
      } catch (error) {
        setError("An error occurred while fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, [token]);

  // Function to handle downloading the PDF
  const handleDownloadPDF = async (
    id: string,
    reportType: string,
    fileName: string
  ) => {
    try {
      // Define the API endpoint based on the report type
      let apiUrl = "";
      switch (reportType) {
        case "faculty":
          apiUrl = `https://api.ub.edu.bz/api/generateFacultyPdf/${id}`;
          break;
        case "staff":
          apiUrl = `https://api.ub.edu.bz/api/generateStaffPdf/${id}`;
          break;
        case "finance":
          apiUrl = `https://api.ub.edu.bz/api/generateFinancePdf/${id}`;
          break;
        case "HumanResources":
          apiUrl = `https://api.ub.edu.bz/api/generateHRPdf/${id}`;
          break;
        case "records":
          apiUrl = `https://api.ub.edu.bz/api/generateRecordsPdf/${id}`;
          break;
        default:
          throw new Error("Invalid report type");
      }

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/pdf",
          Authorization: `Bearer ${token}`,
        },
      });

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
      a.download = fileName; // The filename the user will see

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

  // Map the fetched data to the DataGrid rows format
  const rows = reports.map((report) => ({
    id: report._id, // Ensure the id field is correctly set
    name: report.name,
    reportType: report.reportType,
    formSubmitted: report.formSubmitted, // Add formSubmitted property
  }));
  console.log(rows);

  // Define columns for DataGrid
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "User Name",
      flex: 1,
      editable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "reportType",
      headerName: "Report Type",
      flex: 1,
      editable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "downloadPDF",
      headerName: "Download PDF",
      description: "Download the PDF file",
      sortable: false,
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        const { formSubmitted, id, reportType } = params.row;
        let fileName = "";

        // Determine the file name based on the report type
        switch (reportType) {
          case "faculty":
            fileName = "Annual Report Academic Division.pdf";
            break;
          case "staff":
            fileName = "Annual Report Non-Academic Division.pdf";
            break;
          case "finance":
            fileName = "Finance and Budget Statistics Report.pdf";
            break;
          case "HumanResources":
            fileName = "Human Statistics Report.pdf";
            break;
          case "records":
            fileName = "Report and Records.pdf";
            break;
          default:
            fileName = "Report.pdf";
        }

        return (
          <Button
            variant="contained"
            size="small"
            onClick={() => handleDownloadPDF(id, reportType, fileName)}
            disabled={!formSubmitted}
            sx={{
              backgroundColor: formSubmitted ? "blue" : "gray",
              cursor: formSubmitted ? "pointer" : "not-allowed",
            }}
          >
            {formSubmitted ? "Download PDF" : "Not Available"}
          </Button>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        px: 2, // Add horizontal padding
      }}
    >
      <Box
        sx={{
          height: 580,
          width: {
            xs: "100%", // Full width on extra-small screens
            sm: "90%", // 90% width on small screens
            md: "75%", // 75% width on medium screens
            lg: "60%", // 60% width on large screens
          },
        }}
      >
        <CustomDataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
        />
      </Box>
    </Box>
  );
};

export default UBFormsChecks;

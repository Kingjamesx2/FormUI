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
    backgroundColor: "yellow",
    color: theme.palette.text.primary,
  },
  "& .MuiDataGrid-cell": {
    backgroundColor: "#f5f5f5",
  },
}));

export const UBCheckForm: React.FC = () => {
  const [reports, setReports] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
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

  const filteredReports = reports.filter((report) => {
    if (report.name === "Rose Pineda" && report.reportType === "records") {
      return true;
    }

    const facultyNames = [
      // "James Faber",
      "Luis Herrera",
      "Bernard Watler",
      "Thisbe Usher",
      "Lydia Thurton",
      "Lisa Johnson",
      "Apolonio Aguilar",
      "Stephanie Windsor",
    ];

    const staffNames = [
      "Luis Herrera",
      "Francis Burns",
      "akantun",
      "egbert.irving",
      "carisa.carrillo",
      "twilliams",
      "Lugie Cruz",
      "Freida Palma",
      "Rose Pindea",
      "Marcia Commissiong",
      "Martin Cuellar",
      "Jake Snaddon",
      "Roy Polonio",
      "Trevelee Williams",
      "Maximilliano Ortega",
      "Caryn Guerrero",
      "Ian Sangster",
      "John Salam",
      "Joyanne De Four-Babb",
      "Delmer Tzib",
      "Derrick Conorqui",
      "Stephanie Windsor",
    ];

    const financeNames = ["Ian Sangster"];

    const HrNames = ["Caryn Guerrero"];

    if (facultyNames.includes(report.name) && report.reportType === "faculty") {
      return true;
    }

    if (staffNames.includes(report.name) && report.reportType === "staff") {
      return true;
    }

    if (financeNames.includes(report.name) && report.reportType === "finance") {
      return true;
    }

    if (
      HrNames.includes(report.name) &&
      report.reportType === "HumanResources"
    ) {
      return true;
    }

    return false;
  });

  // Map the filtered data to DataGrid rows
  const rows = filteredReports.map((report) => ({
    id: report._id,
    name: report.name,
    reportType: report.reportType,
    formSubmitted: report.formSubmitted,
  }));

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
        const fileName = "Report and Records.pdf";

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

  const handleDownloadPDF = async (
    id: string,
    reportType: string,
    fileName: string
  ) => {
    try {
      // Define the API endpoint based on the report type
      let apiUrl = "";
      switch (reportType) {
        case "records":
          apiUrl = `https://api.ub.edu.bz/api/generateRecordsPdf/${id}`;
          break;
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

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        px: 2,
      }}
    >
      <Box
        sx={{
          height: 580,
          width: {
            xs: "100%",
            sm: "90%",
            md: "75%",
            lg: "60%",
          },
        }}
      >
        <CustomDataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 12,
              },
            },
          }}
          pageSizeOptions={[12]}
        />
      </Box>
    </Box>
  );
};

export default UBCheckForm;

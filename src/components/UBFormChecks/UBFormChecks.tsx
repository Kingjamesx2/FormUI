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
      const { isSubmitted, _id } = params.row;
      return (
        <Button
          variant="contained"
          size="small"
          onClick={() => handleDownloadPDF(_id)}
          disabled={!isSubmitted}
          sx={{
            backgroundColor: isSubmitted ? "blue" : "gray",
            cursor: isSubmitted ? "pointer" : "not-allowed",
          }}
        >
          {isSubmitted ? "Download PDF" : "Not Available"}
        </Button>
      );
    },
  },
];

const handleDownloadPDF = (id: string) => {
  console.log(`Downloading PDF for row with id: ${id}`);
};

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Map the fetched data to the DataGrid rows format
  const rows = reports.map((report) => ({
    id: report._id,
    name: report.name,
    reportType: report.reportType,
    isSubmitted: report.isSubmitted, // Add isSubmitted property
  }));

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

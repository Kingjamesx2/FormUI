// import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import { RootState } from "../../store/store";
// import { useSelector } from "react-redux";
// import { useFetchAnnualReportQuery } from "../../store/services/annualReportAPI";
// import { useFetchAnnualNonReportQuery } from "../../store/services/annualNonReportAPI";
// import { useFetchRecordsReportQuery } from "../../store/services/recordsReportAPI";
// import { useFetchHRReportQuery } from "../../store/services/HRReportApi";
// import { useFetchFinanceReportQuery } from "../../store/services/financeReportAPI";
// import { selectName, selectUsername } from "../../store/features/authSlice";
// import { selectFinanceReport } from "../../store/features/financeReportSlice";
// import { selectAnnualReport } from "../../store/features/annualReportSlice";
// import { selectRecordReport } from "../../store/features/recordsReportSlice";
// import { selectHRReport } from "../../store/features/HRReportSlice";
// import { selectAnnualNonReport } from "../../store/features/annualNonReportSlice";

// // Custom styled DataGrid
// const CustomDataGrid = styled(DataGrid)(({ theme }) => ({
//   "& .MuiDataGrid-columnHeaders": {
//     backgroundColor: "yellow", // Background color for the header
//     color: theme.palette.text.primary,
//   },
//   "& .MuiDataGrid-cell": {
//     backgroundColor: "#f5f5f5", // Background color for rows
//   },
// }));

// const columns: GridColDef[] = [
  
//   {
//     field: "name",
//     headerName: "User Name",
//     flex: 1,
//     editable: false,
//     headerAlign: "center",
//     align: "center",
//   },
//   {
//     field: "reportType",
//     headerName: "Report Type",
//     flex: 1,
//     editable: false,
//     headerAlign: "center",
//     align: "center",
//   },
//   {
//     field: "downloadPDF",
//     headerName: "Download PDF",
//     description: "Download the PDF file",
//     sortable: false,
//     flex: 1,
//     headerAlign: "center",
//     align: "center",
//     renderCell: (params) => {
//       const { formSubmitted, id } = params.row;
//       return (
//         <Button
//           variant="contained"
//           size="small"
//           onClick={() => formSubmitted && downloadAnnualPDF(id)}
//           disabled={!formSubmitted}
//           sx={{
//             backgroundColor: formSubmitted ? "blue" : "gray",
//             cursor: formSubmitted ? "pointer" : "not-allowed",
//           }}
//         >
//           {formSubmitted ? "Download PDF" : "Not Available"}
//         </Button>
//       );
//     },
//   },
// ];

// const downloadAnnualPDF = async (id: string) => {
//   const token = useSelector((state: RootState) => state.auth.token); // Get token from Redux store

//   try {
//     const response = await fetch(
//       `https://api.ub.edu.bz/api/generateFacultyPdf/${id}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/pdf",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const contentType = response.headers.get("Content-Type");
//     if (contentType !== "application/pdf") {
//       throw new Error(`Unexpected content type: ${contentType}`);
//     }

//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "Annual Report Academic Division.pdf";
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
//     setTimeout(() => window.URL.revokeObjectURL(url), 100);
//   } catch (error) {
//     console.error("Error downloading the PDF:", error);
//   }
// };

// export const UBFormsChecks: React.FC = () => {
//   const [reports, setReports] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useFetchAnnualReportQuery(1);
//   useFetchAnnualNonReportQuery(1);
//   useFetchRecordsReportQuery(1);
//   useFetchHRReportQuery(1);
//   useFetchFinanceReportQuery(1);

//   //---------------selectors-------------------------------------
//   const userName = useSelector(selectName);
//   const username = useSelector(selectUsername);
//   const financeReport = useSelector(selectFinanceReport);
//   const staffReport = useSelector(selectAnnualNonReport);
//   const facultyReport = useSelector(selectAnnualReport);
//   const recordReport = useSelector(selectRecordReport);
//   const HRReport = useSelector(selectHRReport);
//   //-------------------------------------------------------------

//   //----------------------------------path ID-------------------------
//   //------------------------------------------------------------------

//   const token = useSelector((state: RootState) => state.auth.token);

//   const fetchReports = async () => {
//     try {
//       const response = await fetch(
//         "https://api.ub.edu.bz/api/allReports/faculty-finance-human_resources-records-staff",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const result = await response.json();

//       console.log(result)

//       if (response.ok) {
//         setReports(result.data.reportData || []);
//       } else {
//         setError(result.message || "Failed to fetch data");
//       }
//     } catch (error) {
//       setError("An error occurred while fetching data");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchReports();
//   }, [token]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   const rows = reports.map((report) => {
//     return {
//       id: report._id,
//       name: report.name,
//       reportType: report.reportType,
//       formSubmitted: report.formSubmitted || true, // This should reflect whether the form was submitted
//     };
//   });

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100%",
//         px: 2,
//       }}
//     >
//       <Box
//         sx={{
//           height: 580,
//           width: {
//             xs: "100%",
//             sm: "90%",
//             md: "75%",
//             lg: "60%",
//           },
//         }}
//       >
//         <CustomDataGrid
//           rows={rows}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: {
//                 pageSize: 10,
//               },
//             },
//           }}
//           pageSizeOptions={[10]}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default UBFormsChecks;


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
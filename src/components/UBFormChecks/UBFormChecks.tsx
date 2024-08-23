import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { selectAnnualReport } from "../../store/features/annualReportSlice";
import { RootState } from "../../store/store";
import { useFetchAnnualReportQuery } from "../../store/services/annualReportAPI";
import { selectName, selectUsername } from "../../store/features/authSlice";

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
    field: "reportBy",
    headerName: "Report By",
    flex: 1,
    editable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "status",
    headerName: "Status",
    type: "number",
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
    renderCell: (params) => (
      <Button
        variant="contained"
        size="small"
        onClick={() => handleDownloadPDF(params.row.id)}
      >
        Download PDF
      </Button>
    ),
  },
];

const rows = [
  { id: 1, reportBy: "Jon Snow", status: 1 },
  { id: 2, reportBy: "Cersei Lannister", status: 2 },
  { id: 3, reportBy: "Jaime Lannister", status: 2 },
  { id: 4, reportBy: "Arya Stark", status: 1 },
  { id: 5, reportBy: "Daenerys Targaryen", status: 3 },
  { id: 6, reportBy: "Melisandre", status: 3 },
  { id: 7, reportBy: "Ferrara Clifford", status: 1 },
  { id: 8, reportBy: "Rossini Frances", status: 2 },
  { id: 9, reportBy: "Harvey Roxie", status: 3 },
];

const handleDownloadPDF = (id: number) => {
  console.log(`Downloading PDF for row with id: ${id}`);
};

export const UBFormsChecks: React.FC = () => {
  useFetchAnnualReportQuery(1);

  //---------------selectors-------------------------------------
  const name = useSelector(selectName);
  const username = useSelector(selectUsername);
  const facultyReport = useSelector(selectAnnualReport);
  //-------------------------------------------------------------

  //----------------------------------path ID-------------------------
  const facultyReportID = facultyReport._id;
  //------------------------------------------------------------------

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

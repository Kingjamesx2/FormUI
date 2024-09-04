import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import UserPosition from "../../components/UserPosition/UserPosition";
import FormCard from "../../components/common/Card/FormCard";
import { Link } from "react-router-dom";
import { useFetchAnnualReportQuery } from "../../store/services/annualReportAPI";
import { useFetchAnnualNonReportQuery } from "../../store/services/annualNonReportAPI";
import { useFetchRecordsReportQuery } from "../../store/services/recordsReportAPI";
import { useFetchHRReportQuery } from "../../store/services/HRReportApi";
import { useFetchFinanceReportQuery } from "../../store/services/financeReportAPI";
import { selectName, selectUsername } from "../../store/features/authSlice";
import { selectFinanceReport } from "../../store/features/financeReportSlice";
import { selectAnnualReport } from "../../store/features/annualReportSlice";
import { selectRecordReport } from "../../store/features/recordsReportSlice";
import { selectHRReport } from "../../store/features/HRReportSlice";
import { selectAnnualNonReport } from "../../store/features/annualNonReportSlice";
import { RootState } from "../../store/store";
import UBFormChecks from "../../components/UBFormChecks/UBFormChecks";
import UBLogo from "../../components/icons/UB_Logo.png";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const defaultTheme = createTheme();

export const Dashboard: React.FC = () => {
  // const [skipAnnualReport, setSkipAnnualReport] = useState(false);
  useFetchAnnualReportQuery(1);
  useFetchAnnualNonReportQuery(1);
  useFetchRecordsReportQuery(1);
  useFetchHRReportQuery(1);
  useFetchFinanceReportQuery(1);

  // Get token from the Redux store
  const token = useSelector((state: RootState) => state.auth.token);

  //---------------selectors-------------------------------------
  const userName = useSelector(selectName);
  const username = useSelector(selectUsername);
  const financeReport = useSelector(selectFinanceReport);
  const staffReport = useSelector(selectAnnualNonReport);
  const facultyReport = useSelector(selectAnnualReport);
  const recordReport = useSelector(selectRecordReport);
  const HRReport = useSelector(selectHRReport);
  //-------------------------------------------------------------

  //----------------------------------path ID-------------------------
  const financeReportID = financeReport._id; // Replace with the correct path to your ID
  const staffReportID = staffReport._id;
  const facultyReportID = facultyReport._id;
  const recordReportID = recordReport._id;
  const HRReportID = HRReport._id;
  //------------------------------------------------------------------

  //----------------------------------------------Fetch Annual Report Academic Division-----------------------------------------------------
  const downloadAnnualPDF = async (id: string) => {
    try {
      // Fetch the PDF file
      const response = await fetch(
        `https://api.ub.edu.bz/api/generateFacultyPdf/${id}`,
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
      a.download = "Annual Report Academic Division.pdf"; // The filename the user will see

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

  //----------------------------------------------------------------END--------------------------------------------------------------------

  //----------------------------------------------Fetch Annual Non Report Academic Division-----------------------------------------------------
  const downloadNonAnnualPDF = async (id: string) => {
    try {
      // Fetch the PDF file
      const response = await fetch(
        `https://api.ub.edu.bz/api/generateStaffPdf/${id}`,
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
  //----------------------------------------------------------------END--------------------------------------------------------------------

  //----------------------------------------------Fetch  Finance and Budget Statistics Report-----------------------------------------------------
  const downloadFinancePDF = async (id: string) => {
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

  //---------------------------------------------------------------END--------------------------------------------------------------------

  //----------------------------------------------Fetch Human Statistics Report-----------------------------------------------------------
  const downloadHRPDF = async (id: string) => {
    try {
      // Fetch the PDF file
      const response = await fetch(
        `https://api.ub.edu.bz/api/generateHRPdf/${id}`,
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
      a.download = " Human Statistics Report.pdf"; // The filename the user will see

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
  //---------------------------------------------------------------END--------------------------------------------------------------------

  //----------------------------------------------------Report and Records------------------------------------------------------------------
  const downloadRecordsPDF = async (id: string) => {
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
  //--------------------------------------------------END--------------------------------------------------------------------

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar
            sx={{
              backgroundColor: "#FFF",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: "2%",
                color: "black",
              }}
            >
              <img src={UBLogo} alt="UB Logo" width="25%" />
              <h2 style={{ marginLeft: "1rem" }}>Annual Monitoring Process</h2>
            </Box>

            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, ml: "6%" }}
            ></Typography>
            <UserPosition name={userName} position="" logOut="" />
          </Toolbar>
        </AppBar>

        <Box
          component="main"
          sx={{
            backgroundColor: "#6C3777",
            flexGrow: 1,
            height: "100vh",
            width: "100vw",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container
            maxWidth={false}
            sx={{
              mt: "6%",
              mb: 4,
              ml: "auto", // Center horizontally
              mr: "auto", // Center horizontally
              p: "1% 0 1% 1%",
              width: "70vw",
              overflowX: "hidden",
            }}
          >
            <Grid container spacing={3}>
              {[
                "jfaber",
                "luis.herrera",
                "mteck",
                "vpalacio",
                "senriquez",
                "swindsor"
              ].includes(username) && (
                <Grid item xs={12} md={12} lg={12}>
                  <UBFormChecks />
                </Grid>
              )}
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={12} sm={6} md={4}></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <Container
            maxWidth={false}
            sx={{
              mt: 4,
              mb: 4,
              ml: "auto", // Center horizontally
              mr: "auto", // Center horizontally
              p: "1% 0 1% 1%",
              width: "50vw",
              overflowX: "hidden",
            }}
          >
            <Grid container spacing={3}>
              {[
                // "jfaber",
                // "luis.herrera",
                "bwatler",
                "tusher",
                "lthurton",
                "ljohnson",
                "aaguilar",
                "swindsor",
              ].includes(username) &&
                !facultyReport.formSubmitted && (
                  <Grid item xs={12} md={4} lg={3}>
                    <Link
                      to="/AnnualAcademicReport"
                      style={{ textDecoration: "none" }}
                    >
                      <FormCard
                        formPreview="/form.png"
                        title="UB Annual Report Academic Division"
                      />
                    </Link>
                  </Grid>
                )}
              {facultyReport.formSubmitted && (
                <Grid item xs={12} md={4} lg={3} sx={{ color: "#FFF" }}>
                  {" "}
                  Annual Report Academic Division form was submitted
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => downloadAnnualPDF(facultyReportID as string)}
                    sx={{ mt: 2 }} // Add some margin-top to space the button
                  >
                    Download PDF
                  </Button>
                </Grid>
              )}
              {[
                // "jfaber",
                "luis.herrera",
                "fburns",
                "akantun",
                "carisa.carrillo",
                "lcruz",
                "fpalma",
                "rpineda",
                "mcommissiong",
                "mcuellar",
                "jsnaddon",
                "rpolonio",
                "twilliams",
                "mortega",
                "cguerrero",
                "isangster",
                "jsalam",
                "jbabb",
                "delmer.tzib",
                "dconorquie",
                "egbert.irving",
                // "swindsor"
              ].includes(username) &&
                !staffReport.formSubmitted && (
                  <Grid item xs={12} md={4} lg={3}>
                    <Link
                      to="/AnnualNonAcademicReport"
                      style={{ textDecoration: "none" }}
                    >
                      <FormCard
                        formPreview="/form1.png"
                        title="UB Annual Report Non-Academic Division"
                      />
                    </Link>
                  </Grid>
                )}
              {staffReport.formSubmitted && (
                <Grid item xs={12} md={4} lg={3} sx={{ color: "#FFF" }}>
                  {" "}
                  Annual Report Non-Academic Division form was submitted{" "}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      downloadNonAnnualPDF(staffReportID as string)
                    }
                    sx={{ mt: 2 }} // Add some margin-top to space the button
                  >
                    Download PDF
                  </Button>
                </Grid>
              )}
              {["jfaber", "luis.herrera", "rpineda"].includes(username) &&
                !recordReport.formSubmitted && (
                  <Grid item xs={12} md={4} lg={3}>
                    <Link
                      to="/RecordsAndAdmissions"
                      style={{ textDecoration: "none" }}
                    >
                      <FormCard
                        formPreview="/form2.png"
                        title="UB records and Admissions"
                      />
                    </Link>
                  </Grid>
                )}
              {recordReport.formSubmitted && (
                <Grid item xs={12} md={4} lg={3} sx={{ color: "#FFF" }}>
                  {" "}
                  Records and Admissions form was submitted{" "}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => downloadRecordsPDF(recordReportID)}
                    sx={{ mt: 2 }} // Add some margin-top to space the button
                  >
                    Download PDF
                  </Button>
                </Grid>
              )}
              {["jfaber", "luis.herrera", "cguerrero"].includes(username) &&
                !HRReport.formSubmitted && (
                  <Grid item xs={12} md={4} lg={3}>
                    <Link
                      to="/HumanResourceStatistics"
                      style={{ textDecoration: "none" }}
                    >
                      <FormCard
                        formPreview="/form6.png"
                        title="UB Human Resource Statistics"
                      />
                    </Link>
                  </Grid>
                )}
              {HRReport.formSubmitted && (
                <Grid item xs={12} md={4} lg={3} sx={{ color: "#FFF" }}>
                  {" "}
                  Human Resource Statistics form was submitted{" "}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => downloadHRPDF(HRReportID)}
                    sx={{ mt: 2 }} // Add some margin-top to space the button
                  >
                    Download PDF
                  </Button>
                </Grid>
              )}
              {["jfaber" , "luis.herrera", "isangster"].includes(username) &&
                !financeReport.formSubmitted && (
                  <Grid item xs={12} md={4} lg={3}>
                    <Link
                      to="/FinanceAndBudgetStatistics"
                      style={{ textDecoration: "none" }}
                    >
                      <FormCard
                        formPreview="/form7.png"
                        title="UB Finance and Budget Statistics"
                      />
                    </Link>
                  </Grid>
                )}
              {financeReport.formSubmitted && (
                <Grid item xs={12} md={4} lg={3} sx={{ color: "#FFF" }}>
                  {" "}
                  Finance and Budget Statistics form was submitted{" "}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => downloadFinancePDF(financeReportID)}
                    sx={{ mt: 2 }} // Add some margin-top to space the button
                  >
                    Download PDF
                  </Button>
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import UserPosition from "../../components/UserPosition/UserPosition";
import FormCard from "../../components/common/Card/FormCard";
import { Link } from "react-router-dom";
import { useFetchAnnualReportQuery } from "../../store/services/annualReportAPI";
import { useFetchAnnualNonReportQuery } from "../../store/services/annualNonReportAPI";
import { useFetchRecordsReportQuery } from "../../store/services/recordsReportAPI";
import { useFetchHRReportQuery } from '../../store/services/HRReportApi'
import { useFetchFinanceReportQuery } from '../../store/services/financeReportAPI'
import { selectName } from "../../store/features/authSlice";
import UBLogo from "../../components/icons/UB_Logo.png";
// import exit from "../../components/icons/exit.png";
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
  useFetchHRReportQuery(1)
  useFetchFinanceReportQuery(1)

  const userName = useSelector(selectName);

  // const handleFormClick = async (reportType: string) => {
  //   // try {
  //   //   // skipAnnualReport ? setSkipAnnualReport(false) : false;
  //   //   // refetchAnnaulReport();
  //   // } catch (error) {
  //   //   console.error("API error:", error);
  //   // }
  // };

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
              <Grid item xs={12}>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="body1">
                      <b>Form</b>
                    </Typography>
                  </Grid>
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
              width: "70vw",
              overflowX: "hidden",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} lg={3}>
                <Link
                  to="/AnnualAcademicReport"
                  style={{ textDecoration: "none" }}
                  // onClick={() =>
                  //   handleFormClick(
                  //     "UB Annual Report Template Academic Division"
                  //   )
                  // }
                >
                  <FormCard
                    formPreview="src/components/icons/form.png"
                    title="UB Annual Report Academic Division"
                  />
                </Link>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Link
                  to="/AnnualNonAcademicReport"
                  style={{ textDecoration: "none" }}
                >
                  <FormCard
                    formPreview="src/components/icons/form1.png"
                    title="UB Annual Report Non-Academic Division"
                  />
                </Link>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Link
                  to="/RecordsAndAdmissions"
                  style={{ textDecoration: "none" }}
                >
                  <FormCard
                    formPreview="src/components/icons/form2.png"
                    title="UB records and Admissions"
                  />
                </Link>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Link
                  to="/HumanResourceStatistics"
                  style={{ textDecoration: "none" }}
                >
                  <FormCard
                    formPreview="src/components/icons/form2.png"
                    title="UB Human Resource Statistics"
                  />
                </Link>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Link
                  to="/FinanceAndBudgetStatistics"
                  style={{ textDecoration: "none" }}
                >
                  <FormCard
                    formPreview="src/components/icons/form2.png"
                    title="UB Finance and Budget Statistics"
                  />
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;

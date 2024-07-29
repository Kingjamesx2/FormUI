import React, { useState } from "react";
import { useSelector } from "react-redux";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListItems from "../../components/ListItems/ListItems";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserPosition from "../../components/UserPosition/UserPosition";
import UbLogo from "../../components/icons/UB_Logo.png";
import FormCard from "../../components/common/Card/FormCard";
import { Link, /*useNavigate */} from "react-router-dom";
import { useFetchAnnualReportQuery } from "../../store/services/annualReportAPI";
import { selectName } from "../../store/features/authSlice";


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
  const [skipAnnualReport, setSkipAnnualReport] = useState(true)
  const {refetch: refetchAnnaulReport } = useFetchAnnualReportQuery(1);
  const [open, setOpen] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const userName = useSelector(selectName)

 
  const handleFormClick = async (reportType: string) => {
    try {
      skipAnnualReport ? setSkipAnnualReport(false) : false
      refetchAnnaulReport()
      console.log("API result:");
    } catch (error) {
      console.error("API error:", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar
            sx={{
              backgroundColor: "#6C3777",
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, ml: "6%" }}
            >
            </Typography>
            <UserPosition
              name={userName}
              position=""
              profilePicture="src/components/icons/jamesFaber.jpeg"
            />
          </Toolbar>
        </AppBar>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            width: "100vw",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container
            maxWidth={false}
            sx={{ mt: 4, mb: 4, ml: "10%", p: "1% 0 1% 1%", width: "70vw", overflowX: "hidden"}}
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
            sx={{ mt: 4, mb: 4, ml: "10%", p: "1% 0 1% 1%", width: "70vw", overflowX: "hidden"}}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} lg={3}>
                <Link
                  to="/AnnualAcademicReport"
                  style={{ textDecoration: "none" }}
                  onClick={() => handleFormClick('UB Annual Report Template Academic Division')}
                >
                  <FormCard
                    formPreview="src/components/icons/annualReport.png"
                    title="UB Annual Report Template Academic Division"
                  />
                </Link>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Link
                  to="/AnnualNonAcademicReport"
                  style={{ textDecoration: "none" }}
                >
                  <FormCard
                    formPreview="src/components/icons/annualNonReport.png"
                    title="UB Annual Report Template Non-Academic Division"
                  />
                </Link>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Link
                  to="/KeyStatisticsReport"
                  style={{ textDecoration: "none" }}
                >
                  <FormCard
                    formPreview="src/components/icons/keyStatistics.png"
                    title="University of Belize Key Statistics Template"
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

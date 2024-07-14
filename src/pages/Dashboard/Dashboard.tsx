import React, { useState } from "react";
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
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListItems from "../../components/ListItems/ListItems";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserPosition from "../../components/UserPosition/UserPosition";
import UbLogo from "../../components/icons/UB_Logo.png";
import FormCard from "../../components/common/Card/FormCard";
import SelectAutoWidth from "../../components/SelectAutoWidth/SelectAutoWidth";
import { Link } from "react-router-dom";

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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const defaultTheme = createTheme();

export const Dashboard: React.FC = () => {
  const items = [
    "UB Annual Report Template Academic Division",
    "UB Annual Report Template Non-Academic Division",
    "University of Belize Key Statistics Template",
  ];

  const [filteredItems, setFilteredItems] = useState<string[]>(items);
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleSearch = (searchTerm: string) => {
    console.log("Search term:", searchTerm);
    // Add your search logic here
  };

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "22px",
              backgroundColor: "#6C3777",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <SearchBar onSearch={handleSearch} showIconOnly={isSmallScreen} />
            </Typography>
            <UserPosition
              name="James Faber"
              position="Software Engineer"
              profilePicture="src/components/icons/jamesFaber.jpeg"
            />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <img
              src={UbLogo}
              alt="Ub Logo"
              style={{
                width: open ? "150px" : "100px",
                height: open ? "120px" : "70px",
                transition: "width 0.3s, height 0.3s",
              }}
            />
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <ListItems />
            </Link>
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            width: "96vw",
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
                >
                  <FormCard
                    formPreview="src/components/icons/formPreview.png"
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
                    formPreview="src/components/icons/formPreview.png"
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
                    formPreview="src/components/icons/formPreview.png"
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

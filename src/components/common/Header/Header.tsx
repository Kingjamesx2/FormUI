import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import UBLogo from "./../../icons/UB_Logo.png";
import { Link } from "react-router-dom";
import UserPosition from "../../UserPosition/UserPosition";
import { useSelector } from "react-redux";
import { selectName } from "../../../store/features/authSlice";
import Box from "@mui/material/Box";

interface HeaderProps {
  logo: string;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ logo, title }) => {
  const userName = useSelector(selectName);

  return (
    <AppBar position="static" sx={{ bgcolor: "#fff", width: "100vw" }}>
    
      <Toolbar
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: "2%",
            color: "black",
          }}
        >
          <Link to="/" style={{ }}>
            <img src={UBLogo} alt="UB Logo" width="50%" />
          </Link>
          <h2 style={{ marginLeft: "-8rem" }}>{title}</h2>
        </Box>

        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 0.98, ml: "6%" }}
        ></Typography>
        <UserPosition name={userName} position="" logOut="" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

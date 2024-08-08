import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UBLogo from './../../icons/UB_Logo.png';
import { Link } from 'react-router-dom';
import UserPosition from "../../UserPosition/UserPosition";
import { selectName } from "../../../store/features/authSlice";
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

interface HeaderProps {
  logo: string;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ logo, title }) => {
  const userName = useSelector(selectName);
  return (
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
              {/* <h2 style={{ marginLeft: "1rem" }}>Annual Monitoring Process</h2> */}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: "2%",
                color: "black",
              }}
            >
              
              <h2 style={{ marginLeft: "1rem" }}>{title}</h2>
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
  );
};

export default Header;

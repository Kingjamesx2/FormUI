import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import UBLogo from './../../icons/UB_Logo.png';
import { Link } from 'react-router-dom';
import UserPosition from '../../UserPosition/UserPosition';
import { useSelector } from "react-redux";
import { selectName } from "../../../store/features/authSlice";


interface HeaderProps {
  logo: string;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ logo, title }) => {
  const userName = useSelector(selectName);

  return (
    <AppBar position="static" sx={{ bgcolor: '#fff', width: '100vw' }}>
      <Container maxWidth={false} sx={{ width: '100vw', padding: 0 }}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={UBLogo} alt="UB Logo" style={{ width: '35%', height: '35%', marginLeft: "5%" }} />
          </Link>
          
          <Typography
            variant="h6"
            component="div"
            sx={{
              marginLeft: '-10%',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            {title}
          </Typography>
          <div style={{ display: 'flex', justifyContent: '', alignItems: 'center', backgroundColor: "#fff", position: "relative", left: "30%" /* marginLeft: "20%", paddingLeft: "0%" */}}>
            <UserPosition name={userName} position="" logOut="" />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

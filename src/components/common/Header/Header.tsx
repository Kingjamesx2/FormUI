import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import UBLogo from './../../icons/UB_Logo.png';


interface HeaderProps {
  logo: string;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ logo, title }) => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#fff', width: '100vw' }}>
      <Container maxWidth={false} sx={{ width: '100vw', padding: 0 }}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
          <img src={UBLogo} alt="" width="10%" />
          <Typography
            variant="h6"
            component="a"
            sx={{
              display: { md: 'flex' },
              color: 'black',
              textDecoration: 'none',
              marginLeft: '1rem',
            }}
          >
            {title}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

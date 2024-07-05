import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UBLogo from './../../components/icons/UB_Logo.png';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const Login: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleGoogleSuccess = (response: any) => {
    console.log('Google Login Success:', response);
    // You can now use the response token to authenticate the user on your backend
  };

  const handleGoogleFailure = (error: any) => {
    console.error('Google Login Failed:', error);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <Box
          sx={{
            backgroundColor: '#6C3777',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Container
            component="main"
            maxWidth="xs"
            sx={{
              border: '1px solid',
              backgroundColor: '#fff',
              borderRadius: '5%',
              padding: '0 0 3% 0',
            }}
          >
            <CssBaseline />
            <Box
              sx={{
                marginTop: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box sx={{}}>
                {/* <LockOutlinedIcon /> */}
                <img
                  src={UBLogo}
                  alt="Ub Logo"
                  style={{
                    width: '100px',
                    height: '70px',
                    transition: 'width 0.3s, height 0.3s',
                  }}
                />
              </Box>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: '#6C3777',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#5a2f64',
                    },
                  }}
                >
                  Sign In
                </Button>
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onFailure={handleGoogleFailure}
                  hostedDomain="ub.edu.bz"
                />
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
};

export default Login;

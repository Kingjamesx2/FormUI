import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UBLogo from './../../components/icons/UB_Logo.png';
import { CredentialResponse, GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const defaultTheme = createTheme();

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    try {
      const response = await axios.post('https://your-backend-api.com/auth/login', {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleGoogleSuccess = async (response: CredentialResponse) => {
    console.log('Google Login Success:', response);

    if (response.credential) {
      try {
        const backendResponse = await axios.post('https://your-backend-api.com/auth/google-login', {
          token: response.credential,
        });

        if (backendResponse.data.token) {
          localStorage.setItem('authToken', backendResponse.data.token);
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Google login failed:', error);
      }
    }
  };

  const handleGoogleFailure = () => {
    console.error('Google Login Failed');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <Box
          sx={{
            backgroundColor: '#6C3777',
            minHeight: '100vh',
            minWidth: '100vw',
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
              padding: '3%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box sx={{ mb: 2 }}>
                <img
                  src={UBLogo}
                  alt="UB Logo"
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
                <Link to="/" style={{ textDecoration: 'none' }}>
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
                    Login
                  </Button>
                </Link>
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleFailure}
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

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UBLogo from './../../components/icons/UB_Logo.png';
import { CredentialResponse, GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm, SubmitHandler } from "react-hook-form";
import { Container, CssBaseline, Box, Typography, TextField, Button, Grid, FormControlLabel, Checkbox } from "@mui/material";

const defaultTheme = createTheme();

type FormValue = {
  email: string;
  password: string;
};

export const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    console.log("final data", data);
    try {
      const response = await axios.post('https://your-backend-api.com/auth/login', data);
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
      <GoogleOAuthProvider clientId="967559900359-e8o7st6o4n22r2tvcig3ub78724j5cj7.apps.googleusercontent.com">
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
              <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Invalid Email",
                    },
                  })}
                />
                {errors.email && <p className="error-msg">{errors.email.message}</p>}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 10,
                      message: "Password should be at least 10 characters",
                    },
                  })}
                />
                {errors.password && <p className="error-msg">{errors.password.message}</p>}
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
                  Login
                </Button>
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleFailure}
                  hostedDomain="ub.edu.bz"
                />
                <Grid container>
                  <Grid item xs>
                    <Link to="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
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

import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UBLogo from './../../components/icons/UB_Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Container,
  CssBaseline,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  CircularProgress,
  Alert,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from '../../store/features/authSlice';
import './Login.scss';
import { useLoginMutation } from '../../store/services/authAPI';

const defaultTheme = createTheme();

type FormValue = {
  username: string;
  password: string;
};

export const Login = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const [login, { data: loginResult, error: loginError, isSuccess: loginIsSuccess }] = useLoginMutation();
  const [consoleMessage, setConsoleMessage] = useState<string | null>(null);

  const onLogin = async (data: any) => {
    // Extract the second item from the data object
    const secondItem = Object.values(data)[1];
    setConsoleMessage(secondItem);
    await login(data);
  };

  useEffect(() => {
    if (loginResult) {
      const secondItem = Object.values(loginResult)[1];
      setConsoleMessage(secondItem);
    } else if (loginError) {
      setConsoleMessage(loginError.toString());
    }
  }, [loginResult, loginError, loginIsSuccess]);

  return (
    <ThemeProvider theme={defaultTheme}>
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
          component='main'
          maxWidth='xs'
          sx={{
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
                alt='UB Logo'
                style={{
                  width: '100px',
                  height: '70px',
                  transition: 'width 0.3s, height 0.3s',
                }}
              />
            </Box>
            <Typography component='h1' variant='h5'>
              Login
            </Typography>
            {/* {error && <Alert severity='error'>{error}</Alert>} */}
            <Box
              component='form'
              onSubmit={handleSubmit(onLogin)}
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='username'
                label='username'
                autoComplete='username'
                autoFocus
                {...register('username', {
                  required: 'username is required',
                })}
              />
              {errors.username && (
                <p className='error-msg'>{errors.username.message}</p>
              )}
              <TextField
                margin='normal'
                required
                fullWidth
                label='password'
                type='password'
                id='password'
                autoComplete='current-password'
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 1,
                    message: 'Password should be at least 10 characters',
                  },
                })}
              />
              {errors.password && (
                <p className='error-msg'>{errors.password.message}</p>
              )}
              {consoleMessage && (
                <Typography variant='body2' color='error' sx={{ mt: 2 }}>
                  {consoleMessage}
                </Typography>
              )}
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#6C3777',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#5a2f64',
                  },
                }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} color='inherit' /> : 'Login'}
              </Button>
              <Grid container></Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Login;

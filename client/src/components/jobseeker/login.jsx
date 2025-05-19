import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Typography,
  Box,
  Paper,
  CircularProgress,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { Visibility, VisibilityOff, EmailOutlined, LockOutlined } from '@mui/icons-material';
import Header from '../../header';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6b21a8',
    },
    secondary: {
      main: '#7c3aed',
    },
    background: {
      default: '#f3e8ff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          marginBottom: '10px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 24px',
        },
      },
    },
  },
});

function UserLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setError('');
      try {
        const res = await axios.post('http://127.0.0.1:5000/api/users/login', values);
        if (res.data.success) {
          const { token, user } = res.data;
          localStorage.setItem('token', token);
          localStorage.setItem('UserId', user._id);
          localStorage.setItem('role', user.role);
          navigate('/user-dashboard');
        } else {
          setError('Invalid credentials');
        }
      } catch (err) {
        console.error('Login error:', err);
        setError('Server error or invalid credentials');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Paper
          elevation={5}
          sx={{
            maxWidth: 900,
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            overflow: 'hidden',
          }}
        >
          {!isSmallScreen && (
            <Box
              sx={{
                width: '60%',
                p: 4,
                bgcolor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="https://res.cloudinary.com/dxgs6l0ac/image/upload/v1747402045/3d-render-secure-login-password-illustration_j2uoyh.jpg"
                alt="Login Illustration"
                style={{ maxWidth: '100%', maxHeight: '600px' }}
              />
            </Box>
          )}
          <Box sx={{ width: { xs: '100%', md: '50%' }, p: { xs: 3, md: 5 } }}>
            <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
              Welcome Back! Log In
            </Typography>

            {error && (
              <Typography variant="body2" color="error" align="center" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}

            <form onSubmit={formik.handleSubmit} noValidate>
              <Box>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <TextField
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlined />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <Link to="/forgot-password" style={{ color: theme.palette.primary.main }}>
                  Forgot Password?
                </Link>
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                sx={{
                  mt: 1,
                  height: '48px',
                  background: 'linear-gradient(90deg, #6b21a8 0%, #7c3aed 100%)',
                  color: '#fff',
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(107,33,168,0.4)',
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Log In'}
              </Button>

              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Don't have an account?{' '}
                <Link to="/UserSignup" style={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                  Sign up
                </Link>
              </Typography>
            </form>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default UserLogin;

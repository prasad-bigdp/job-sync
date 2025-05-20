import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  CircularProgress,
  useMediaQuery
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  EmailOutlined,
  LockOutlined,
  ArrowForward
} from '@mui/icons-material';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useAuth } from '../../context/AuthContext';

const theme = createTheme({
  palette: {
    primary: { main: '#6b21a8' },
    secondary: { main: '#7c3aed' },
    background: { default: '#f3e8ff' },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: { borderRadius: 8 },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
      styleOverrides: {
        root: { marginBottom: '10px' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { padding: '12px 24px' },
      },
    },
  },
});

function UserLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required")
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setServerError('');
      try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/login`, values);
        const { token, user } = res.data;

        if (!user) throw new Error("User data missing");

        setAuth({ token, userId: user._id, role: user.role });
        navigate('/user-dashboard');
      } catch (error) {
        setServerError("Invalid credentials or server error.");
        console.error("Login error:", error);
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
        <Paper elevation={5} sx={{ maxWidth: 900, width: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          {!isSmallScreen && (
            <Box sx={{ width: '60%', p: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="https://res.cloudinary.com/dxgs6l0ac/image/upload/v1747402045/3d-render-secure-login-password-illustration_j2uoyh.jpg"
                alt="Login Illustration"
                style={{ maxWidth: '100%' }}
              />
            </Box>
          )}
          <Box sx={{ width: { xs: '100%', md: '50%' }, p: { xs: 3, md: 5 } }}>
            <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
              Welcome Back!
            </Typography>

            {serverError && (
              <Typography color="error" variant="body2" mb={2}>
                {serverError}
              </Typography>
            )}

            <form onSubmit={formik.handleSubmit} noValidate>
              {[
                { id: 'email', label: 'Email', icon: <EmailOutlined /> },
                { id: 'password', label: 'Password', icon: <LockOutlined /> }
              ].map(({ id, label, icon }) => (
                <Box key={id}>
                  <label htmlFor={id} style={{ display: 'block', marginBottom: 4, fontWeight: 600 }}>
                    {label} {formik.values[id] === "" && <span style={{ color: 'red' }}>*</span>}
                  </label>
                  <TextField
                    id={id}
                    name={id}
                    type={id === 'password' ? (showPassword ? 'text' : 'password') : 'email'}
                    value={formik.values[id]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched[id] && Boolean(formik.errors[id])}
                    helperText={formik.touched[id] && formik.errors[id]}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
                      ...(id === 'password' && {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={togglePasswordVisibility} edge="end" aria-label="toggle password visibility">
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        )
                      })
                    }}
                  />
                </Box>
              ))}

              <Box sx={{ textAlign: 'right', mb: 2 }}>
                <Link to="/forgot-password" style={{ color: theme.palette.primary.main }}>
                  Forgot Password?
                </Link>
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                endIcon={!loading && <ArrowForward />}
                sx={{
                  height: '48px',
                  background: 'linear-gradient(90deg, #6b21a8 0%, #7c3aed 100%)',
                  color: '#fff',
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(107,33,168,0.4)'
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Log In"}
              </Button>

              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don't have an account?{" "}
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

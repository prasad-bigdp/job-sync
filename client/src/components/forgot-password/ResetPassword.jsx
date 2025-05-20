import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  useMediaQuery,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Lock, ShieldCheck } from 'lucide-react';
import Header from '../Homecomponents/Header';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: { main: '#6b21a8' },
    secondary: { main: '#7c3aed' },
    background: { default: '#f3e8ff' },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});

function ResetPassword() {
  const navigate = useNavigate();
  const { token } = useParams();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  // State for password visibility toggle
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Toggle handlers for password visibility
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
  
  // Prevent the mouse down event to avoid focus loss on the input
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: { password: '', confirmPassword: '' },
    validationSchema: Yup.object({
      password: Yup.string().min(6, 'At least 6 characters').required('New password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post(`http://localhost:5000/api/reset-password/${token}`, values);
        const decoded = jwtDecode(token);
        alert('Password reset successfully!');
        navigate(decoded.role === 'user' ? '/UserLogin' : decoded.role === 'employer' ? '/EmployerLogin' : '/login');
      } catch (err) {
        alert(err.response?.data?.message || 'Token expired or invalid');
      }
    },
  });

  // Real-time password matching check
  const passwordsMatch = formik.values.password === formik.values.confirmPassword 
    && formik.values.confirmPassword !== '';

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
                width: '50%',
                p: 4,
                bgcolor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="https://res.cloudinary.com/dgwnjntoq/image/upload/v1747671882/Online_document-bro_rhrkyr.png"
                alt="Reset Password Illustration"
                style={{ maxWidth: '100%', maxHeight: '500px' }}
              />
            </Box>
          )}

          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              p: { xs: 3, md: 5 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
              Reset Password
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <Box mb={3}>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Set New Password <span style={{ color: 'red' }}>*</span>
                </label>
                <TextField
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  variant="outlined"
                  placeholder="New Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock size={18} color="#6b21a8" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box mb={4}>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                  Re-enter Password <span style={{ color: 'red' }}>*</span>
                </label>
                <TextField
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  fullWidth
                  variant="outlined"
                  placeholder="Confirm Password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ShieldCheck size={18} color="#6b21a8"/>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle confirm password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              
              {formik.values.confirmPassword && formik.values.password && (
                <Box mb={2} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box 
                    sx={{ 
                      width: 16, 
                      height: 16, 
                      borderRadius: '50%', 
                      bgcolor: passwordsMatch ? 'success.main' : 'error.main' 
                    }} 
                  />
                  <Typography 
                    variant="body2" 
                    color={passwordsMatch ? 'success.main' : 'error.main'}
                  >
                    {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
                  </Typography>
                </Box>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={!passwordsMatch && formik.values.confirmPassword !== ''}
                sx={{
                  background: 'linear-gradient(to right, #7c3aed, #6b21a8)',
                  color: 'white',
                  textTransform: 'none',
                  height: '48px',
                  fontWeight: 'bold',
                  '&:hover': {
                    background: 'linear-gradient(to right, #6b21a8, #581c87)',
                  },
                  '&.Mui-disabled': {
                    background: '#e0e0e0',
                  }
                }}
              >
                Change Password
              </Button>
            </form>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default ResetPassword;
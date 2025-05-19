import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import {
  TextField, Button, Checkbox, FormControlLabel, Box, Typography, Container, Paper,
  useMediaQuery, InputAdornment, IconButton, CircularProgress
} from '@mui/material';
import { Visibility, VisibilityOff, PersonOutline, EmailOutlined, LockOutlined, ArrowForward, PhoneAndroidOutlined } from '@mui/icons-material';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { ThemeProvider, createTheme } from '@mui/material/styles';


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

function EmployerSignup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      agreeToTerms: false
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").min(3),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().matches(/^[0-9]{10}$/, "Enter 10-digit phone number").required("Phone is required"),
      password: Yup.string().required("Password is required").min(6),
      company:Yup.string().required("company name is requried"),
      agreeToTerms: Yup.boolean().oneOf([true], "You must accept the terms")
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://127.0.0.1:5000/api/employer', values);
        console.log(response)
        alert('Signup successful!');
        navigate('/EmployerLogin');
      } catch (error) {
        alert('Error while signing up.');
        console.error('Signup error:', error.response?.data || error.message);
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
        <Paper elevation={5} sx={{ maxWidth: 900, width: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, overflow: 'hidden' }}>
          {!isSmallScreen && (
            <Box sx={{ width: '60%', p: 4, bgcolor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="https://res.cloudinary.com/dcawbqlmr/image/upload/v1747653893/6333213_pgmtjz.jpg" alt="Signup Image" style={{ maxWidth: '100%', maxHeight: '600px' }} />
            </Box>
          )}
          <Box sx={{ width: { xs: '100%', md: '50%' }, p: { xs: 3, md: 5 } }}>
            <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
              New to JobSync? Sign Up!
            </Typography>

            <form onSubmit={formik.handleSubmit} noValidate>
              {[
                { id: 'name', label: 'Name', icon: <PersonOutline />, required: true },
                { id: 'email', label: 'Email', icon: <EmailOutlined />, required: true },
                { id: 'phone', label: 'Phone Number', icon: <PhoneAndroidOutlined />, required: true },
                {id:'company', label:'company name',icon:<WorkOutlineOutlinedIcon />, requried:true}
              ].map(({ id, label, icon, required }) => (
                <Box key={id}>
                  <label htmlFor={id} className="block text-sm font-medium mb-1">
                    {label} {(formik.values[id] === "") && required && <span style={{ color: 'red' }}>*</span>}
                  </label>
                  <TextField
                    id={id}
                    name={id}
                    value={formik.values[id]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched[id] && Boolean(formik.errors[id])}
                    helperText={formik.touched[id] && formik.errors[id]}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {icon}
                        </InputAdornment>
                      )
                    }}
                  />
                </Box>
              ))}

              <Box>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password {(formik.values.password === "") && <span style={{ color: 'red' }}>*</span>}
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
                    )
                  }}
                />
              </Box>

              <FormControlLabel
                control={
                  <Checkbox
                    name="agreeToTerms"
                    color="primary"
                    checked={formik.values.agreeToTerms}
                    onChange={formik.handleChange}
                  />
                }
                label={
                  <Typography variant="body2">
                    I agree to the{" "}
                    <Link to="#" style={{ color: theme.palette.primary.main }}>Terms of Use</Link> &{" "}
                    <Link to="#" style={{ color: theme.palette.primary.main }}>Privacy Policy</Link>.
                  </Typography>
                }
              />
              {formik.touched.agreeToTerms && formik.errors.agreeToTerms && (
                <Typography variant="caption" color="error">
                  {formik.errors.agreeToTerms}
                </Typography>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                endIcon={!loading && <ArrowForward />}
                sx={{
                  mt: 3,
                  height: '48px',
                  background: 'linear-gradient(90deg, #6b21a8 0%, #7c3aed 100%)',
                  color: '#fff',
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(107,33,168,0.4)'
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
              </Button>

              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Already have an account?{" "}
                <Link to="/UserLogin" style={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                  Login
                </Link>
              </Typography>
            </form>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default EmployerSignup;
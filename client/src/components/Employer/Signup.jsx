import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import {
  TextField, Button, Checkbox, FormControlLabel, Box, Typography, Paper,
  useMediaQuery, InputAdornment, IconButton, CircularProgress
} from '@mui/material';
import {
  Visibility, VisibilityOff, PersonOutline, EmailOutlined, LockOutlined,
  ArrowForward, PhoneAndroidOutlined
} from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../ReusableCode/theme';
import FormField from '../ReusableCode/formField';

function EmployerSignup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", password: "", agreeToTerms: false },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").min(3),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().matches(/^[0-9]{10}$/, "Enter 10-digit phone number").required("Phone is required"),
      password: Yup.string().required("Password is required").min(6),
      agreeToTerms: Yup.boolean().oneOf([true], "You must accept the terms")
    }),
     onSubmit: async (values) => {
      try {
        const response = await axios.post('http://127.0.0.1:5000/api/employers', values);
        console.log(response)
        alert('Signup successful!');
        navigate('/EmployerLogin');
      } catch (error) {
        const errMsg = error.response?.data?.message || error.message || "Signup failed";
        alert(errMsg);
        console.error('Signup error:', errMsg);
      }
    },
  });
  

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
        <Paper elevation={5} sx={{ maxWidth: 900, width: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          {!isSmallScreen && (
            <Box sx={{ width: '60%', p: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/4236127.jpg" alt="Signup" style={{ maxWidth: '100%' }} />
            </Box>
          )}

          <Box sx={{ width: { xs: '100%', md: '50%' }, p: { xs: 3, md: 5 } }}>
            <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
              New to JobSync? Sign Up!
            </Typography>

            <form onSubmit={formik.handleSubmit} noValidate>
              <FormField id="name" label="Name" icon={<PersonOutline />} formik={formik} />
              <FormField id="email" label="Email" icon={<EmailOutlined />} formik={formik} />
              <FormField id="phone" label="Phone Number" icon={<PhoneAndroidOutlined />} formik={formik} />

              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password {formik.values.password === "" && <span style={{ color: 'red' }}>*</span>}
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
                  startAdornment: <InputAdornment position="start"><LockOutlined /></InputAdornment>,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

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
                <Link to="/EmployerLogin" style={{ color: theme.palette.primary.main, fontWeight: 600 }}>
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

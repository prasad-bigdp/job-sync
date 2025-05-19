import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import axios from "axios";
import Header from "../Homecomponents/Header";
import { Mail } from "lucide-react";
import InputAdornment from "@mui/material/InputAdornment";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6b21a8",
    },
    secondary: {
      main: "#7c3aed",
    },
    background: {
      default: "#f3e8ff",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await axios.post("http://localhost:5000/api/forgot-password", values);
        alert("Password reset link sent to your email.");
      } catch (err) {
        alert(err.response?.data?.message || "Something went wrong.");
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
          minHeight: "100vh",
          backgroundColor: "background.default",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Paper
          elevation={5}
          sx={{
            maxWidth: 900,
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            overflow: "hidden",
          }}
        >
          {!isSmallScreen && (
            <Box
              sx={{
                width: "50%",
                p: 4,
                bgcolor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/Questions-pana.png"
                alt="Forgot Password Illustration"
                style={{ maxWidth: "100%", maxHeight: "500px" }}
              />
            </Box>
          )}

          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              p: { xs: 3, md: 5 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              fontWeight={700}
              color="primary"
              gutterBottom
            >
              Forgot Password
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <Box mb={3}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Enter your registered Email{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <TextField
                  id="email"
                  name="email"
                  placeholder="Email address"
                  fullWidth
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail size={20} color="#6b21a8" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  background: "linear-gradient(to right, #7c3aed, #6b21a8)",
                  color: "white",
                  textTransform: "none",
                  height: "48px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to right, #6b21a8, #581c87)",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Send Reset Link"
                )}
              </Button>
            </form>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default ForgotPassword;

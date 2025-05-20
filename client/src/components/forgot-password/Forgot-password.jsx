import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import Header from "../Homecomponents/Header";
import axios from "axios";

function ForgotPassword() {
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post(`http://localhost:5000/api/forgot-password`, values);
        alert("Password reset link sent to your email.");
      } catch (err) {
        alert(err.response?.data?.message || "Something went wrong.");
      }
    },
  });

  return (
    <div>
      <Header />
      <div className="flex justify-end pr-10 mt-10">
        <div className="w-full max-w-md">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">Forgot Password</h2>

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Enter your Email <span className="text-red-500">*</span>
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
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#6b21a8",
                  color: "white",
                  textTransform: "none",
                  height: "48px",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#581c87" },
                }}
              >
                Send Reset Link
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

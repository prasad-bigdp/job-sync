import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import Header from "../../header";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .required("New password is required")
        .min(6, "At least 6 characters"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      console.log("Resetting password with:", values);
      navigate("/login");
    },
  });

  return (
    <div>
      <Header />
      <div className="flex justify-end pr-10 mt-10">
        <div className="w-full max-w-md">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            Forgot Password
          </h2>

          <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
            {/* Email */}
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

            {/* New Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Set New Password <span className="text-red-500">*</span>
              </label>
              <TextField
                id="password"
                name="password"
                placeholder="New Password"
                type="password"
                fullWidth
                variant="outlined"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium mb-1"
              >
                Re-enter Password <span className="text-red-500">*</span>
              </label>
              <TextField
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                fullWidth
                variant="outlined"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
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
                  "&:hover": {
                    backgroundColor: "#581c87",
                  },
                }}
              >
                Change Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

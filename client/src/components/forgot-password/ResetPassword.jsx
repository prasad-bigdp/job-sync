import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import Header from "../Homecomponents/Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function ResetPassword() {
  
  const navigate = useNavigate();
  const { token } = useParams();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("New password is required").min(6, "At least 6 characters"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
   onSubmit: async (values) => {
  try {
    await axios.post(`http://localhost:5000/api/reset-password/${token}`, {
      password: values.password,
      confirmPassword: values.confirmPassword,
    });

   
    const decoded = jwtDecode(token);
    const role = decoded.role;

    alert("Password reset successfully!");

   
    if (role === "user") {
      navigate("/UserLogin");
    } else if (role === "employer") {
      navigate("/EmployerLogin");
    } else {
      navigate("/login"); 
    }
  } catch (err) {
    alert(err.response?.data?.message || "Token expired or invalid");
  }
   }
  });
 
  return (
    <div>
      <Header />
      <div className="flex justify-end pr-10 mt-10">
        <div className="w-full max-w-md">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">Reset Password</h2>

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Set New Password <span className="text-red-500">*</span>
              </label>
              <TextField
                id="password"
                name="password"
                type="password"
                placeholder="New Password"
                fullWidth
                variant="outlined"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                Re-enter Password <span className="text-red-500">*</span>
              </label>
              <TextField
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                fullWidth
                variant="outlined"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
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
                Change Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;

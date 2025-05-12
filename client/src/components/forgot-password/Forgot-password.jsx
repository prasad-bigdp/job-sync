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
      captcha: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      captcha: Yup.string().required("Captcha is required"),
    }),
    onSubmit: (values) => {
      console.log("Submitting email for password reset:", values.email);
      // You can make an API call here to your backend
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
                Enter Registered Email <span className="text-red-500">*</span>
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

            {/* Captcha
            <div className="mb-6">
              <label htmlFor="captcha" className="block text-sm font-medium mb-1">
                Enter Captcha <span className="text-red-500">*</span>
              </label>
              <TextField
                id="captcha"
                name="captcha"
                placeholder="Enter the characters shown"
                fullWidth
                variant="outlined"
                value={formik.values.captcha}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.captcha && Boolean(formik.errors.captcha)}
                helperText={formik.touched.captcha && formik.errors.captcha}
              />
              {/* Placeholder for a real CAPTCHA image */}
              {/* <div className="mt-2 text-sm text-gray-500 italic">[Captcha Image Here]</div>
            </div> */} 

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
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

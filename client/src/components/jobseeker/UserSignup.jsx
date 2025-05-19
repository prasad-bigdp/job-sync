import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from "@mui/material";
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Homecomponents/Header'

function UserSignup() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      receiveApplicationEmails: true,
      darkMode: false,
      agreeToTerms: false
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").min(3, "Name is too short"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().matches(/^[0-9]{10}$/, "Enter 10 digit phone number").nullable(),
      password: Yup.string().required("Password is required").min(6, "At least 6 characters"),
      agreeToTerms: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://127.0.0.1:5000/api/users', values);
        console.log(response)
        alert('Signup successful!');
        navigate('/UserLogin');
      } catch (error) {
        const errMsg = error.response?.data?.message || 'Error while signing up.';
        alert(errMsg)
        console.error('Signup error:', error.response?.data || error.message);
      }
    },
  });

  return (

    <div>
     <Header/>


      <div className="flex justify-end pr-10 mt-10">
        <div className='w-full max-w-md'>
          <h3 className="text-lg font-semibold mb-4">New to JobSync? Sign Up!</h3>
          <form onSubmit={formik.handleSubmit} className="w-full max-w-md">

            {/* Name */}
            <div className='mb-4'>
              <label htmlFor='name' className="block text-sm font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <TextField
                id="name"
                name="name"
                placeholder="Name"
                fullWidth
                variant="outlined"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </div>

            {/* Email */}
            <div className='mb-4'>
              <label htmlFor='email' className="block text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
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

            {/* Phone */}
            <div className='mb-4'>
              <label htmlFor='phone' className="block text-sm font-medium mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <TextField
                id="phone"
                name="phone"
                placeholder="Phone Number"
                fullWidth
                variant="outlined"
                type="tel"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <TextField
                id="password"
                name="password"
                placeholder="Password"
                fullWidth
                variant="outlined"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>



            {/* Terms checkbox */}
            <div className="mb-4">
              <label className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formik.values.agreeToTerms}
                  onChange={formik.handleChange}
                  className="mt-1"
                />
                <span>
                  I agree to create my User Profile & display it on JobSync and also agree to the{" "}
                  <a href="#" className="text-blue-600 underline">Terms of Use</a> &{" "}
                  <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
                </span>
              </label>
              {formik.touched.agreeToTerms && formik.errors.agreeToTerms && (
                <p className="text-red-600 text-xs mt-1">{formik.errors.agreeToTerms}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-4">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: '150px',
                  height: '45px',
                  color: 'white',
                  borderColor: 'purple', // purple border
                  borderRadius: 1.5,
                  backgroundColor: '#6b21a8',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: '#581c87', // darker purple on hover
                    color: '#581c87'
                  }
                }}
              >
                Submit
              </Button>
              </div>
              <div className="text-center mt-3">
                <Link to="/UserLogin" className="text-md text-blue-600 hover:underline">
                  Already have an account? <strong>Log In</strong>
                </Link>
              </div>
            

          </form>
        </div>
      </div>
    </div>
  );
}

export default UserSignup;
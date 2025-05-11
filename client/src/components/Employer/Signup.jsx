import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom'; 
import { TextField ,Button} from "@mui/material";
import Header from '../../header';
import axios from 'axios';


function EmployerSignup() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      company: "",
      receiveApplicationEmails: true,
      darkMode: false,
      agreeToTerms:false
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").min(3, "Name is too short"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().matches(/^[0-9]{10}$/, "Enter 10 digit phone number").nullable(),
      password: Yup.string().required("Password is required").min(6, "At least 6 characters"),
      company: Yup.string().nullable(),
      agreeToTerms: Yup.boolean()
    .oneOf([true], "You must agree to the terms and privacy policy")
    }),
    onSubmit: async(values,{resetForm}) => {
      try{
        const respose = await axios.post('http://localhost:5000/api/employers',values);
        alert("singup successful!");
        resetForm();
        navigate('/login/employer');
      }catch(error){
        alert(error.response?.data?.message || 'error while signing up');
        console.error('Signup error:', error);
      }
    }
  });

  return (
    <div>
      <Header />
    
    <div className="flex justify-end pr-10 mt-10">
      <div className='w-full max-w-md'>
      <h3>Create Recruiter Profile</h3>
      <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
        <div className='mb-4'>
          <label htmlFor='name' className="block text-sm font-medium mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <TextField id="name"
          name="name"
          placeholder="Name"
          fullWidth
          variant="outlined"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}></TextField>
        </div>

        <div className='mb-4'>
          <label htmlFor='Email ID' className="block text-sm font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <TextField id="email"
          name="email"
          placeholder="email address"
          fullWidth
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}></TextField>
        </div>
        
        <div className="flex gap-6 mb-4">
  <div className="w-64">
    <label htmlFor="phone" className="block text-sm font-medium mb-1">
      Phone Number<span className="text-red-500">*</span>
    </label>
    <TextField
      id="phone"
      name="phone"
      placeholder="Phone Number"
      variant="outlined"
      type="tel"
      value={formik.values.phone}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched.phone && Boolean(formik.errors.phone)}
      helperText={formik.touched.phone && formik.errors.phone}
      sx={{
        width: '100%',
        '& .MuiOutlinedInput-root': {
          borderRadius: 0
        }
      }}
    />
  </div>

  <div className="w-64">
    <label htmlFor="password" className="block text-sm font-medium mb-1">
      Password<span className="text-red-500">*</span>
    </label>
    <TextField
      id="password"
      name="password"
      placeholder="Password"
      variant="outlined"
      type="password"
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched.password && Boolean(formik.errors.password)}
      helperText={formik.touched.password && formik.errors.password}
      sx={{
        width: '100%',
        '& .MuiOutlinedInput-root': {
          borderRadius: 0
        }
      }}
      
    />
    

        
    
  </div>
</div>
<div className="mb-4 w-full">
  <label htmlFor="company" className="block text-sm font-medium mb-1">
  Company<span className="text-red-500">*</span>
  </label>
  <TextField
    id="company"
    name="company"
    placeholder="Company"
    variant="outlined"
    fullWidth
    value={formik.values.company}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched.company && Boolean(formik.errors.company)}
    helperText={formik.touched.company && formik.errors.company}
    sx={{
      '& .MuiOutlinedInput-root': {
        borderRadius: 0
      }
    }}
  />
</div>
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
      I agree to use the aforesaid details to create my Recruiter Profile & display it on the JobSync site and also agree to be bound by the{" "}
      <a href="#" className="text-blue-600 underline">Terms of Use</a> &{" "}
      <a href="#" className="text-blue-600 underline">Privacy</a> of JobSync.
    </span>
  </label>
  {formik.touched.agreeToTerms && formik.errors.agreeToTerms && (
    <p className="text-red-600 text-xs mt-1">{formik.errors.agreeToTerms}</p>
  )}
</div>

<div className="flex justify-end mt-4">
  <Button
    type="submit"
    variant="contained"
    sx={{
      width:'150px',
      height:'45px',
      color: 'white', 
      borderColor: 'purple', // purple border
      borderRadius: 1.5,
      backgroundColor:'#6b21a8',
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
</form>
  </div>
    </div>
      </div>
  );
}

export default EmployerSignup;

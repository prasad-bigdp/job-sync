import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function EmployerSignup() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      phone: Yup.string()
        .matches(/^\+91-\d{10}$/, 'Phone must be in format +91-XXXXXXXXXX')
        .required('Phone number is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://127.0.0.1:5000/api/employers', values);
        console.log(response)
        alert('Signup successful!');
        navigate('/login/employer');
      } catch (error) {
        alert('Error while signing up.');
        console.error('Signup error:', error.response?.data || error.message);
      }
    },
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Employer Signup</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">

        {/* Name */}
        <div>
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2 rounded"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border p-2 rounded"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="+91-XXXXXXXXXX"
            className="w-full border p-2 rounded"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block font-semibold">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border p-2 rounded"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Sign Up
        </button>

        {/* Redirect */}
        <div className="text-center mt-3">
          <Link to="/login/user" className="text-md text-blue-600 hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </form>
    </div>
  );
}

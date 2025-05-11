import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function EmployerLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
    }),
    onSubmit: async (values) => {
      setError('');
      setLoading(true);

      try {
        // Step 1: Send login request
        const res = await axios.post('http://127.0.0.1:5000/api/employers/login', values);

        // Step 2: Check if login failed
        if (!res.data.success) {
          setLoading(false);
          return setError(res.data.message || 'Login failed');
        }

        // Step 3: Extract token and employer
        const { token, employer } = res.data;

        if (!token || !employer) {
          setLoading(false);
          return setError('Invalid response from server');
        }

        // Step 4: Store token and employer info
        localStorage.setItem('token', token);
        localStorage.setItem('EmployerId', employer._id);
        localStorage.setItem('role', employer.role);

        
        // Step 6: Navigate to dashboard
        navigate('/employer-dashboard');
      } catch (err) {
        console.error('Login error:', err);
        setError('Server error. Please try again.');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">Employer Login</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {error && <div className="text-red-500">{error}</div>}

        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full border p-2 rounded"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500">{formik.errors.email}</div>
          )}
        </div>

        <div className="relative">
          <label className="block font-semibold">Password</label>
          <input
            type={passwordVisible ? 'text' : 'password'} 
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full border p-2 rounded pr-10" 
          />
          {/* Eye Icon for Toggling Password Visibility */}
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/8 cursor-pointer"
            onClick={() => setPasswordVisible(!passwordVisible)} 
          >
            {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500">{formik.errors.password}</div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="flex justify-between mt-3">
          <Link to="/forgetpwd" className="text-blue-600 text-sm">
            Forgot Password?
          </Link>
          <Link to="/EmployerSignup" className="text-blue-600 text-sm">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
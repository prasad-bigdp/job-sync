import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post('http://127.0.0.1:5000/api/users/login', values);
        console.log('Login Response:', res);
    
        if (res.data.success) {
          const { token, user } = res.data;
    
          // Save in localStorage BEFORE navigation
          localStorage.setItem('token', token);
          localStorage.setItem('UserId', user._id);
          localStorage.setItem('role', user.role);
    
          console.log('Token stored:', token);
    
          navigate('/user-dashboard');
        } else {
          setError('Invalid credentials');
        }
      } catch (err) {
        console.error('Login error:', err);
        setError('Server error or invalid credentials');
      }
    }
    
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
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
        <div>
          <label className="block font-semibold">Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full border p-2 rounded"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500">{formik.errors.password}</div>
          )}
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Login
        </button>

        <div className='flex justify-around'>

        <Link to="/forgetpwd" className="text-md text-center mt-3 text-blue-600 ">
         Forget Password ?
        </Link>
        <Link to="/signup" className="text-md text-center mt-3 text-blue-600">
        SignUp
        </Link>
        </div>

      </form>
    </div>
  );
}
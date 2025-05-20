import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import Header from '../Homecomponents/Header';
import { useAuth } from '../../context/AuthContext';

function UserLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setAuth } = useAuth();


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await axios.post('http://127.0.0.1:5000/api/users/login', values);
      console.log('Login Response:', res);

      if (res.data.success) {
        const { token, user } = res.data;
        console.log('Token:',res.data.token)
        console.log('User:',res.data.user)

        localStorage.setItem('token', token);
        localStorage.setItem('UserId', user._id);
        localStorage.setItem('role', user.role);
        setAuth({ token, userId: user._id, role: 'user' });
        navigate('/user-dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Server error or invalid credentials');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex min-h-screen bg-gray-100 justify-end items-center px-4">
        <div className="bg-[#ffffff] shadow-md rounded-lg w-full max-w-md px-8 pt-6 pb-8">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">User Login</h3>

          {error && (
            <div className="text-red-500 text-sm text-center mb-4">{error}</div>
          )}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email address
                  </label>
                  <Field
                    type="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm italic" />
                </div>

                <div className="mb-6 relative">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      type={showPassword ? 'text' : 'password'}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                      id="password"
                      name="password"
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </div>
                  </div>
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm italic" />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <Link to="/forgot-password" className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800">
                    Forgot Password?
                  </Link>
                </div>

                <div className="text-center mb-4">
                  <span className="text-gray-600 text-sm">Don't have an account? </span>
                  <Link to="/UserSignup" className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800">
                    Sign up
                  </Link>
                </div>

                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  disabled={isSubmitting}
                >
                  Log In
                </button>

                <div className="text-center mt-4">
                  <span className="text-sm text-gray-700">
                    Don't have an account?{' '}
                    <Link to="/UserSignup" className="text-blue-500 hover:underline">
                      Click here to sign up
                    </Link>
                  </span>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
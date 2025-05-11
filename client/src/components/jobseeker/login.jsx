import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function UserLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await axios.post('http://127.0.0.1:5000/api/users/login', values);
      console.log('Login Response:', res);

      if (res.data.success) {
        const { token, user } = res.data;

        localStorage.setItem('token', token);
        localStorage.setItem('UserId', user._id);
        localStorage.setItem('role', user.role);

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
    <div className="flex min-h-screen bg-gray-100 justify-end items-center px-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md px-8 pt-6 pb-8">
        <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">User Login</h3>
        
        {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email address
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm italic" />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm italic" />
              </div>

              <div className="flex items-center justify-between mb-4">
                <Link to="/forgot-password" className="text-blue-500 hover:text-blue-800 text-sm">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full"
                disabled={isSubmitting}
              >
                Log In
              </button>

              <div className="text-center mt-4">
                <span className="text-sm text-gray-700">
                  Don’t have an account?{' '}
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
  );
}

export default UserLogin;

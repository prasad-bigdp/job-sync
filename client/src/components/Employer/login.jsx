import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link,useNavigate } from 'react-router-dom';
import Header from '../../header'
import { useState } from 'react';
import axios from 'axios';


function EmployeeLogin() {
    const navigate = useNavigate();
  const [error, setError] = useState('');

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (values) => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', values); // adjust backend port if needed
      console.log('Login Response:', res);

      if (res.data.success) {
        const { token, user } = res.data;

        localStorage.setItem('token', token);
        localStorage.setItem('UserId', user._id);
        localStorage.setItem('role', user.role);

        console.log('Token stored:', token);

        navigate('/user-Dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Server error or Invalid credentials');
    }
  };
       
    return (
        <div>
            <Header />
            <div className="flex min-h-screen bg-gray-100 justify-end items-center px-4">
            <div className="bg-[#ffffff] shadow-md rounded-lg w-full max-w-md px-8 pt-6 pb-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">Employee Login</h3>
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

                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>
                                <Field
                                    type="password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    name="password"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm italic" />
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <Link to="/forgot-password" className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800">
                                    Forgot Password?
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
                                    <Link to="/EmployerSignup" className="text-blue-500 hover:underline">
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

export default EmployeeLogin;
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function EmployerSignup() {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      company: "",
      receiveApplicationEmails: true,
      darkMode: false
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").min(3, "Name is too short"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().matches(/^[0-9]{10}$/, "Enter 10 digit phone number").nullable(),
      password: Yup.string().required("Password is required").min(6, "At least 6 characters"),
      company: Yup.string().nullable()
    }),
    onSubmit: (values) => {
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
        company: values.company,
        role: "employer",
        settings: {
          receiveApplicationEmails: values.receiveApplicationEmails,
          darkMode: values.darkMode
        }
      };
      console.log("Submitting employer:", payload);
    }
  });

  return (
    <div className="container mt-4">
      <h3>Employer Signup</h3>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>Name</dt>
          <dd>
            <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.name && formik.errors.name && (
              <dd className="text-danger">{formik.errors.name}</dd>
            )}
          </dd>

          <dt>Email</dt>
          <dd>
            <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.email && formik.errors.email && (
              <dd className="text-danger">{formik.errors.email}</dd>
            )}
          </dd>

          <dt>Phone</dt>
          <dd>
            <input type="text" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.phone && formik.errors.phone && (
              <dd className="text-danger">{formik.errors.phone}</dd>
            )}
          </dd>

          <dt>Password</dt>
          <dd>
            <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.password && formik.errors.password && (
              <dd className="text-danger">{formik.errors.password}</dd>
            )}
          </dd>

          <dt>Company</dt>
          <dd>
            <input type="text" name="company" value={formik.values.company} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.company && formik.errors.company && (
              <dd className="text-danger">{formik.errors.company}</dd>
            )}
          </dd>

          <dt>Preferences</dt>
          <dd>
            <label>
              <input type="checkbox" name="receiveApplicationEmails" checked={formik.values.receiveApplicationEmails} onChange={formik.handleChange} />
              Receive Application Emails
            </label>
          </dd>
          <dd>
            <label>
              <input type="checkbox" name="darkMode" checked={formik.values.darkMode} onChange={formik.handleChange} />
              Dark Mode
            </label>
          </dd>
        </dl>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default EmployerSignup;

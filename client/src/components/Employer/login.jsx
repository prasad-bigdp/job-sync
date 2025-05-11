import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Header from '../../header'

function EmployeeLogin() {
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const initialValues = {
        email: '',
        password: '',
    };

    const onSubmit = (values) => {
        console.log('Logging in employee with:', values);
    };

    return (
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
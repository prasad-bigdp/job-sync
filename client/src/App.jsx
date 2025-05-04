import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import EmployerLogin from './pages/EmployerLogin';
import UserLogin from './pages/UserLogin';
import UserDashBoard from './pages/UserDashBoard';
import UserSignup from './pages/UserSignup';
import ForgetPassword from './pages/ForgetPassword';
import ProtectedRoute from './components/ProtectedRoute';


export default function App() {
  

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/employer" element={<EmployerLogin />} />
        <Route path="/login/user" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/forgetpwd" element={<ForgetPassword />} />
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute>
              <UserDashBoard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

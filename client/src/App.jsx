

import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import MobileSearchJobs from "./pages/MobileSearchJobs";
import JobList from "./components/Homecomponents/JobList";
import EmployerSignup from './components/Employer/Signup'
import Login from './pages/login'
import EmployeeLogin from './components/Employer/login';
import ForgotPassword from './components/forgot-password/Forgot-password';
import UserLogin from './components/jobseeker/login';
import UserSignup from './components/jobseeker/UserSignup';
import ResetPassword from './components/forgot-password/ResetPassword'
import EmployerDashboard from "./components/dashboards/EmployerDashboard";
import UserDashboard from './components/dashboards/UserDashboard';
function App() {
  return (

      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/seekerform" element={<MobileSearchJobs />} />
        <Route path="/search" element={<JobList />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/EmployerLogin" element={<EmployeeLogin/>} />
        <Route path="/EmployerSignup" element={<EmployerSignup/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/UserLogin" element={<UserLogin/>}/>
        <Route path="/UserSignup" element={<UserSignup />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/user-Dashboard" element={<UserDashboard />} />
      </Routes>


  )

}

export default App;

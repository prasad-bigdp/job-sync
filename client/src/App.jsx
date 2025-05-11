<<<<<<< HEAD

import { useState } from 'react'
=======
import "./App.css";

>>>>>>> 1a91157338d99d4c754ca0c70f322cc917fc923a
// import Header from './header'
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import MobileSearchJobs from "./pages/MobileSearchJobs";
import JobList from "./components/Homecomponents/JobList";
import EmployerSignup from './components/Employer/Signup'
import Login from './pages/login'
import EmployeeLogin from './components/Employer/login';
import ForgotPassword from './components/forgot-password/Forgot-password';
import  UserLogin from './components/JobSeeker/login';
import  UserSignup from './components/JobSeeker/UserSignup';
import UserDashboard from './components/UserDashboard/userDashboard';

function App() {
  return (

<<<<<<< HEAD
=======
    
>>>>>>> 1a91157338d99d4c754ca0c70f322cc917fc923a
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/seekerform" element={<MobileSearchJobs />} />
      <Route path="/search" element={<JobList />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/EmployerLogin" element={<EmployeeLogin/>} />
        <Route path="/EmployerSignup" element={<EmployerSignup/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/UserLogin" element={<UserLogin/>}/>
        <Route path="/UserSignup" element={<UserSignup />} />
        <Route path="/user-Dashboard" element={<UserDashboard />}/>
      </Routes>
    
<<<<<<< HEAD
  );

}

export default App;
=======
  )

}

export default App;
>>>>>>> 1a91157338d99d4c754ca0c70f322cc917fc923a

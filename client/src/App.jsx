import { useState } from 'react'

import './App.css'
import { BrowserRouter } from 'react-router-dom';
import UserLogin from './components/user/login'

// import Header from './header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployerSignup from './components/Employer/Signup'
import Home from './pages/Home'
import Login from './pages/login'
import UserSignup from './components/jobseeker/UserSignup'
import ForgotPassword from './components/forgot-password/Forgot-password';


function App() {
  // const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
    <>
   
    <UserLogin/>
     
    </>
    </BrowserRouter>
  );

    
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/EmployerSignup" element={<EmployerSignup/>} />
        <Route path="/UserSignup" element={<UserSignup/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
      </Routes>
    
  
}

export default App


import { useState } from 'react'
// import Header from './header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployerSignup from './components/Employer/Signup'
import Home from './pages/Home'
import Login from './pages/login'
import EmployeeLogin from './components/Employer/login';
import ForgotPassword from './components/forgot-password/Forgot-password';
import  UserLogin from './components/JobSeeker/login';
import  UserSignup from './components/JobSeeker/UserSignup';


function App() {
  const [count, setCount] = useState(0)

  return (

      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/EmployerLogin" element={<EmployeeLogin/>} />
        <Route path="/EmployerSignup" element={<EmployerSignup/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/UserLogin" element={<UserLogin/>}/>
        <Route path="/UserSignup" element={<UserSignup />} />
      </Routes>
    
  );

}

export default App;
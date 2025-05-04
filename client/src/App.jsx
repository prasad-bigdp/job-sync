import { useState } from 'react'
<<<<<<< HEAD
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import UserLogin from './components/user/login'
=======
// import Header from './header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployerSignup from './components/Employer/Signup'
import Home from './pages/Home'
import Login from './pages/login'
import UserSignup from './components/jobseeker/UserSignup'
>>>>>>> 3e10416182bceb9fd75e131601f80385afeee9bc

function App() {
  // const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD
    <BrowserRouter>
    <>
   
    <UserLogin />
     
    </>
    </BrowserRouter>
  );
=======
    
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/EmployerSignup" element={<EmployerSignup/>} />
        <Route path="/UserSignup" element={<UserSignup/>} />
      </Routes>
    
  )
>>>>>>> 3e10416182bceb9fd75e131601f80385afeee9bc
}

export default App

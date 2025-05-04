import { useState } from 'react'
// import Header from './header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployerSignup from './components/Employer/Signup'
import Home from './pages/Home'
import Login from './pages/login'
import UserSignup from './components/jobseeker/UserSignup'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/EmployerSignup" element={<EmployerSignup/>} />
        <Route path="/UserSignup" element={<UserSignup/>} />
      </Routes>
    
  )
}

export default App

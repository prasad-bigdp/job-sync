import { useState } from 'react'
// import Header from './header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployerSignup from './components/Employer/Signup'
import Home from './pages/Home'
import Login from './pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/EmployerLogin" element={<EmployerSignup/>} />
      </Routes>
    
  )
}

export default App

import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './components/user/login';
import EmployerSignup from './components/Employer/Signup';
import Home from './pages/Home';
import Login from './pages/login';
import UserSignup from './components/jobseeker/UserSignup';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/EmployerSignup" element={<EmployerSignup />} />
          <Route path="/UserSignup" element={<UserSignup />} />
          {/* You might want to place UserLogin on a specific route, 
             or render it conditionally based on user authentication */}
          <Route path="/user/login" element={<UserLogin />} /> 
        </Routes>
      </>
    </Router>
  );
}

export default App;
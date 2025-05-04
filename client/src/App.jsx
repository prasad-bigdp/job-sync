import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import UserLogin from './components/user/login'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <>
   
    <UserLogin />
     
    </>
    </BrowserRouter>
  );
}

export default App

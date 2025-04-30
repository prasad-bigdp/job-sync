
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'



function App() {
  return (
   
        <Routes>
           <Route path='/' Component={Homepage} ></Route>
        </Routes>
   
  )
}

export default App

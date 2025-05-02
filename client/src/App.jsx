import './App.css'

import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage';
import { Import } from 'lucide-react';
import MobileSearchJobs from './pages/MobileSearchJobs';


function App() {
  return (
     <Routes>
       <Route path='/index' Component={Homepage}/>
       <Route path='/seekerform' Component={MobileSearchJobs}/>     
     </Routes>
  )
}

export default App;

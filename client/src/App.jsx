
import './App.css'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import MobileSearchJobs from './pages/MobileSearchJobs'
import JobList from './componets/JobList'




function App() {
  return (
        <Routes>
           <Route path='/index' Component={Homepage} ></Route>
           <Route path='/seekerform' Component={MobileSearchJobs}/>
           <Route path='/job' Component={JobList}/>
        </Routes>
  
  )
}

export default App;

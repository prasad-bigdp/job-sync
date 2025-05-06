import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import MobileSearchJobs from './pages/MobileSearchJobs'
import JobList from './components/JobList'

function App() {
  return (
        <Routes>
           <Route path='/' Component={Homepage} ></Route>
           <Route path='/seekerform' Component={MobileSearchJobs}/>
           <Route path='/search' Component={JobList}/>
        </Routes>

  )
}

export default App;

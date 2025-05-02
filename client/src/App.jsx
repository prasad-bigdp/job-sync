
import './App.css'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import MobileSearchJobs from './pages/MobileSearchJobs'
import Navbar from './componets/Navbar'
import JobList from './componets/JobList'
import Header from './componets/Header'




function App() {
  return (

    <div>
      <Routes>
        <Route path='/' Component={Homepage}></Route>
        <Route path='/homepage' Component={Homepage} ></Route>
        <Route path='/jobsseekerform' Component={MobileSearchJobs} />


        <Route path='/navbar' Component={Navbar}></Route>
        <Route path='jobs' Component={JobList}></Route>
      </Routes>
    </div>


  )
}

export default App;

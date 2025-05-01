
import './App.css'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import MobileSearchJobs from './pages/MobileSearchJobs'




function App() {
  return (

        <Routes>
           <Route path='/index' Component={Homepage} ></Route>
           <Route path='/jobsseekerform' Component={MobileSearchJobs}/>
        </Routes>
   

  )
}

export default App;

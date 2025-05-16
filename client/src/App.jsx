import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ApplyJobs from './Components/ApplyJobs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <BrowserRouter>
      <Routes>
        <Route path='/job' element={ <ApplyJobs  />}/>

        
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

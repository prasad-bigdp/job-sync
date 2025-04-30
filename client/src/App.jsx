import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import JobList from './components/Job'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/navbar' element={<Navbar/>}></Route>
        <Route path='/jobs' element={<JobList/>}></Route>
      </Routes>
    </div>
  )
}

export default App

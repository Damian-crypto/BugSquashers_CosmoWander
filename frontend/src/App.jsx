import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'

function App() {

  return (
    <>
      <div>
        <Router>
           <Routes>
            <Route exact path='/' element={<LandingPage/>} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/home' element={<Home/>} />
            <Route exact path='/register' element={<Register/>} />
          </Routes>
        </Router>
        
      </div>
    </>
  )
}

export default App

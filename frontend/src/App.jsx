import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import PackageInformation from './pages/PackageInformation'
import Booking from './pages/Booking'
import MyTrips from './pages/MyTrips'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e, sid) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/api/v1/universe', {
        'sid': sid
	    });
      const token = response.data.token;
      
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
      <div className="font-space-mono">
        <Router>
           <Routes>
            <Route exact path='/' element={<LandingPage/>} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/home' element={<Home/>} />
            <Route exact path='/register' element={<Register/>} />
            <Route exact path='/packageinformation' element={<PackageInformation/>} />  
            <Route exact path='/booking' element={<Booking/>} />
            <Route exact path='/mytrips' element={<MyTrips/>} />
          </Routes>
        </Router>
        
      </div>
    </>
  )
}

export default App

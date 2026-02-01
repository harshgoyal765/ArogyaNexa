import React from 'react'
import LandingPage from './components/LandingPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login'
import Signup from './pages/signup'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <ToastContainer/>
    <Navbar/>
     <Routes>
        <Route path="/" element={<LandingPage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      </Routes>
      </>
  )
}

export default App

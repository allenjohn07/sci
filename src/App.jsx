import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import { SciNavbar } from './components/SciNavbar'
import SciFooter from './components/SciFooter'
import About from './pages/About'
import Ranking from './pages/Ranking'
import Login from './pages/Login'

const App = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Router>
        <SciNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/ranking' element={<Ranking />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <SciFooter/>
      </Router>
    </div>
  )
}

export default App
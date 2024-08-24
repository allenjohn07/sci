import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import { SciNavbar } from './components/SciNavbar'
import Landing from './pages/Landing'
import SciFooter from './components/SciFooter'

const App = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Router>
        <SciNavbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
        </Routes>
        <SciFooter/>
      </Router>
    </div>
  )
}

export default App
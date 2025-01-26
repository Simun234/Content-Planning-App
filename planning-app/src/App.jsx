import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'

function App() {


  return (
     <Router>
      <Navbar />
      <Routes>
        <Route/>
        <Route/>
        <Route/>
      </Routes>
     </Router>
  )
}

export default App

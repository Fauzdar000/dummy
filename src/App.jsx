import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dummyproject from './navbar/Navbar.jsx';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Products from './pages/Product';
// import About from './pages/About';


function App() {
  

  return (
    <>

        <Router>
      <Dummyproject  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
    
    </>
  )
}

export default App

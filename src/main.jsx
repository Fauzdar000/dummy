import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Dummyproject from './navbar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

{/* <Dummyproject/> */}
    <App />


  </StrictMode>,
)

import React from 'react'
import Home2 from './pages/Home2.jsx'
import Pswds from './pages/Pswds.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home2 />} />
      <Route path='/pswds' element={<Pswds />} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
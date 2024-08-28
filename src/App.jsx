import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Landing from './pages/Landing'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='*' element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
// import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Instituite from './pages/Institutes'
import Department from './pages/Department'
import Events from './pages/Events'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Dashboard/>}></Route>
          <Route path='institutes' element={<Instituite/>}></Route>
          <Route path='department' element={<Department/>}></Route>
          <Route path='events' element={<Events/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='signUp' element={<SignUp/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

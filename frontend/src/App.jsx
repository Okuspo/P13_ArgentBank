import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AccountTransactions from './pages/AccountTransactions'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/login' element={<Login />}>
        </Route>
        <Route path='/dashboard' element={<Dashboard />}>
        </Route>
        <Route path='/account' element={<AccountTransactions />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

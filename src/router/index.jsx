import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main_Layout from '../layout/main'

export default function Router() {
  return (
  <Routes>
    <Route path='/' element={<Main_Layout/>}>
    
    </Route>
  </Routes>
  )
}

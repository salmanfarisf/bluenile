import React from 'react'
import Header from '../header'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

export default function Main_Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

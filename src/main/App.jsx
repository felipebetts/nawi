import React from 'react'
import './App.css'

import { BrowserRouter } from 'react-router-dom'

import Header from '../components/Header'
import Home from '../components/Home'
import Footer from '../components/Footer'

import Routes from './Routes'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
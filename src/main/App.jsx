import React from 'react'
import './App.css'

import { BrowserRouter } from 'react-router-dom'

import Logo from '../components/Logo'
import Header from '../components/Header'
import FooterLogo from '../components/FooterLogo'
import Footer from '../components/Footer'

import Routes from './Routes'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1 className="d-none">Tarot Nawi</h1>
        <Logo />
        <Header />
        <Routes />
        <FooterLogo />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
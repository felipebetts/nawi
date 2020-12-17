import React from 'react'
import './Logo.css'

import LogoImg from '../assets/images/logo.png'

function Logo() {
    return (
        <div className="logo center">
            <img src={LogoImg} alt="Logo" className="logoImg"/>
        </div>
    )
}

export default Logo
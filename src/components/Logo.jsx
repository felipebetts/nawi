import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'

import LogoImg from '../assets/images/logo.png'

function Logo() {
    return (
        <div className="logo center">
            <Link to={'/'}>
                <img src={LogoImg} alt="Logo" className="logoImg"/>
            </Link>
        </div>
    )
}

export default Logo
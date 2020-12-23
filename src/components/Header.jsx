import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
    return (
         <header>
            <div className="center header">
                <nav className="menu">
                    <Link to={'/'}>
                        <div className="menu-item">Início</div>
                    </Link>
                    <Link to={'/sobre'}>
                        <div className="menu-item">Sobre</div>
                    </Link>
                    <Link to={"/contato"}>
                        <div className="menu-item">Contato</div>
                    </Link>
                    <Link to={"/agendamento"}>
                        <div className="menu-item">Agendamento</div>
                    </Link>
                </nav>
                <div className="mobile-header">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header>
    )
}

export default Header
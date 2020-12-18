import React from "react";

import './FooterLogo.css'

import LogoImg from '../assets/images/logo-simples.png'

function FooterLogo() {
    return (
        <div className="center footerLogo">
            <img src={LogoImg} alt="Logo" className="logoInferior"/>
        </div>
    )
}

export default FooterLogo
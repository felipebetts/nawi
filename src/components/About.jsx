import React from 'react'
import './About.css'

import logo1 from '../assets/images/Logo-TAROT-05.jpg' 

function About() {
    return (
        <div className="content">
            <h2>Sobre</h2> 
            <div className="center">
                <img src={logo1} alt="Logo"/>   
            </div>
        </div>
    )
}

export default About
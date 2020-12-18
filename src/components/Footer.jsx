import React from "react";
import './Footer.css'
import 'font-awesome/css/font-awesome.min.css'

function Footer() {
    return (
        <footer className="footer center">
            <div>Desenvolvido com <i className="fa fa-heart"></i> por tegamano</div>
            <a href="https://api.whatsapp.com/send?phone=5521991689111" target='_blank' rel="noreferrer">
                <i className="fa fa-whatsapp"></i>
            </a>
        </footer>
    )
}

export default Footer
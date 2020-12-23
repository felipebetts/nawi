import React from "react";
import './Footer.css'
import 'font-awesome/css/font-awesome.min.css'

function Footer() {

    function renderCredits() {
        console.log(document.width)
    }

    return (
        <footer className="footer center">
            <div>
                <p>Desenvolvido com <i className="fa fa-heart"></i> por tegamano</p>
            </div>
            {renderCredits()}
            <div className="footer-right">
                Nawi Tarot
                <a href="https://api.whatsapp.com/send?phone=5521991689111" target='_blank' rel="noreferrer">
                    <i className="fa fa-whatsapp"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer
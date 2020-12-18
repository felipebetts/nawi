import React from 'react'
import './Booking.css'

import logo3 from '../assets/images/Logo-TAROT-07.jpg' 

function Booking() {
    return (
        <div className="content">
            <h2>Agendamento</h2>
            <div className="center">
                <img src={logo3} alt="Logo"/>    
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia maximus pulvinar. Curabitur facilisis turpis at sem ornare, id euismod tellus dictum. Ut a fermentum quam. Suspendisse dignissim imperdiet finibus. Nulla euismod semper fermentum. Aliquam viverra faucibus vulputate. Fusce maximus arcu id ultricies mollis. Phasellus imperdiet augue in venenatis porttitor. Cras dignissim convallis nisi, id feugiat dolor. Nunc id augue maximus, dignissim mauris condimentum, congue diam. Nulla pharetra sit amet urna id interdum. Aenean efficitur fermentum sem non convallis. Nam consectetur diam at dignissim consectetur. Aenean vitae mi nec massa tempus dignissim. Proin at consequat leo. Suspendisse vitae massa laoreet lacus mattis feugiat.</p>
            <p>Etiam id ligula molestie, gravida est in, imperdiet dolor. Duis vel arcu in urna gravida maximus non a mi. Praesent vulputate, enim at dignissim egestas, sem magna rutrum neque, eget blandit lorem justo eget dolor. Curabitur porttitor arcu id lacus posuere, pellentesque bibendum erat laoreet. Nam turpis diam, tincidunt sit amet risus vitae, convallis consequat orci. Fusce viverra vehicula sollicitudin. Quisque feugiat semper libero a euismod. Morbi porta posuere tortor vel mattis.</p>
        </div>
    )
}

export default Booking
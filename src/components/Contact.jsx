import React from 'react'
import './Contact.css'

import logo2 from '../assets/images/Logo-TAROT-06.jpg' 

function Contact() {
    return (
        <div className="content">
            <h2>Contato</h2>  
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel leo aliquam, porttitor velit eu, condimentum ante. Integer sit amet sodales leo, at aliquet sapien. In non accumsan turpis. Vivamus nunc purus, malesuada id eros at, congue aliquam nulla. Maecenas lobortis finibus quam at mattis. Nam eu lectus sed diam aliquet blandit sed vitae libero. Ut eget purus sed lorem rutrum blandit. Nulla lacinia sagittis tortor, et tempor massa sagittis in. Fusce mattis erat ex, eu consequat nunc ornare non. Phasellus eleifend eget turpis vitae sollicitudin.</p>
            <p>Nullam ultrices tempor tortor a viverra. Cras sodales nisi ut justo semper, at molestie erat bibendum. Sed vehicula dictum vehicula. Mauris aliquam tortor elementum, venenatis ligula vel, lobortis metus. Pellentesque justo urna, laoreet at sem vel, volutpat fermentum enim. Fusce suscipit tortor est, sed vehicula nisi dapibus vel. Nullam placerat mauris turpis, vel consequat eros tincidunt vitae. In sed tortor ligula. Ut tincidunt tempus nulla eu vestibulum. Praesent eros magna, porttitor sed massa in, feugiat maximus dui. Suspendisse cursus magna eget magna tincidunt convallis. Nam auctor nisi nec enim vestibulum porta.</p>
            <div className="center">
                <img src={logo2} alt="Logo"/>  
            </div>
            <p>Nullam a imperdiet ex. Etiam sit amet sagittis diam. Quisque convallis lacus sed nibh imperdiet, in posuere quam gravida. Nulla varius tortor accumsan ligula luctus maximus. Proin tempus turpis ante. Suspendisse eu pharetra nisi. In viverra nisl et turpis semper viverra. Pellentesque ac diam lacus. Fusce mattis mauris ex, eu accumsan justo finibus quis. Vivamus magna ex, viverra eget consequat at, rutrum a ipsum. Praesent facilisis dui non mollis cursus. Suspendisse potenti.</p>
            <p>Ut semper molestie lacus id pharetra. Vivamus aliquet suscipit ligula. Donec congue libero a condimentum iaculis. Aenean vitae nisi ornare, mattis eros eu, porta ipsum. Fusce commodo sem vel convallis imperdiet. Donec mi metus, gravida eu consequat quis, cursus ac urna. Ut urna velit, pulvinar at elit non, finibus sodales enim. Cras tempor pharetra lorem, a ornare metus condimentum ac. Donec ac velit faucibus, luctus ipsum et, scelerisque felis. Vestibulum eget tortor bibendum, aliquet neque at, semper ante. Praesent vitae convallis nibh. Nunc ut molestie ipsum, vel condimentum augue. Cras finibus urna quis ipsum tempus, id laoreet nisl venenatis. Mauris tristique neque vitae eros hendrerit vehicula.</p>
        </div>
    )
}

export default Contact
import React from 'react'
import './About.css'

import logo1 from '../assets/images/Logo-TAROT-05.jpg' 

function About() {
    return (
        <div className="content">
            <h2>Sobre</h2> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis non ipsum eget aliquam. Quisque vel dui metus. Fusce lobortis consectetur scelerisque. Quisque ac purus mi. Ut et iaculis justo, ac dignissim urna. Curabitur accumsan dapibus hendrerit. Sed consequat mattis tortor, sed faucibus ante ultricies vitae. Sed id justo vel nunc ullamcorper placerat eu id justo. Duis volutpat arcu nec tortor commodo aliquam. Ut in ligula convallis, hendrerit nisl ac, egestas nibh. Proin euismod non felis sed fermentum. Maecenas auctor eget eros id mattis. Integer ipsum dolor, viverra consequat vestibulum et, dapibus ut nisl. Morbi et imperdiet enim.</p>
            <div className="center">
                <img src={logo1} alt="Logo"/>   
            </div>
            <p>Etiam id posuere lorem. Fusce eleifend eget purus vel consectetur. Donec posuere odio sit amet metus efficitur faucibus. Sed ac erat scelerisque, gravida lacus nec, facilisis quam. Integer nibh tellus, ullamcorper ac mattis sollicitudin, aliquam sed velit. Ut aliquet, metus id lobortis rhoncus, ante orci bibendum sem, vel viverra eros nunc ut sem. Nullam a posuere arcu. Donec a condimentum urna, eget porta orci. Vestibulum pulvinar, enim et faucibus tincidunt, est risus fermentum neque, eu semper sapien dui vel tortor. Sed sed sapien non augue vulputate blandit quis vel quam. Duis at porttitor massa, vitae venenatis odio. Nullam rhoncus vestibulum nisi, a hendrerit nisl maximus at. Duis et felis tellus. Maecenas blandit facilisis nibh eget placerat.</p>
            <p>Morbi porta blandit ex sit amet molestie. Suspendisse fringilla consectetur justo. Nullam lacinia ligula eu magna laoreet pretium. Ut nec ornare turpis. Donec sit amet egestas purus, in ultricies orci. Cras et arcu ut metus ornare maximus. Fusce imperdiet molestie diam ut venenatis. Morbi fringilla lobortis ipsum, commodo tincidunt augue euismod sed. Sed condimentum est et mauris bibendum, a vestibulum odio consequat. In vestibulum a diam id lobortis. Ut pharetra pharetra massa in efficitur. Suspendisse leo mauris, porta id vulputate et, vestibulum vitae erat. Donec at placerat nisi, ut aliquet velit. Proin imperdiet vel nunc in scelerisque.</p>
        </div>
    )
}

export default About
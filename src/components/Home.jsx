import React from 'react'
import './Home.css'

import Cartas from '../assets/images/cartas.jpg'

function Home() {
    return (
        <div className="content">
            <h2>Tarot</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis sollicitudin lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec egestas velit, vel tincidunt ipsum. Duis vel orci nec mauris euismod condimentum. Morbi finibus est est, non porta augue ultrices nec. Sed et aliquet lectus, vitae varius magna. Nam in eros et sapien egestas bibendum. Duis non nibh pretium, imperdiet turpis eu, sagittis turpis.</p>
            <div className="center">
                <img src={Cartas} alt="Cartas de Tarot" className="cartas" />
            </div>
            <p>Mauris elementum, ex sit amet tincidunt fringilla, odio lacus faucibus turpis, id tempus tellus dui eu nulla. Sed mollis commodo magna fringilla vehicula. In ipsum eros, aliquam nec fringilla eu, facilisis vitae orci. Ut id malesuada erat. Sed imperdiet eleifend dapibus. Nullam nec nisl ac tellus semper mollis ut lobortis ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed neque nulla, ultricies ut fermentum in, tempor sit amet tortor.</p>
            <p>Sed suscipit libero et lacus molestie iaculis. Aliquam iaculis leo vitae hendrerit viverra. Phasellus eu egestas ligula, sed venenatis nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet faucibus tortor, vitae dapibus arcu. Fusce dictum vel est non blandit. Pellentesque imperdiet lobortis ligula, eget consectetur lorem. Nam ac finibus lacus.</p>
            <p>Proin at scelerisque arcu. Vivamus malesuada, metus quis dignissim consequat, magna libero accumsan massa, faucibus volutpat nunc nulla eget justo. Vivamus rutrum feugiat sem sed tincidunt. Curabitur malesuada et lacus sed cursus. Vivamus semper ut diam eu aliquet. Quisque id dignissim ante, eget viverra urna. Maecenas eu porttitor orci. Cras fringilla euismod sapien, et lacinia massa venenatis quis.</p>
            <p>Cras pharetra ipsum ac ipsum ullamcorper, eget luctus arcu fermentum. Sed mi elit, congue at efficitur vel, finibus fringilla nunc. Phasellus scelerisque, orci ac iaculis sodales, nibh risus feugiat augue, sit amet viverra nisl nisi sit amet quam. Sed orci ipsum, maximus vitae nisi ac, lacinia aliquet orci. Nam a rhoncus felis, nec molestie purus. Nam semper consequat mauris, sit amet viverra sapien molestie ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper pharetra nunc in vulputate. Vivamus interdum urna non libero elementum, sit amet auctor dui dapibus. Vestibulum a tincidunt risus.</p>
        </div>
    )
}

export default Home
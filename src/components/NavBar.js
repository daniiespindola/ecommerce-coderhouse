import React from 'react'
import CartWidget from './CartWidget'
import './Navbar.css'

function Navbar(props) {
        return (
            <div>
              <ul id="nav">
                <li><a href="">Inicio</a></li>
                <li><a href="">Productos</a></li>
                <li><a href="">Destacados</a></li>
                <li><a href="">Contacto</a></li>
                <li><a style={{marginTop: '-5px'}} href=""><CartWidget /></a></li>
              </ul>
            </div>
        );
}

export default Navbar;
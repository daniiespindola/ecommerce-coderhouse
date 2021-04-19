import React from 'react'
import CartWidget from '../CartWidget/CartWidget.js'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar(props) {
        return (
            <div>
              <ul id="nav" style={{color: 'azure'}} >
                <li id="titulo"><Link to='/'>Inicio</Link></li>
                <li><Link to={`/category/polaroid`}>Polaroid</Link></li>
                <li><Link to={`/category/personalizadas`}>Personalizadas</Link></li>
                <li><Link ><CartWidget /></Link></li>
              </ul>
            </div>
        );
}

export default Navbar;
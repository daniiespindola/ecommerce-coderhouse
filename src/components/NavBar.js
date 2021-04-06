import React from 'react'
import CartWidget from './CartWidget.js'
import './Navbar.css'

function Navbar(props) {
        return (
            <div>
              <ul id="nav">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Contact</a></li>
                <li><a style={{marginTop: '-5px'}} href=""><CartWidget /></a></li>
              </ul>
            </div>
        );
}

export default Navbar;
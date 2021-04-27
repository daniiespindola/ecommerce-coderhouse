import React, { useContext } from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { CartContext } from "../../context/CartContext";

function CartWidget(props) {
    const {cart} = useContext(CartContext);
    console.log(cart)
        return (
            <div>
            <i>
                <AddShoppingCartIcon />
            </i>
            <span> Cart </span>
            </div>
        );
}

export default CartWidget;
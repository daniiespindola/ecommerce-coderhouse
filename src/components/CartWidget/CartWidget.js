import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function CartWidget(props) {
        return (
            <div>
            <i>
                <AddShoppingCartIcon />
            </i>
            <span> Cart</span>
            </div>
        );
}

export default CartWidget;

import React, {useState, useEffect} from 'react'
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({item}) => {  
    return(                 
        <ItemList items={item} />
    )
}

export default ItemListContainer;
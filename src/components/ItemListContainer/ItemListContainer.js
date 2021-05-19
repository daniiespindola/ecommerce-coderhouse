import React, {useState, useEffect} from 'react'
import ItemList from "../ItemList/ItemList"

import FilterButton from "../FilterButton/FilterButton"
const ItemListContainer = ({items,setItems}) => {  
    
    return(  
        <div>  
             <div>
                <h2>Filtrar Por Producto</h2>
                <FilterButton nombreDelBoton="Filtrar Polaroid" setItems={setItems} items={items} campo="categoryId" condicion="==" valor="B1FP6SIMrJILT77WxIb8" />
                <FilterButton nombreDelBoton="Filtrar Personalizadas" setItems={setItems} items={items} campo="categoryId" condicion="==" valor="zHOzTf0dX5AZhQYdVmtN" />             
                <FilterButton nombreDelBoton="Todo" setItems={setItems} items={items} campo="categoryId" condicion="mostrarTodo" valor="" />
            </div>
            <ItemList items={items} />
        </div> 
    )
}

export default ItemListContainer;
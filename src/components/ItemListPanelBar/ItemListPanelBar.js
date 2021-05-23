import React from "react";
import FilterButton from '../FilterButton/FilterButton';






const ItemListPanelBar=({items,setItems})=>{

    return(
        <div className="d-flex col-3">
            <div>
                <h2>Filtrar Por Producto</h2>
                <FilterButton nombreDelBoton="Filtrar Polaroid" setItems={setItems} items={items} campo="categoryId" condicion="==" valor="B1FP6SIMrJILT77WxIb8" />
                <FilterButton nombreDelBoton="Filtrar Accesorios" setItems={setItems} items={items} campo="categoryId" condicion="==" valor="zHOzTf0dX5AZhQYdVmtN" />             
            
            </div>

            <div>
                <h3>Filtrar Por Precio</h3>
            </div>
        </div>
    )
}



export default ItemListPanelBar;
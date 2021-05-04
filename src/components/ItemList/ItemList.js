import React from "react";
import "./ItemList.css"
import ItemCount from "../ItemCount/ItemCount"
import {Link} from "react-router-dom"
const ItemList = ({items}) => {  
   console.log(items);
    return(
        <div className="itemListContainer col-10 d-flex flex-wrap">
            
             
                
                    {items && items.map(item => 
                     
                     <Link className="col-3 m-3 p-3 itemCard d-flex" to={`item/${item.id}`} key={item.id} >
                        <div className="d-flex row justify-content-center" >                        
                            <h3 >{item.title}</h3>
                            <h3>${item.price}</h3>
                            <div>
                            <img className="col-6 my-3"src={item.pictureUrl} />
                        </div>
                         </div>
                    </Link>
                    )}
                
             
             
        </div>
    )
}
export default ItemList;
import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.js'
import products from '../../products/Products.js'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer(props) { 
    const [item, setItem] = useState(null)
    const {itemId} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve) =>
        
        setTimeout(() => {
            resolve (products.find((product) => product.id === parseInt(itemId)));
        }, 2000)
        );
        promesa.then((product) => {
        setItem(product);
        });
        }, [itemId]);
    

    // Implementar mock invocando a getItems() y utilizando el resolver then
     return (
         <div style={{padding: '50px', display: 'inline-block'}}>
            {item 
            ? <>{`ID del producto: ${itemId}`}<ItemDetail item={item} /></> 
            : props.showMsg
                ? <h2>Cargando...</h2>
                : null}
        </div>
        )
    }
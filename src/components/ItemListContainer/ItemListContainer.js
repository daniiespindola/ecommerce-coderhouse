import React, { useEffect, useState }  from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList.js'
import products from '../../products/Products.js'
import { useParams } from 'react-router-dom'

export default function ItemListContainer() {
    const [items, setItems] = useState([])
    const {categoryId} = useParams()

    useEffect(()=>{
      const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
        if (categoryId) {
            const productsFilter = products.filter((product) => {
                return product.category.toString() === categoryId;
            });
            resolve(productsFilter);
        } else resolve(products);
        resolve(products);
        }, 2000);
    });
    promesa.then((resultado) => {
        setItems(resultado);
    });
}, [categoryId]);


        return (
            <div>
              <span style={{position: 'relative', top: '-20px'}}>Items de la categoria {categoryId}</span>
              {items.length > 0 ? <ItemList items={items} /> : <h2>Cargando...</h2>}
            </div>
        );
}
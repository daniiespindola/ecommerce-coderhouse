import React, { useEffect, useState }  from 'react'
import './ItemListContainer.css'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

export default function ItemListContainer() {
    const [items, setItems] = useState([])

    useEffect(()=>{
      const prom = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve([
            { id:1, title:"Fotos Polaroid", price:120, stock: 8, 
              pictureUrl:"https://nino.ar/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/img_6024_1.jpg",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" },
            { id:2, title:"Tazas personalizadas", price:1100,  stock: 10,
              pictureUrl:"https://nino.ar/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/d/o/dos_tazas-600.jpg",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
            },
            { id:3, title:"Calendario Polaroid", price:500,  stock: 5,
              pictureUrl:"https://nino.ar/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0009_1.jpg",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
             }
          ])
        },2000)
      })
  
      prom.then((resultado)=>{
        setItems(resultado)
      })
  
    })

    const onAdd =() => {}

        return (
            <div>
                {items.length > 0 ? <ItemList items={items} /> : <h2>Cargando...</h2>}
            </div>
        );
}
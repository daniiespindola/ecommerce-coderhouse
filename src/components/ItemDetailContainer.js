import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'


const getItems = () => { 
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve({
            title:"Fotolibro",
            price: 2700,
            description: "Fotolibro Express 20x20 x20 hojas",
            img:"https://nino.ar/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/img_4327-1080_3.jpg"

        })},2000)
    })
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    useEffect(() => {
        getItems().then((res)=> setItem(res))
        return;
    }, [])

    
     return <ItemDetail item={item} />
    }
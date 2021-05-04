import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {CartProvider} from "./components/CartContext/CartContext"
import CartContext from "./components/CartContext/CartContext"
import Cart from "./components/Cart/Cart"
const items =[

  {id:0,
  title:"Kit cuadrosx3 ",
  description:"Incluye tres impresiones en calidad fotográfica de 30x45 cm cada una, montadas sobre bastidores de fibrofácil negro de 9 mm., listos para colgar.",
  price:1500,
  stock:8,
  pictureUrl:"https://nino.ar/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/k/i/kit_deco_bastidor_x3__30x45_2.jpg"},

  {id:1,
  title:"Revista fotos ",
  description:"Fotorevista de 10 x 15 cm",
  price:780,
  stock:11,
  pictureUrl:"https://nino.ar/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/r/e/revista_15x20_2_450x450.jpg"},

  {id:2,
  title:"Kit Imanes Polaroid x 10",
  description:"Imanes con fotos a eleccion",
  price:650,
  stock:5,
  pictureUrl:"https://nino.ar/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/p/o/polaroid_iman_x10_1.jpg"},

  {id:3,
  title:"Pack 2 Tazas cerámicas",
  description:"Fabricada en cerámica blanca.",
  price:1100,
  stock:7,
  pictureUrl:"https://nino.ar/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/d/o/dos_tazas-600.jpg"},

  {
  id:4,
  title:"Rompecabezas 4 piezas",
  description:"Rompecabezas de cartón de 4 piezas",
  price:450,
  stock:7,
  pictureUrl:"https://nino.ar/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/r/o/rompe4_foto_1.jpg"
  },
  {id:5,
    title:"Postal Spotify 13x15 + Laminado 3D",
    description:"Papel fotográfico doble faz de 13x15 cm con laminado 3D",
    price:700,
    stock:5,
    pictureUrl:"https://nino.ar/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/m/i/miniatura13x15_2.jpg"},
  
]

function App() {
  return (
    <CartProvider>
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>

          <Route path='/item/:id'>          
            <ItemDetailContainer item={items}/>  
          </Route>
          
            <Route path='/cart'>          
                <Cart/>  
            </Route>
         
          <Route path='/'>          
            <ItemListContainer item={items}/>  
          </Route>

        </Switch>

      </BrowserRouter>      
    </div>
    </CartProvider>
    
  );
}

export default App;
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <CartProvider>
    <BrowserRouter >
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/'>
         <ItemListContainer />
        </Route>
        <Route path='/category/:categoryId'>
         <ItemListContainer />
        </Route>
        <Route path='/item/:itemId'>
          <ItemDetailContainer showMsg={true} />  
        </Route>
        <Route path='*'>
          404
        </Route>
      </Switch>
    </div> 
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
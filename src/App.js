import React from 'react';
import './App.css';
import NavBar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount';


const App = () =>{
  return (
    <>
    <div className="App">
      <NavBar />
    </div>
    <ItemListContainer greeting="Bienvenidos" />
          <ItemCount stock={100} count={1}/>

    </>
  );
}

export default App;
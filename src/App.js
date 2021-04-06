import React from 'react';
import './App.css';
import NavBar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <>
    <div className="App">
      <NavBar />
    </div>
    <ItemListContainer greeting="Bienvenidos" />
    </>
  );
}

export default App;
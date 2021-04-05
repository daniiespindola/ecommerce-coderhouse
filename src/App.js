import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <h1>Surf Stuff</h1>
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos" />
    </div>
    </>
  );
}

export default App;
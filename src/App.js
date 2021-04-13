import React from 'react';
import './App.css';
import NavBar from './components/Navbar'
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>

    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
    </>
  );
}

export default App;

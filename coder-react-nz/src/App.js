import React from "react";
import "./App.css";
import ItemCountContainer from "./Components/ItemCountContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import { NavBar } from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import CartContainer from "./CartContainer";
import Contacto from "./Components/Contacto";

function App() {
  return (
    <div className="bg-w-custom">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/category/:catid" element={<ItemListContainer />} />
        <Route exact path="/carrito" element={<CartContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;

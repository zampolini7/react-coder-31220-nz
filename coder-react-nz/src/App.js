import React, { Component } from "react";
import "./App.css";
import { ItemCount } from "./Components/itemCount";
import ItemCountContainer from "./Components/ItemCountContainer";
import ItemListContainer from "./Components/ItemListContainer";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <div className="bg-w-custom">
      <NavBar />
      <ItemListContainer />
      <ItemCountContainer />
    </div>
  );
}

export default App;

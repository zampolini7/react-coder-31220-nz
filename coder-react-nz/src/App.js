import React, { Component } from "react";
import "./App.css";
import ItemListContainer from "./Components/ItemListContainer";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <div className="bg-w-custom">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
